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
          title="Hawken Pet Care"
          image="/work/hawken-pet-care.png"
          projectLink="https://dog-walking.vercel.app/"
          codeLink="https://github.com/HunterHeston/dog-walking"
          description="A website for a dog walking business. Built with Next.js, Tailwind CSS, and TypeScript."
        />
        <ProjectCard
          title="Shrink.dev"
          image="/work/shrink.png"
          projectLink="http://www.shrink.dev"
          codeLink="https://github.com/HunterHeston/url-shortener"
          description="A URL shortening service built with fullscreen animations."
        />
        <ProjectCard
          title="Personalized Dog Bandanas"
          image="/work/pdb.png"
          projectLink="https://benchmarkclimbing.com"
          codeLink=""
          description="Ecommerce website for a small business. Built using SquareSpace."
        />
      </div>
    </>
  );
}
