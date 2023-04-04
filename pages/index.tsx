import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="w-screen text-center">
        <h1 className="text-3xl font-semibold text-accent">Hunter Heston</h1>
        <h2>Software Engineer. Web Developer. Small Business Owner</h2>
        <Image
          alt="hunter heston's head shot"
          src="/hunterheston.jpeg"
          width={250}
          height={250}
        />
      </main>
      <hr />
      <section>
        <h2>About Me</h2>
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
        <h2>Work</h2>
        <div>
          <Image
            alt="screenshot of project 1"
            src="https://placehold.co/600x400"
            width={600}
            height={400}
          />
          <h3>Project 1</h3>
          <Link href="/project1">Bean Bag Cafe</Link> |{" "}
          <Link href="/project1">Code</Link>
        </div>
        <div>
          <Image
            alt="screenshot of project 1"
            src="https://placehold.co/600x400"
            width={600}
            height={400}
          />
          <h3>Project 1</h3>
          <Link href="/project2">Fools Errand</Link> |{" "}
          <Link href="/project2">Code</Link>
        </div>
        <div>
          <Image
            alt="screenshot of project 1"
            src="https://placehold.co/600x400"
            width={600}
            height={400}
          />
          <h3>Project 1</h3>
          <Link href="/project3">Benchmark Climbing Gym</Link> |{" "}
          <Link href="/project3">Code</Link>
        </div>
      </section>
      <hr />
      <section>
        <h2>Contact</h2>
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
        <h2>Join My Newsletter</h2>
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
