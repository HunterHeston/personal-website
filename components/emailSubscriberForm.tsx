import { useState, FormEvent } from "react";

export default function EmailForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/new-subscriber", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setEmail("");
        console.log("Subscribed!");
      } else {
        console.error("Failed to subscribe.");
      }
    } catch (error) {
      console.log("Error occurred when send subscription request: ", error);
    }
  };

  return (
    <form className="flex mb-10" onSubmit={handleSubmit}>
      <label htmlFor="email" hidden>
        Email
      </label>
      <input
        className="p-2 w-72 border-l border-t border-b rounded-l-md rounded-r-none"
        placeholder="example@gmail.com"
        type="email"
        name="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        className="transition-all p-3 text-primary bg-background dark:bg-accent dark:text-background rounded-r-md hover:bg-darker hover:text-primary"
        type="submit"
      >
        Subscribe
      </button>
    </form>
  );
}
