export default function Projects() {
  return (
    <section id="projects" className="section-padding section-container">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="bg-black/5 dark:bg-white/5 rounded-2xl p-6 border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 transition-colors group"
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
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
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
      <p className="text-black/40 dark:text-white/40 mt-8 text-sm italic">
        * Placeholders — update with your real projects
      </p>
    </section>
  );
}
