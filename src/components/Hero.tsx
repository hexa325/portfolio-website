import LiquidFlux from "./LiquidFlux";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-24 md:pt-40 pb-16 md:pb-32 min-h-screen flex items-center overflow-hidden">
      {/* BACKGROUND DECORATIONS (Blueprint Lines) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-black/5 dark:bg-white/5" />
        <div className="absolute top-3/4 left-0 w-full h-[1px] bg-black/5 dark:bg-white/5" />
        <div className="absolute left-1/4 top-0 w-[1px] h-full bg-black/5 dark:bg-white/5" />
        <div className="absolute left-3/4 top-0 w-[1px] h-full bg-black/5 dark:bg-white/5" />
      </div>

      <div className="section-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Metadata & Identifiers (Desktop Only) */}
          <div className="hidden lg:flex lg:col-span-3 flex-col gap-12">
            <div className="space-y-4 animate-reveal-up">
              <div className="flex items-center gap-2">
                <div className="marker-box">ID_01</div>
                <div className="h-[1px] flex-grow bg-black/10 dark:bg-white/10" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-none">
                Nițescu Eduard
              </h2>
            </div>

            <div className="space-y-4 animate-reveal-up [animation-delay:0.5s]">
              <div className="flex items-center gap-2">
                <div className="marker-box">LOC_RO</div>
                <div className="h-[1px] flex-grow bg-black/10 dark:bg-white/10" />
              </div>
              <p className="text-sm font-mono text-black/50 dark:text-white/50 leading-tight">
                COORDINATES: 44.4268° N, 26.1025° E <br />
                STATUS: ACTIVE_DEVELOPER
              </p>
            </div>
            
            <div className="pt-24 animate-fade-in [animation-delay:1.5s]">
              <div className="w-32 h-32 border border-dashed border-black/20 dark:border-white/20 flex items-center justify-center relative">
                <div className="absolute inset-[-4px] border border-black/5 dark:border-white/5" />
                <span className="text-[10px] font-mono opacity-30 text-center">PRECISION_SYSTEM <br /> V.1.0</span>
                {/* Visual Crosshair */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-blue-600" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-blue-600" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-[1px] bg-blue-600" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-[1px] bg-blue-600" />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Core Titles, Metadata (Mobile), & Action */}
          <div className="lg:col-span-9 flex flex-col lg:items-end text-left lg:text-right gap-6 md:gap-12">
            
            <h1 className="text-[14vw] md:text-[11vw] lg:text-[10vw] font-bold leading-[0.75] tracking-tighter uppercase">
              <div className="flex flex-col lg:items-end">
                <LiquidFlux className="text-black dark:text-white" delay="0.1s">SOFTWARE</LiquidFlux>
                <div className="flex items-center gap-4 lg:flex-row-reverse">
                  <LiquidFlux className="text-black/30 dark:text-white/30" delay="0.3s">ENGINEER</LiquidFlux>
                  <div className="hidden md:block h-[4px] w-24 bg-black/10 dark:bg-white/10" />
                </div>
              </div>
            </h1>

            {/* Mobile Metadata Block */}
            <div className="flex lg:hidden flex-col gap-4 w-full py-4 border-y border-black/5 dark:border-white/5">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-2xl font-bold tracking-tighter uppercase">
                  Nițescu Eduard
                </h2>
                <div className="marker-box">ID_01</div>
              </div>
              <div className="flex items-center justify-between gap-4 font-mono text-[10px] text-black/40 dark:text-white/40">
                <p>44.4268° N, 26.1025° E</p>
                <p>STATUS: ACTIVE</p>
              </div>
            </div>

            <div className="max-w-2xl lg:ml-auto space-y-6 md:space-y-8 animate-reveal-up [animation-delay:0.8s]">
              <div className="p-6 md:p-8 border-4 border-black dark:border-white bg-white dark:bg-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(244,244,240,1)] relative overflow-hidden group">
                <div className="absolute top-2 right-2 marker-box">MOD_01</div>
                <p className="text-lg md:text-2xl font-mono text-black dark:text-white leading-tight">
                  Transforming complex challenges into <span className="bg-blue-600 text-white px-2">clean, performant</span>, and <span className="italic underline decoration-4 decoration-blue-600 underline-offset-4">human-centered</span> digital experiences.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-end gap-4 md:gap-6">
                <a
                  href="#projects"
                  className="sync-inv w-full sm:w-auto text-center"
                >
                  View Projects
                </a>
                
                <a
                  href={process.env.NEXT_PUBLIC_GITHUB_PAGES === "true" ? "/portfolio-website/cv.pdf" : "/cv.pdf"}
                  className="px-12 py-4 border-4 border-black dark:border-white font-bold uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors w-full sm:w-auto text-center"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* FOOTER LABEL */}
      <div className="absolute bottom-8 right-8 hidden lg:flex items-center gap-4 animate-fade-in [animation-delay:2s]">
        <div className="text-[10px] font-mono text-black/30 dark:text-white/30 uppercase tracking-[0.3em]">
          Project_Portofoliu_v2.0
        </div>
        <div className="w-12 h-[1px] bg-black/20 dark:bg-white/20" />
      </div>
    </section>
  );
}
