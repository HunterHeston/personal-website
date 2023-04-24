import H2 from "@/components/h2";
import H1 from "@/components/h1";
import Image from "next/image";
import P from "@/components/p";
import GitHubIcon from "@/components/icons/github";
import TwitterIcon from "@/components/icons/twitter";
import LinkedInIcon from "@/components/icons/linkedin";
import CheckIcon from "@/components/icons/check";
import Link from "next/link";
import ArrowUpRightIcon from "@/components/icons/arrowUpRight";

export default function Home() {
  return (
    <>
      <section className="mb-4">
        <H1>Hunter Heston</H1>
        <h2 className="leading-loose italic">Freelance Web Developer.</h2>
        <div className="flex items-center ">
          <Image
            className="rounded-full my-5"
            alt="hunter heston's head shot"
            src="/hunterheston.jpeg"
            width={100}
            height={100}
          />
          <div className="ml-10 flex">
            <Link
              href="/contact"
              className="text-md font-semibold mr-2 border-2 border-black bg-black text-primary rounded-md p-3"
            >
              GET IN TOUCH!
            </Link>
          </div>
        </div>
      </section>
      <section>
        <H2 className="text-3xl mb-3 text-accent dark:text-darkAccent">
          I <span>build websites</span> for <span>small businesses</span>
        </H2>
        <P className="text-xl mt-0 mb-9">
          I am a freelance web developer. I will build your business a{" "}
          <span className="font-bold">fast</span> and{" "}
          <span className="font-bold">modern website</span>.
        </P>
        <h3 className="text-2xl mb-5">
          <span className="text-accent dark:text-darkAccent font-semibold">
            Services
          </span>{" "}
          I provide
        </h3>
        <ul className="w-full flex flex-wrap">
          <li className="mb-10 sm:w-1/2 w-full text-xl">
            <h4 className="mb-2 font-bold flex items-center text-accent dark:text-darkAccent">
              <CheckIcon className="mr-1" /> Web Development
            </h4>
            <p className="sm:mx-2">
              I will build the site you need from start to finish that helps
              your business grow.
            </p>
          </li>
          <li className="mb-10 sm:w-1/2 w-full text-xl">
            <h4 className="mb-2 font-bold flex items-center text-accent dark:text-darkAccent">
              <CheckIcon className="mr-1" /> Mobile First Web Design
            </h4>
            <p className="sm:mx-2">
              Over 60% of traffic is from mobile devices. I will optimize your
              site for mobile.
            </p>
          </li>
          <li className="mb-10 sm:w-1/2 w-full text-xl">
            <h4 className="mb-2 font-bold flex items-center text-accent dark:text-darkAccent">
              <CheckIcon className="mr-1" /> Site Hosting
            </h4>
            <p className="sm:mx-2">I will manage hosting your website.</p>
          </li>
          <li className="mb-10 sm:w-1/2 w-full text-xl">
            <h4 className="mb-2 font-bold flex items-center text-accent dark:text-darkAccent">
              <CheckIcon className="mr-1" /> SEO
            </h4>
            <p className="sm:mx-2">
              I will make sure your site is blazingly fast and can easily read
              by search engines like Google.
            </p>
          </li>
          <li className="mb-10 sm:w-1/2 w-full text-xl">
            <h4 className="mb-2 font-bold flex items-center text-accent dark:text-darkAccent">
              <CheckIcon className="mr-1" /> Google Analytics
            </h4>
            <p className="sm:mx-2">
              I will setup Google Analytics so you can track whats going on on
              your website.
            </p>
          </li>
          <li className="mb-10 sm:w-1/2 w-full text-xl">
            <h4 className="mb-2 font-bold flex items-center text-accent dark:text-darkAccent">
              <CheckIcon className="mr-1" /> Excellent Customer Service
            </h4>
            <p className="sm:mx-2">
              I&apos;m highly responsive and eager to collaborate. I want the
              final product to be your mission success.
            </p>
          </li>
        </ul>
      </section>
    </>
  );
}
