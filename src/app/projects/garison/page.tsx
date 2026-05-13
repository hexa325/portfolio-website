import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlueprintExplainer from "@/components/BlueprintExplainer";
import Image from "next/image";

const isGitHubPages = process.env.NEXT_PUBLIC_GITHUB_PAGES === "true";
const basePath = isGitHubPages ? "/portfolio-website" : "";

export default function GarisonShowcase() {
  const screenshots = [
    { src: `${basePath}/projects/garison/ss1.png`, alt: "Garison Gameplay - Combat", caption: "Modular state machines handling AI combat patterns." },
    { src: `${basePath}/projects/garison/ss2.png`, alt: "Garison - Inventory", caption: "Custom UI system built from scratch in GML." },
    { src: `${basePath}/projects/garison/ss3.png`, alt: "Garison - Map", caption: "Procedural generation logic for environmental details." },
  ];

  const heroHotspots = [
    {
      x: 30,
      y: 40,
      label: "A* Pathfinding",
      description: "Custom grid-based pathfinding optimized for GML. Uses a priority queue to handle 100+ agents simultaneously.",
      code: "function scr_path_find(start, end) {\n  var open_list = ds_priority_create();\n  // ... heuristic logic\n}"
    },
    {
      x: 70,
      y: 60,
      label: "State Machine",
      description: "NPCs switch between IDLE, CHASE, and ATTACK states using a lightweight modular script system.",
      code: "switch (state) {\n  case States.CHASE: \n    scr_move_to(target);\n    break;\n}"
    },
    {
      x: 50,
      y: 20,
      label: "GLSL Shader",
      description: "Real-time shadow casting and ambient lighting computed on the GPU for zero CPU overhead.",
    }
  ];

  return (
    <main className="min-h-screen bg-[#f4f4f0] dark:bg-[#111111]">
      <Navbar />
      
      <div className="pt-32 pb-24 section-container">
        {/* HEADER */}
        <div className="mb-16 border-b-8 border-black dark:border-white pb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <div className="marker-box inline-block glitch-hover cursor-help">PROJECT_SHOWCASE</div>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter uppercase leading-[0.8] glitch-hover">
                Garison
              </h1>
            </div>
            <div className="flex gap-4">
              <a 
                href="https://github.com/hexa325/garison" 
                target="_blank" 
                rel="noopener noreferrer"
                className="sync-inv mechanical-click"
              >
                View Source
              </a>
            </div>
          </div>
        </div>

        {/* INTERACTIVE BLUEPRINT HERO */}
        <div className="mb-24">
          <BlueprintExplainer 
            title="CORE_ENGINE_ARCHITECTURE"
            imageSrc="" // Placeholder for now
            alt="Garison Gameplay Schematic"
            hotspots={heroHotspots}
          />
          <p className="mt-4 text-xs font-mono opacity-40 uppercase tracking-widest text-center animate-pulse">
            [ INTERACTIVE: HOVER OVER NODES TO VIEW SYSTEM SCHEMATICS ]
          </p>
        </div>

        {/* TECH SPECS GRID */}
        <div className="grid lg:grid-cols-3 gap-12 mb-32">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold uppercase mb-6 flex items-center gap-4 glitch-hover">
                <span className="w-8 h-8 bg-blue-600 flex items-center justify-center text-white text-sm">01</span>
                The Vision
              </h2>
              <p className="text-xl font-mono text-black/70 dark:text-white/70 leading-relaxed">
                Garison was born from a desire to push the limits of GameMaker Studio 2. The goal was to create a top-down action RPG that didn't just look good, but felt mechanically deep. I focused on building reusable systems: a custom pathfinding engine, a flexible dialogue system, and a shader-based lighting engine.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold uppercase mb-6 flex items-center gap-4 glitch-hover">
                <span className="w-8 h-8 bg-blue-600 flex items-center justify-center text-white text-sm">02</span>
                Technical Challenges
              </h2>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="sync-card p-6 space-y-4">
                  <h3 className="font-bold uppercase tracking-tight">A* Pathfinding</h3>
                  <p className="text-sm font-mono text-black/60 dark:text-white/60">
                    Optimized for 100+ active agents. implemented using custom priority queues to ensure smooth framerates on lower-end hardware.
                  </p>
                </div>
                <div className="sync-card p-6 space-y-4">
                  <h3 className="font-bold uppercase tracking-tight">Modular AI</h3>
                  <p className="text-sm font-mono text-black/60 dark:text-white/60">
                    State-machine based behavior allows for easy addition of new enemy types with unique patterns without bloating the codebase.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <aside className="space-y-8">
            <div className="p-8 border-4 border-black dark:border-white bg-white dark:bg-black">
              <h3 className="font-bold uppercase mb-4 text-xs tracking-widest text-blue-600 glitch-hover">Schematic_Info</h3>
              <ul className="space-y-4 font-mono text-sm">
                <li className="flex justify-between border-b border-black/10 dark:border-white/10 pb-2">
                  <span className="opacity-50 text-xs">ENGINE</span>
                  <span className="font-bold">GMS 2.3+</span>
                </li>
                <li className="flex justify-between border-b border-black/10 dark:border-white/10 pb-2">
                  <span className="opacity-50 text-xs">LANGUAGE</span>
                  <span className="font-bold">GML / GLSL</span>
                </li>
                <li className="flex justify-between border-b border-black/10 dark:border-white/10 pb-2">
                  <span className="opacity-50 text-xs">GENRE</span>
                  <span className="font-bold">ACTION RPG</span>
                </li>
              </ul>
            </div>
            
            <div className="p-8 border-4 border-dashed border-black/20 dark:border-white/20">
              <h3 className="font-bold uppercase mb-4 text-xs tracking-widest opacity-50 glitch-hover">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {["GML", "AI Logic", "Architecture", "GLSL Shaders", "Performance"].map(tag => (
                  <span key={tag} className="px-2 py-1 bg-black text-white dark:bg-white dark:text-black text-[10px] font-bold uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* GALLERY SECTION */}
        <div className="space-y-16">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter glitch-hover">Visual Identity</h2>
            <div className="h-2 w-24 bg-blue-600 mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {screenshots.map((ss, i) => (
              <div key={i} className="space-y-4 group">
                <div className="relative aspect-square border-4 border-black dark:border-white overflow-hidden bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center group-hover:border-blue-600 transition-colors">
                   <div className="absolute inset-0 blueprint-grid opacity-0 group-hover:opacity-20 transition-opacity" />
                   <p className="text-sm font-mono opacity-20 uppercase">Screenshot {i+1} Placeholder</p>
                </div>
                <div>
                   <h4 className="font-bold uppercase text-lg group-hover:text-blue-600 transition-colors">{ss.alt}</h4>
                   <p className="text-sm font-mono opacity-60">{ss.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
