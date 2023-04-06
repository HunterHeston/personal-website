import H2 from "@/components/h2";
import H1 from "@/components/h1";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <H1>Hunter Heston</H1>
        <h2>Software Engineer. Web Developer. Small Business Owner</h2>
        <Image
          className="rounded-full"
          alt="hunter heston's head shot"
          src="/hunterheston.jpeg"
          width={100}
          height={100}
        />
      </main>
      <hr />
      <section>
        <H2>About Me</H2>
        <p>
          Hey! I&apos;m Hunter, a software engineer and small business owner
          living in San Francisco.
        </p>
        <p>
          For the past 6 years I&apos;ve been building software at companies
          like Google and Lockheed Martin.
        </p>
        <p>
          My strengths are backend service development in Go and NodeJS.
          I&apos;m skilled at building frontends with ReactJS or vanilla
          HTML/CSS/JavaScript.
        </p>
        <p>I am passionate about coding, writing and personal growth.</p>
      </section>
      <hr />
      <section>
        <H2>Contact</H2>
        <form action="submit">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" />
          <button type="submit">Send</button>
        </form>
      </section>
      <hr />
      <section>
        <H2>Join My Newsletter</H2>
        <form action="submit">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
          <button type="submit">Subscribe</button>
        </form>
      </section>
      <footer>Hunter Heston @{new Date().getFullYear()}</footer>
    </>
  );
}
