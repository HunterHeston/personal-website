import H2 from "@/components/h2";
import H1 from "@/components/h1";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section>
        <H1>Hunter Heston</H1>
        <h2 className="leading-loose italic">
          Software Engineer. Web Developer. Small Business Owner
        </h2>
        <Image
          className="rounded-full my-5"
          alt="hunter heston's head shot"
          src="/hunterheston.jpeg"
          width={100}
          height={100}
        />
      </section>
      {/* <hr /> */}
      <section>
        <H2>About Me</H2>
        <p className="my-5 leading-relaxed">
          Hey! I&apos;m <span className="font-bold">Hunter</span>, a software
          engineer and small business owner living in San Francisco.
        </p>
        <p className="my-5 leading-relaxed">
          For the past 6 years I&apos;ve been building software at companies
          like <span className="font-bold">Google and Lockheed Martin</span>.
        </p>
        <p className="my-5 leading-relaxed">
          My strengths are{" "}
          <span className="font-bold">backend service development</span> in{" "}
          <span className="font-bold">Go</span> and
          <span className="font-bold">NodeJS</span>. I&apos;m skilled at
          building <span className="font-bold">frontends</span> with{" "}
          <span className="font-bold">ReactJS</span> or vanilla{" "}
          <span className="font-bold">HTML/CSS/JavaScript</span>.
        </p>
        <p className="my-5 leading-relaxed">
          I am passionate about coding, writing and personal growth.
        </p>
      </section>
    </>
  );
}
