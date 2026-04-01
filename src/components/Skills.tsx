export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
    },
    {
      title: "Tools",
      skills: ["Git", "Docker", "VS Code", "Figma", "Linux"],
    },
  ];

  return (
    <section id="skills" className="section-padding section-container">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="bg-white/5 dark:bg-white/5 bg-black/5 rounded-2xl p-6 border border-white/10 dark:border-white/10 border-black/10"
          >
            <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-white/10 dark:bg-white/10 bg-black/10 rounded-full text-sm"
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
