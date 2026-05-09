import Image from "next/image";
import HyperShatter from "./HyperShatter";
import KineticReveal from "./KineticReveal";

const isGitHubPages = process.env.NEXT_PUBLIC_GITHUB_PAGES === "true";
const basePath = isGitHubPages ? "/portfolio-website" : "";

const projects = [
  {
    title: "Garison",
    description: "A technically advanced 2D top-down game featuring A* pathfinding AI, modular state machines for NPC behavior, and a dynamic branching dialogue system, all built upon a high-performance and organized GML architecture.",
    image: `${basePath}/projects/project1.png`,
    tags: ["GML", "AI Logic", "Architecture", "GLSL Shaders"],
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
            <div className="group relative flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-16 items-center">
              {/* MOBILE ORDER 1: Title & Description */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 md:gap-6 order-1">
                <h3 className="text-3xl md:text-5xl font-bold tracking-tight order-1">{project.title}</h3>
                <p className="text-lg text-black/60 dark:text-white/60 leading-relaxed max-w-2xl order-2">
                  {project.description}
                </p>
                
                {/* MOBILE ORDER 3: Photo (Placed after description in the flex flow) */}
                <div className="relative w-full aspect-video overflow-hidden rounded-[2rem] border border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5 order-3 md:hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-black/10 dark:text-white/10 font-display font-bold text-4xl uppercase tracking-tighter">
                      {project.title}
                    </div>
                  )}
                </div>

                {/* MOBILE ORDER 4: Tags */}
                <div className="flex flex-wrap justify-center md:justify-start gap-2 order-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 px-3 py-1 bg-blue-50 dark:bg-blue-500/10 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* DESKTOP PHOTO (Hidden on mobile) */}
              <div className="hidden md:block relative w-full aspect-video overflow-hidden rounded-[2rem] border border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5 order-2">
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
            </div>
          </KineticReveal>
        ))}
      </div>
    </section>
  );
}
