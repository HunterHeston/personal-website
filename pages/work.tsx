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
        />
        <ProjectCard
          title="HawkenVO"
          image="/work/hawken-vo.png"
          projectLink="https://hawkenvo.vercel.app/"
          codeLink="https://github.com/HunterHeston/hawkenvo"
        />
        <ProjectCard
          title="Personalized Dog Bandanas"
          image="/work/pdb.png"
          projectLink="https://benchmarkclimbing.com"
          codeLink=""
        />
      </div>
    </>
  );
}
