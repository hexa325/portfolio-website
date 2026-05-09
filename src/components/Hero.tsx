export default function Hero() {
  const ShatterText = ({ children, className }: { children: string; className?: string }) => (
    <div className={`shatter-container ${className}`}>
      {/* Base text that becomes visible and carries the glitch after reconstruction */}
      <span className="shatter-base block">{children}</span>
      {/* 3D Animated Shards (8 per line for high complexity) */}
      <span className="shatter-layer shard-1 block" aria-hidden="true">{children}</span>
      <span className="shatter-layer shard-2 block" aria-hidden="true">{children}</span>
      <span className="shatter-layer shard-3 block" aria-hidden="true">{children}</span>
      <span className="shatter-layer shard-4 block" aria-hidden="true">{children}</span>
      <span className="shatter-layer shard-5 block" aria-hidden="true">{children}</span>
      <span className="shatter-layer shard-6 block" aria-hidden="true">{children}</span>
      <span className="shatter-layer shard-7 block" aria-hidden="true">{children}</span>
      <span className="shatter-layer shard-8 block" aria-hidden="true">{children}</span>
    </div>
  );

  return (
    <section id="hero" className="relative pt-32 md:pt-40 pb-24 md:pb-32 min-h-screen flex items-center">
      <div className="section-container relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          <div className="mb-10 md:mb-12 h-auto overflow-hidden">
            <span className="block font-display text-[10px] md:text-xs uppercase tracking-widest md:tracking-[0.5em] text-black/40 dark:text-white/30 animate-reveal-up">
              Crafting Digital Excellence
            </span>
          </div>

          <div className="relative mb-6 md:mb-10 isolate w-full">
            <h1 className="text-[12vw] md:text-[10vw] font-bold leading-[0.8] tracking-tighter select-none">
              {/* Desktop: 3D Hyper-Shatter Effect | Mobile: High-performance standard entry */}
              <div className="hidden md:block">
                <ShatterText>SOFTWARE</ShatterText>
                <br />
                <ShatterText className="opacity-20 dark:opacity-20">ENGINEER</ShatterText>
              </div>
              <div className="md:hidden">
                <span className="block animate-expand [animation-delay:0.1s] text-black dark:text-white">SOFTWARE</span>
                <span className="block animate-expand [animation-delay:0.2s] text-black/20 dark:text-white/20">ENGINEER</span>
              </div>
            </h1>
            <div className="absolute inset-0 -z-10 blur-3xl opacity-5 dark:opacity-10 bg-blue-500" />
          </div>

          <div className="max-w-4xl mb-8 md:mb-12 space-y-4 md:space-y-6">
            <div className="overflow-hidden">
              <h2 className="text-4xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight leading-[1.1] animate-reveal-up [animation-delay:2s] text-black dark:text-white">
                Nițescu Eduard
              </h2>
            </div>
            
            <p className="text-base md:text-xl text-black/50 dark:text-white/50 leading-relaxed max-w-2xl mx-auto animate-fade-in [animation-delay:2.3s]">
              Transforming complex challenges into <span className="text-black dark:text-white italic">clean, performant</span>, and <span className="text-black dark:text-white">human-centered</span> digital experiences.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
            <div className="overflow-hidden rounded-full">
              <a
                href="#projects"
                className="group sync-inv relative block px-12 py-6 rounded-full overflow-hidden font-bold text-xs uppercase tracking-widest md:hover:scale-105 active:scale-95 animate-reveal-up [animation-delay:2.6s]"
              >
                <span className="relative z-10">Explore Works</span>
                <div className="absolute inset-0 bg-blue-600 translate-y-full md:group-hover:translate-y-0 transition-transform duration-500 ease-out rounded-full" />
              </a>
            </div>
            
            <div className="overflow-hidden rounded-full">
              <a
                href={process.env.NEXT_PUBLIC_GITHUB_PAGES === "true" ? "/portfolio-website/cv.pdf" : "/cv.pdf"}
                className="block px-12 py-6 border border-black/10 dark:border-white/10 rounded-full md:hover:bg-black md:hover:text-white transition-all duration-500 font-bold text-xs uppercase tracking-widest text-black dark:text-white active:scale-95 animate-reveal-up [animation-delay:2.7s]"
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
