import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="section-padding section-container">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-black/5 dark:bg-white/5 rounded-2xl p-6 border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 group">
          <div className="aspect-video bg-black/10 dark:bg-white/10 rounded-xl mb-4 overflow-hidden">
            <Image
              src="/projects/project1.png"
              alt="Project 1"
              width={600}
              height={340}
              className="w-full h-full object-cover object-[center_-30%] scale-[300%]"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400">
            Garison
          </h3>
          <p className="text-black/60 dark:text-white/60 mb-4">
            A fully developed 2D top-down game built with GameMaker Studio 2, featuring a funny experience for users, bringing its own spark to the industry.
          </p>
          <div className="flex gap-2">
            <span className="px-2 py-1 bg-black/10 dark:bg-white/10 rounded text-xs">
              GML
            </span>
            <span className="px-2 py-1 bg-black/10 dark:bg-white/10 rounded text-xs">
              Git
            </span>
          </div>
        </div>
        {[2, 3, 4].map((i) => (
          <div
            key={i}
            className="bg-black/5 dark:bg-white/5 rounded-2xl p-6 border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 group"
          >
            <div className="aspect-video bg-black/10 dark:bg-white/10 rounded-xl mb-4 flex items-center justify-center">
              <span
                className="text-black/30 dark:text-white/30"
                role="img"
                aria-label="Project screenshot placeholder"
              >
                Project Screenshot
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400">
              Project Name {i}
            </h3>
            <p className="text-black/60 dark:text-white/60 mb-4">
              A brief description of what this project does and what
              technologies were used.
            </p>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-black/10 dark:bg-white/10 rounded text-xs">
                React
              </span>
              <span className="px-2 py-1 bg-black/10 dark:bg-white/10 rounded text-xs">
                TypeScript
              </span>
              <span className="px-2 py-1 bg-black/10 dark:bg-white/10 rounded text-xs">
                Node.js
              </span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
