import H1 from "@/components/h1";
import P from "@/components/p";
import ProjectCard from "@/components/projectCard";

export default function Contact() {
  return (
    <>
      <H1>Work</H1>
      <P>An overview of some of the projects I&apos;ve worked on.</P>
      <div className="sm:flex flex-wrap">
        <ProjectCard
          title="Bean Bag Cafe"
          image="/600x400.jpeg"
          projectLink="https://beanbag.cafe"
          codeLink="https://github.com/hunterheston"
        />
        <ProjectCard
          title="Fools Errand"
          image="/600x400.jpeg"
          projectLink="https://foolserrandsf.com"
          codeLink="https://github.com/hunterheston"
        />
        <ProjectCard
          title="Benchmark Climbing Gym"
          image="/600x400.jpeg"
          projectLink="https://benchmarkclimbing.com"
          codeLink="https://github.com/hunterheston"
        />
      </div>
    </>
  );
}
