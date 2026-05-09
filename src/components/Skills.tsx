export default function Skills() {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: ["React", "Next.js", "TypeScript", "C++", "Python", "GML", "Tailwind CSS"],
    },
    {
      title: "Game Dev",
      skills: ["AI & Pathfinding", "State Machines", "Complex Systems", "GLSL Shaders"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub Actions", "GameMaker Studio 2", "BMad Framework", "Node.js"],
    },
  ];

  return (
    <section id="skills" className="section-padding section-container">
      <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-12 text-center md:text-left">Skills</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="group/card relative bg-black/5 dark:bg-white/5 rounded-2xl p-6 border border-black/10 dark:border-white/10 flex flex-col items-center md:items-start text-center md:text-left overflow-hidden transition-all duration-500 hover:border-blue-500/30"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
            <h3 className="text-xl font-semibold mb-4 relative z-10">{category.title}</h3>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start relative z-10">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-black/10 dark:bg-white/10 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
