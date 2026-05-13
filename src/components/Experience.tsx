export default function Experience() {
  return (
    <section id="experience" className="section-padding section-container relative overflow-hidden">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="text-center md:text-left">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 uppercase">
            Experience
          </h2>
          <p className="text-xl font-mono text-black/70 dark:text-white/70 mb-6 leading-tight">
            A track record of constant growth and technical excellence.
          </p>
          <p className="text-lg font-mono text-black/60 dark:text-white/60">
            From mentoring students in Python to building complex digital systems, 
            I focus on high-impact roles that push my technical boundaries.
          </p>
        </div>

        <div className="relative">
          <div className="sync-card p-8 md:p-12">
            <span className="text-xs font-bold uppercase tracking-widest text-white px-3 py-1 bg-black dark:bg-white dark:text-black mb-6 inline-block">
              2025 — Present
            </span>
            <div className="flex flex-col mb-6">
              <h3 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase mb-1">
                Instructor
              </h3>
              <span className="text-blue-600 font-bold text-lg tracking-widest uppercase">Logiscool</span>
            </div>
            <p className="text-lg font-mono text-black/70 dark:text-white/70 leading-tight">
              Delivered structured curriculum covering Python fundamentals, visual programming, and modern development tools, adapting complex concepts for diverse learning levels.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
