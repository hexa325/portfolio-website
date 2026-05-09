export default function Hero() {
  return (
    <section id="hero" className="relative pt-20 md:pt-32 pb-16 min-h-screen flex items-center">
      <div className="section-container relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 md:mb-8 h-auto overflow-hidden">
            <span className="block font-display text-[10px] md:text-xs uppercase tracking-widest md:tracking-[0.5em] text-black/40 dark:text-white/30 animate-reveal-up">
              Crafting Digital Excellence
            </span>
          </div>

          <div className="relative mb-6 md:mb-10 isolate w-full">
            <h1 className="text-[12vw] md:text-[10vw] font-bold leading-[0.8] tracking-tighter select-none">
              <span className="block animate-expand [animation-delay:0.1s] text-black dark:text-white">SOFTWARE</span>
              <span className="block animate-expand [animation-delay:0.2s] text-black/20 dark:text-white/20">ENGINEER</span>
            </h1>
            <div className="absolute inset-0 -z-10 blur-3xl opacity-5 dark:opacity-10 bg-blue-500" />
          </div>

          <div className="max-w-4xl mb-8 md:mb-12 space-y-4 md:space-y-6">
            <div className="overflow-hidden">
              <h2 className="text-4xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight leading-[1.1] animate-reveal-up [animation-delay:0.5s] text-black dark:text-white">
                Nițescu Eduard
              </h2>
            </div>
            
            <p className="text-base md:text-xl text-black/50 dark:text-white/50 leading-relaxed max-w-2xl mx-auto animate-fade-in [animation-delay:0.8s]">
              Transforming complex challenges into <span className="text-black dark:text-white italic">clean, performant</span>, and <span className="text-black dark:text-white">human-centered</span> digital experiences.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
            <div className="overflow-hidden rounded-full">
              <a
                href="#projects"
                className="group relative block px-12 py-6 bg-black text-white dark:bg-white dark:text-black rounded-full overflow-hidden font-bold text-xs uppercase tracking-widest transition-all duration-300 md:hover:scale-105 active:scale-95 animate-reveal-up [animation-delay:1.2s]"
              >
                <span className="relative z-10 transition-colors duration-300 md:group-hover:text-white dark:md:group-hover:text-black">Explore Works</span>
                <div className="absolute inset-0 bg-blue-600 translate-y-full md:group-hover:translate-y-0 transition-transform duration-500 ease-out rounded-full" />
              </a>
            </div>
            
            <div className="overflow-hidden rounded-full">
              <a
                href={process.env.NEXT_PUBLIC_GITHUB_PAGES === "true" ? "/portfolio-website/cv.pdf" : "/cv.pdf"}
                className="block px-12 py-6 border border-black/10 dark:border-white/10 rounded-full md:hover:bg-black md:hover:text-white transition-all duration-500 font-bold text-xs uppercase tracking-widest text-black dark:text-white active:scale-95 animate-reveal-up [animation-delay:1.3s]"
              >
                Get Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
