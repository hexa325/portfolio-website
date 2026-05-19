import Image from "next/image";
import LiquidFlux from "./LiquidFlux";
import KineticReveal from "./KineticReveal";

const isGitHubPages = process.env.NEXT_PUBLIC_GITHUB_PAGES === "true";
const basePath = isGitHubPages ? "/portfolio-website" : "";

const projects = [
  {
    title: "Garison",
    description: "A technically advanced top-down RPG powered by a custom systems-architecture. Garison leverages GPU-accelerated GLSL shaders for atmospheric rendering, a high-speed JSON buffer serialization engine for deep world persistence, and a dynamic tag-based text parser. Engineered with a modular entity state machine to handle complex AI behaviors and scalable mechanics.",
    image: `${basePath}/projects/project1.png`,
    tags: ["GML", "Dialogue Engine", "Architecture", "GLSL Shaders", "Serialization"],
    github: "https://github.com/hexa325/garison2023",
    details: `${basePath}/projects/garison`,
  },
  {
    title: "Project Alpha",
    description: "to be updated soon",
    tags: ["soon", "soon", "soon"],
    image: null,
    github: "#",
    details: `${basePath}/#`,
  },
  {
    title: "Project Beta",
    description: "to be updated soon",
    tags: ["soon", "soon", "soon"],
    image: null,
    github: "#",
    details: `${basePath}/#`,
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding section-container relative">
      <div className="flex flex-col items-center mb-16 md:mb-24">
        <div className="hidden md:block">
          <LiquidFlux className="text-5xl md:text-8xl font-bold tracking-tighter text-center uppercase">
            Projects
          </LiquidFlux>
        </div>
        <h2 className="md:hidden text-5xl font-bold tracking-tighter text-center uppercase">
          Projects
        </h2>
        <div className="w-24 h-4 bg-black dark:bg-white mt-6" />
      </div>

      <div className="grid gap-24 md:gap-40">
        {projects.map((project, index) => (
          <KineticReveal key={index} stagger={index + 1}>
            <div className="group relative flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-24 items-center">
              {/* MOBILE ORDER 1: Title & Description */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6 order-1">
                <h3 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase order-1">{project.title}</h3>
                <p className="text-xl font-mono text-black/70 dark:text-white/70 leading-tight max-w-2xl order-2">
                  {project.description}
                </p>
                
                {/* Action Button */}
                <div className="flex order-3 w-full sm:w-auto">
                  <a 
                    href={project.details}
                    className="sync-inv w-full sm:w-auto text-center text-sm"
                  >
                    Project Details
                  </a>
                </div>
                
                {/* MOBILE ORDER 3: Photo (Placed after buttons in the flex flow) */}
                <div className="relative w-full aspect-video overflow-hidden border-4 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(244,244,240,1)] order-4 md:hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-zinc-200 dark:bg-zinc-800 text-black/20 dark:text-white/20 font-bold text-4xl uppercase tracking-tighter">
                      {project.title}
                    </div>
                  )}
                </div>

                {/* MOBILE ORDER 4: Tags */}
                <div className="flex flex-wrap justify-center md:justify-start gap-3 order-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-bold uppercase tracking-widest text-white px-4 py-1 bg-black dark:bg-white dark:text-black border-2 border-black dark:border-white">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* DESKTOP PHOTO (Hidden on mobile) */}
              <div className="hidden md:block relative w-full aspect-video overflow-hidden border-8 border-black dark:border-white shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] dark:shadow-[16px_16px_0px_0px_rgba(244,244,240,1)] order-2 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-zinc-200 dark:bg-zinc-800 text-black/20 dark:text-white/20 font-bold text-4xl uppercase tracking-tighter">
                    {project.title}
                  </div>
                )}
              </div>
            </div>
          </KineticReveal>
        ))}
      </div>
    </section>
  );
}
