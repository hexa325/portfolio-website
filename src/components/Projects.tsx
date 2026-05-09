import Image from "next/image";
import HyperShatter from "./HyperShatter";
import KineticReveal from "./KineticReveal";

const isGitHubPages = process.env.NEXT_PUBLIC_GITHUB_PAGES === "true";
const basePath = isGitHubPages ? "/portfolio-website" : "";

const projects = [
  {
    title: "Garison",
    description: "A fully developed 2D top-down game built with GameMaker Studio 2, featuring a unique experience and bringing its own spark to the industry.",
    image: `${basePath}/projects/project1.png`,
    tags: ["GML", "Game Design", "Git"],
    link: "#",
  },
  {
    title: "Project Alpha",
    description: "Advanced data visualization dashboard for complex systems management.",
    tags: ["Next.js", "D3.js", "TS"],
    image: null,
  },
  {
    title: "Project Beta",
    description: "E-commerce platform with focus on high-performance and accessibility.",
    tags: ["React", "Tailwind", "Stripe"],
    image: null,
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding section-container relative">
      <div className="flex flex-col items-center mb-16 md:mb-24">
        <div className="hidden md:block">
          <HyperShatter shardClassPrefix="h-shard" count={12} className="text-4xl md:text-7xl font-bold tracking-tighter text-center">
            Projects
          </HyperShatter>
        </div>
        <h2 className="md:hidden text-4xl font-bold tracking-tighter text-center">
          Projects
        </h2>
        <div className="w-12 h-1.5 bg-blue-600 rounded-full mt-6" />
      </div>

      <div className="grid gap-16 md:gap-32">
        {projects.map((project, index) => (
          <KineticReveal key={index} stagger={index + 1}>
            <div className="group relative grid md:grid-cols-2 gap-8 md:gap-16 items-center">
              <div className="relative aspect-video overflow-hidden rounded-[2rem] border border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-black/10 dark:text-white/10 font-display font-bold text-4xl uppercase tracking-tighter">
                    {project.title}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6">
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 px-3 py-1 bg-blue-50 dark:bg-blue-500/10 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl md:text-5xl font-bold tracking-tight">{project.title}</h3>
                <p className="text-lg text-black/60 dark:text-white/60 leading-relaxed max-w-2xl">
                  {project.description}
                </p>
              </div>
            </div>
          </KineticReveal>
        ))}
      </div>
    </section>
  );
}
