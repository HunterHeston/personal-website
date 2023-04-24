import H2 from "@/components/h2";
import H1 from "@/components/h1";
import Image from "next/image";
import P from "@/components/p";
import GitHubIcon from "@/components/icons/github";
import TwitterIcon from "@/components/icons/twitter";
import LinkedInIcon from "@/components/icons/linkedin";

export default function Home() {
  return (
    <>
      <section className="text-xl">
        <H1>Hunter Heston</H1>
        <h2 className="leading-loose italic">
          Software Engineer and Web Developer.
        </h2>
        <div className="flex items-center ">
          <Image
            className="rounded-full my-5"
            alt="hunter heston's head shot"
            src="/hunterheston.jpeg"
            width={100}
            height={100}
          />
          <div className="ml-10">
            <a
              href="https://github.com/hunterheston"
              target="_blank"
              rel="noopener noreferrer"
              className="flex transition-all hover:text-gray-400"
            >
              <GitHubIcon className="mb-2 mr-2"></GitHubIcon>
              <p>GitHub</p>
            </a>
            <a
              href="https://twitter.com/hunterheston"
              target="_blank"
              rel="noopener noreferrer"
              className="flex transition-all hover:text-gray-400"
            >
              <TwitterIcon className="mb-1 mr-2 h-6 w-6"></TwitterIcon>
              <p>Twitter</p>
            </a>
            <a
              href="https://linkedin.com/in/hunterheston"
              target="_blank"
              rel="noopener noreferrer"
              className="flex transition-all hover:text-gray-400"
            >
              <LinkedInIcon className="mr-2"></LinkedInIcon>
              <p>LinkedIn</p>
            </a>
          </div>
        </div>
      </section>
      {/* <hr /> */}
      <section>
        <H2>About Me</H2>
        <P className="text-xl">
          Hey! I&apos;m <span className="font-bold">Hunter</span>, a software
          engineer and small business owner living in San Francisco.
        </P>
        <P className="text-xl">
          For the past 6 years I&apos;ve been building software at companies
          like <span className="font-bold">Google</span> and{" "}
          <span className="font-bold">Lockheed Martin</span>.
        </P>
        <P className="text-xl">
          My strengths are{" "}
          <span className="font-bold">backend service development</span> in{" "}
          <span className="font-bold">Go</span> and{" "}
          <span className="font-bold">NodeJS</span>. I&apos;m also skilled at
          building <span className="font-bold">frontends</span> with{" "}
          <span className="font-bold">ReactJS</span> or vanilla{" "}
          <span className="font-bold">HTML/CSS/JavaScript</span>.
        </P>
        <P className="text-xl">
          I am passionate about coding, writing and personal growth.
        </P>
      </section>
    </>
  );
}
