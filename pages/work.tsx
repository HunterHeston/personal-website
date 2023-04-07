import H1 from "@/components/h1";
import P from "@/components/p";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <H1>Work</H1>
      <P>An overview of some of the projects I&apos;ve worked on.</P>
      <div>
        <Image
          alt="screenshot of project 1"
          src="/600x400.jpeg"
          width={600}
          height={400}
        />
        <h3>Project 1</h3>
        <Link href="/project1">Bean Bag Cafe</Link> |{" "}
        <Link href="/project1">Code</Link>
      </div>
      <div>
        <Image
          alt="screenshot of project 2"
          src="/600x400.jpeg"
          width={600}
          height={400}
        />
        <h3>Project 2</h3>
        <Link href="/project2">Fools Errand</Link> |{" "}
        <Link href="/project2">Code</Link>
      </div>
      <div>
        <Image
          alt="screenshot of project 3"
          src="/600x400.jpeg"
          width={600}
          height={400}
        />
        <h3>Project 3</h3>
        <Link href="/project3">Benchmark Climbing Gym</Link> |{" "}
        <Link href="/project3">Code</Link>
      </div>
    </>
  );
}
