import Image from "next/image";

const isGitHubPages = process.env.NEXT_PUBLIC_GITHUB_PAGES === "true";
const basePath = isGitHubPages ? "/portfolio-website" : "";

const projects = [
  {
    title: "Garison",
    description: "A fully developed 2D top-down game built with GameMaker Studio 2, featuring a unique experience and bringing its own spark to the industry.",
    tags: ["GML", "Game Design", "Git"],
    image: `${basePath}/projects/project1.png`,
    isLarge: true
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
    <section id="projects" className="section-padding section-container">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 items-center text-center md:text-left md:items-end">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
          Selected <br /> <span className="text-black/20 dark:text-white/20">Works</span>
        </h2>
        <p className="text-lg text-black/60 dark:text-white/60 max-w-sm">
          A collection of projects where I push the boundaries of what&apos;s possible.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <div
            key={i}
            className={`group relative bg-white/50 dark:bg-white/5 rounded-[2rem] overflow-hidden border border-black/5 dark:border-white/5 transition-all duration-500 hover:border-black/20 dark:hover:border-white/20 ${project.isLarge ? 'md:col-span-2' : ''}`}
          >
            <div className="flex flex-col h-full">
              <div className={`relative overflow-hidden ${project.isLarge ? 'aspect-[21/9]' : 'aspect-video'} bg-black/5 dark:bg-white/5`}>
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
              </div>
              
              <div className="p-8 md:p-12 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-black/5 dark:bg-white/10 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl font-bold mb-4 tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                  {project.title}
                </h3>
                <p className="text-lg text-black/60 dark:text-white/60 leading-relaxed max-w-2xl">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
