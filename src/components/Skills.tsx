export default function Skills() {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GML"],
    },
    {
      title: "Game Dev",
      skills: ["GameMaker Studio 2"],
    },
    {
      title: "Tools",
      skills: ["Git"],
    },
  ];

  return (
    <section id="skills" className="section-padding section-container">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="bg-black/5 dark:bg-white/5 rounded-2xl p-6 border border-black/10 dark:border-white/10"
          >
            <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
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
