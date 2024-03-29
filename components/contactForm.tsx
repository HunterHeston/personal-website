import { useState, FormEvent } from "react";
import va from "@vercel/analytics";

enum ContactStatus {
  Success,
  InvalidName,
  InvalidEmail,
  InvalidMessage,
  Error,
  IsLoading,
  None,
}

function getErrorEnum(fieldError: string) {
  switch (fieldError) {
    case "name":
      return ContactStatus.InvalidName;
    case "email":
      return ContactStatus.InvalidEmail;
    case "message":
      return ContactStatus.InvalidMessage;
    default:
      return ContactStatus.Error;
  }
}

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [contactState, setContactState] = useState(ContactStatus.None);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setContactState(ContactStatus.IsLoading);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name, email, message }),
      });

      if (res.ok) {
        va.track("contact-form-submit", {
          success: true,
        });

        setContactState(ContactStatus.Success);
        console.log("contact form sent successfully");
        setEmail("");
        setName("");
        setMessage("");
      } else {
        va.track("contact-form-submit", {
          success: false,
        });

        const errorData = await res.json();
        setContactState(getErrorEnum(errorData.fieldError));
        console.error("contact form failed to send: ");
      }
    } catch (error) {
      console.log(
        "Unexpected error occurred when submitting the contact form: ",
        error
      );
    }
  };

  const inputClasses =
    "border rounded-md p-4 leading-normal text-xl text-background transition-all";

  return (
    <>
      <form className="flex flex-col items-start" onSubmit={handleSubmit}>
        <label
          className="flex flex-col leading-relaxed w-full text-xl mb-3"
          htmlFor="name"
        >
          <span>
            Name<span className="text-gray-500">*</span>
          </span>
          <input
            className={inputClasses + getErrorClasses(contactState, "name")}
            disabled={contactState == ContactStatus.IsLoading}
            required
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label
          className="flex flex-col leading-relaxed w-full text-xl mb-3"
          htmlFor="email"
        >
          <span>
            Email<span className="text-gray-500">*</span>
          </span>
          <input
            className={inputClasses + getErrorClasses(contactState, "email")}
            disabled={contactState == ContactStatus.IsLoading}
            required
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label
          className="flex flex-col leading-relaxed w-full text-xl mb-3"
          htmlFor="message"
        >
          <span>
            Message<span className="text-gray-500">*</span>
          </span>
          <textarea
            className={inputClasses + getErrorClasses(contactState, "message")}
            disabled={contactState == ContactStatus.IsLoading}
            required
            name="message"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <SubmitButton formStatus={contactState}></SubmitButton>
      </form>
    </>
  );
}

// submit button props
type SubmitButtonProps = {
  formStatus: ContactStatus;
};

function SubmitButton({ formStatus }: SubmitButtonProps) {
  let classNames =
    "w-full p-4 mt-4 bg-background dark:bg-darker text-primary rounded-md transition-all ";
  let text = "Send";

  if (formStatus === ContactStatus.Success) {
    classNames =
      "w-full p-4 mt-4 bg-background bg-accent dark:bg-darkAccent text-darker rounded-md transition-all ";
    text = "Sent!";
  }

  return (
    <button className={classNames} type="submit">
      {text}
    </button>
  );
}

function getErrorClasses(status: ContactStatus, field: string) {
  if (status === ContactStatus.None) {
    return "";
  }

  switch (field) {
    case "name":
      return status === ContactStatus.InvalidName ? " bg-red-100" : "";
    case "email":
      return status === ContactStatus.InvalidEmail ? " bg-red-100" : "";
    case "message":
      return status === ContactStatus.InvalidMessage ? " bg-red-100" : "";
    default:
      return "";
  }
}
