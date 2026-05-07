export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden min-h-screen flex items-center bg-white dark:bg-[#050505] transition-colors duration-500">
      {/* Premium Ambient Background with Noise */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-400/10 dark:bg-blue-600/20 rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-400/10 dark:bg-purple-600/20 rounded-full blur-[120px] animate-blob [animation-delay:2s]" />
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-fuchsia-400/10 dark:bg-fuchsia-600/10 rounded-full blur-[120px] animate-blob [animation-delay:4s]" />
        {/* Grain Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay dark:mix-blend-overlay brightness-150 contrast-150 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="section-container relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8 overflow-hidden">
            <span className="block font-display text-xs uppercase tracking-[0.5em] text-black/40 dark:text-white/30 animate-reveal-up">
              Crafting Digital Excellence
            </span>
          </div>

          <div className="relative mb-12">
            <h1 className="text-[12vw] md:text-[10vw] font-bold leading-[0.8] tracking-tighter mix-blend-multiply dark:mix-blend-difference">
              <span className="block animate-expand [animation-delay:0.2s] text-black dark:text-white">SOFTWARE</span>
              <span 
                className="block animate-expand [animation-delay:0.5s] text-transparent"
                style={{ WebkitTextStroke: "1.5px rgba(0,0,0,0.2)" }}
              >
                <span className="dark:hidden">ENGINEER</span>
                <span className="hidden dark:inline" style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.4)" }}>ENGINEER</span>
              </span>
            </h1>
            
            {/* Perspective Shadow Effect */}
            <div className="absolute inset-0 -z-10 blur-3xl opacity-10 dark:opacity-20 bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse" />
          </div>

          <div className="max-w-2xl mb-16 space-y-8">
            <div className="overflow-hidden">
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight animate-reveal-up [animation-delay:1s] text-black dark:text-white">
                Nițescu George-Eduard
              </h2>
            </div>
            
            <p className="text-lg md:text-xl text-black/50 dark:text-white/50 leading-relaxed animate-fade-in [animation-delay:1.5s]">
              Transforming complex challenges into <span className="text-black dark:text-white italic">clean, performant</span>, and <span className="text-black dark:text-white">human-centered</span> digital experiences.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 animate-fade-in [animation-delay:1.8s]">
            <a
              href="#projects"
              className="group relative px-12 py-6 bg-black text-white dark:bg-white dark:text-black rounded-full overflow-hidden font-bold text-xs uppercase tracking-widest transition-transform hover:scale-105"
            >
              <span className="relative z-10">Explore Works</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            
            <a
              href="#download-cv"
              className="px-12 py-6 border border-black/10 dark:border-white/10 rounded-full hover:bg-black hover:text-white transition-all duration-500 font-bold text-xs uppercase tracking-widest text-black dark:text-white"
            >
              Get Resume
            </a>
          </div>
        </div>
      </div>
...

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10 text-[10px] uppercase tracking-[0.3em] text-black/10 dark:text-white/10 hidden lg:block">
        2026 Edition
      </div>
      <div className="absolute bottom-10 right-10 flex gap-4 hidden lg:flex">
        <div className="w-12 h-[1px] bg-black/10 dark:bg-white/10" />
        <div className="w-12 h-[1px] bg-black/10 dark:bg-white/10" />
        <div className="w-12 h-[1px] bg-black/20 dark:bg-white/30" />
      </div>
    </section>
  );
}
