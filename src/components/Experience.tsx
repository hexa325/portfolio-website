export default function Experience() {
  return (
    <section id="experience" className="section-padding section-container relative overflow-hidden">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">
            Experience
          </h2>
          <p className="text-xl text-black/70 dark:text-white/70 mb-6 leading-relaxed">
            A track record of constant growth and technical excellence.
          </p>
          <p className="text-lg text-black/60 dark:text-white/60">
            From mentoring students in Python to building complex digital systems, 
            I focus on high-impact roles that push my technical boundaries.
          </p>
        </div>

        <div className="relative group">
          <div className="bg-black/[0.02] dark:bg-white/[0.02] backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-black/5 dark:border-white/5 transition-colors duration-500 hover:border-black/10 dark:hover:border-white/10">
            <span className="text-xs font-bold uppercase tracking-widest text-black/40 dark:text-white/40 mb-4 block">
              2025 — Present
            </span>
            <div className="flex flex-col mb-6">
              <h3 className="text-2xl font-bold tracking-tight text-black dark:text-white mb-1">
                Programming Instructor
              </h3>
              <span className="text-blue-500 font-bold text-sm tracking-widest uppercase">Logiscool</span>
            </div>
            <p className="text-lg text-black/60 dark:text-white/60 leading-relaxed">
              Delivered structured curriculum covering Python fundamentals, visual programming (Scoolcode), and modern development tools to students aged 8 to 18, adapting complex concepts for diverse learning levels.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
