import Image from "next/image";
import Link from "next/link";
import ArrowUpRightIcon from "./icons/arrowUpRight";
import WebIcon from "./icons/web";
import GitHubIcon from "./icons/github";

// ProjectCard Props
interface ProjectCardProps {
  title: string;
  image: string;
  projectLink: string;
  codeLink: string;
  description: string;
}

export default function ProjectCard({
  title,
  image,
  projectLink,
  codeLink,
  description,
}: ProjectCardProps) {
  return (
    <>
      <div className="mb-10">
        <Image
          className="rounded-lg"
          alt="screenshot of project interface"
          src={image}
          width={600}
          height={400}
        />
        <h2 className="text-2xl pt-4 pb-1">{title}</h2>
        <p className="pb-4">{description}</p>
        <div className="flex pb-8">
          <LinkButton href={projectLink}>
            <WebIcon className="mr-2" />
            View
          </LinkButton>
          {codeLink === "" ? (
            <></>
          ) : (
            <LinkButton href={codeLink}>
              <GitHubIcon className="mr-2" />
              Code
            </LinkButton>
          )}
        </div>
      </div>
    </>
  );
}

// LinkButton Props
interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
}

function LinkButton({ href, children }: LinkButtonProps) {
  return (
    <>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex border  border-primary dark:border-darker rounded-lg mr-4 py-2 px-4 items-center justify-center hover:bg-darker hover:text-white transition duration-300 ease-in-out"
      >
        {children}
        <ArrowUpRightIcon className="ml-2" />
      </Link>
    </>
  );
}
