import { useState, FormEvent } from "react";

enum ContactStatus {
  Success,
  InvalidName,
  InvalidEmail,
  InvalidMessage,
  Error,
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

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name, email, message }),
      });

      if (res.ok) {
        setContactState(ContactStatus.Success);
        console.log("contact form sent successfully");
      } else {
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

  const inputClasses = "border rounded-md p-4 leading-normal text-xl";

  return (
    <>
      <form className="flex flex-col items-start" onSubmit={handleSubmit}>
        <label
          className="flex flex-col leading-relaxed w-full text-xl mb-3"
          htmlFor="name"
        >
          Name
          <input
            className={inputClasses + getErrorClasses(contactState, "name")}
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
          Email
          <input
            className={inputClasses + getErrorClasses(contactState, "email")}
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
          Message
          <textarea
            className={inputClasses + getErrorClasses(contactState, "message")}
            // required
            name="message"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <button
          className="w-full p-4 mt-4 bg-background dark:bg-darker text-primary rounded-md"
          type="submit"
        >
          Send
        </button>
      </form>
    </>
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
