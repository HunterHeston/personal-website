import H1 from "@/components/h1";
import H2 from "@/components/h2";

export default function Contact() {
  return (
    <>
      <H1>Contact</H1>
      <p className="text-xl mb-4">Lets work together!</p>
      <form className="flex flex-col items-start" action="submit">
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
