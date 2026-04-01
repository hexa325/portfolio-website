export default function Experience() {
  return (
    <section id="experience" className="section-padding section-container">
      <h2 className="text-3xl font-bold mb-8">Experience</h2>
      <div className="space-y-8">
        <div className="border-l-2 border-black/20 dark:border-white/20 pl-6">
          <span className="text-sm text-black/50 dark:text-white/50">
            2024 — Present
          </span>
          <h3 className="text-xl font-semibold mt-2">Senior Developer</h3>
          <p className="text-blue-400">Company Name</p>
          <p className="text-black/60 dark:text-white/60 mt-2">
            Led development of key features, mentored junior developers, and
            improved code quality across the team.
          </p>
        </div>
        <div className="border-l-2 border-black/20 dark:border-white/20 pl-6">
          <span className="text-sm text-black/50 dark:text-white/50">
            2022 — 2024
          </span>
          <h3 className="text-xl font-semibold mt-2">Full-Stack Developer</h3>
          <p className="text-blue-400">Company Name</p>
          <p className="text-black/60 dark:text-white/60 mt-2">
            Built and maintained web applications using React and Node.js.
            Collaborated with cross-functional teams.
          </p>
        </div>
      </div>
      <p className="text-black/40 dark:text-white/40 mt-8 text-sm italic">
        * Placeholder — update with your real experience
      </p>
    </section>
  );
}
