export default function Experience() {
  return (
    <section id="experience" className="section-padding section-container">
      <div className="flex flex-col md:flex-row gap-12 items-start text-center md:text-left">
        <div className="md:w-1/3">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            Experience
          </h2>
          <p className="text-black/60 dark:text-white/60">
            A track record of constant growth and technical excellence.
          </p>
        </div>

        <div className="md:w-2/3 space-y-12">
          <div className="relative pl-12 before:absolute before:left-0 before:top-2 before:w-px before:h-[calc(100%+2rem)] before:bg-black/10 dark:before:bg-white/10 last:before:hidden">
            <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-black/40 dark:text-white/40 mb-2 block">
              2025 — Present
            </span>
            <h3 className="text-2xl font-bold tracking-tight mb-1">
              Programming Instructor
            </h3>
            <p className="text-blue-500 font-bold mb-4">Logiscool</p>
            <p className="text-lg text-black/60 dark:text-white/60 leading-relaxed">
              Delivered structured curriculum covering Python fundamentals,
              visual programming (Scoolcode), and modern development tools
              to students aged 8 to 18, adapting complex concepts for diverse
              learning levels.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
