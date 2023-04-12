import { useState, FormEvent } from "react";

enum SubStatus {
  Success,
  Error,
  None,
}

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [subState, setSubState] = useState(SubStatus.None);

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
        setSubState(SubStatus.Success);
      } else {
        setEmail("");
        setSubState(SubStatus.Error);
      }
    } catch (error) {
      console.log("Error occurred when send subscription request: ", error);
    }
  };

  return (
    <>
      <form className="flex mb-10" onSubmit={handleSubmit}>
        <label htmlFor="email" hidden>
          Email
        </label>
        <input
          className={
            "p-2 w-72 border-l border-t border-b rounded-l-md rounded-r-none " +
            getSubStateChangeClasses(subState)
          }
          placeholder={getPlaceHolderText(subState)}
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
    </>
  );
}

function getSubStateChangeClasses(subState: SubStatus) {
  if (subState === SubStatus.Success) {
    return "bg-green-100";
  }
  if (subState === SubStatus.Error) {
    return "bg-red-100";
  }
  return "";
}

function getPlaceHolderText(subState: SubStatus) {
  if (subState === SubStatus.Success) {
    return "Success! You're subscribed.";
  }
  if (subState === SubStatus.Error) {
    return "Error! Please try again.";
  }
  return "example@gmail.com";
}
