import Image from "next/image";
import Link from "next/link";

// ProjectCard Props
interface ProjectCardProps {
  title: string;
  image: string;
  projectLink: string;
  codeLink: string;
}

export default function ProjectCard({
  title,
  image,
  projectLink,
  codeLink,
}: ProjectCardProps) {
  return (
    <>
      <div>
        <Image
          alt="screenshot of project interface"
          src={image}
          width={600}
          height={400}
        />
        <h2>{title}</h2>
        <Link href={projectLink} target="_blank">
          Live Site
        </Link>{" "}
        |{" "}
        <Link href={codeLink} target="_blank">
          Code
        </Link>
      </div>
    </>
  );
}
