import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
        console.log("contact form sent successfully");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        console.error("failed to send contact form");
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log("Error occurred when submitting the contact form: ", error);
    }
  };

  return (
    <>
      <form className="flex flex-col items-start" onSubmit={handleSubmit}>
        <label
          className="flex flex-col leading-relaxed w-full text-xl mb-3"
          htmlFor="name"
        >
          Name
          <input
            className="border rounded-md p-4 leading-normal text-xl"
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
            className="border rounded-md p-4 leading-normal text-xl"
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
            className="border rounded-md p-4 leading-normal text-xl"
            required
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
