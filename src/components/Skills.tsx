export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["React", "Next.js", "TypeScript", "C++", "Python", "GML", "Tailwind CSS"],
    },
    {
      title: "Game Dev",
      skills: ["AI & Logic", "State Machines", "Complex Systems", "GLSL Shaders"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub Actions", "GameMaker", "BMad", "Node.js"],
    },
  ];

  return (
    <section id="skills" className="section-padding section-container">
      <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-16 text-center md:text-left uppercase">Skills</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="sync-card p-8 flex flex-col items-center md:items-start text-center md:text-left"
          >
            <h3 className="text-2xl font-bold mb-6 uppercase tracking-tight">{category.title}</h3>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-1 bg-zinc-200 dark:bg-zinc-800 border-2 border-black dark:border-white font-mono text-sm font-bold"
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
