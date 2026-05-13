"use client";

import { useState } from "react";
import Image from "next/image";

interface BlueprintHotspot {
  x: number;
  y: number;
  label: string;
  description: string;
  code?: string;
}

interface BlueprintExplainerProps {
  imageSrc: string;
  alt: string;
  hotspots: BlueprintHotspot[];
  title: string;
}

export default function BlueprintExplainer({ imageSrc, alt, hotspots, title }: BlueprintExplainerProps) {
  const [activeSpot, setActiveSpot] = useState<BlueprintHotspot | null>(null);

  return (
    <div className="relative group border-4 border-black dark:border-white bg-zinc-100 dark:bg-zinc-900 overflow-hidden shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(244,244,240,1)] flex flex-col lg:flex-row">
      
      {/* LEFT COLUMN: SCHEMATIC INDEX (The structured text part) */}
      <div className="w-full lg:w-72 bg-zinc-200 dark:bg-zinc-800 border-b-4 lg:border-b-0 lg:border-r-4 border-black dark:border-white p-6 shrink-0 overflow-auto max-h-[400px] lg:max-h-none">
        <div className="marker-box mb-6">SYSTEM_INDEX_V.01</div>
        <h3 className="font-bold uppercase text-xs tracking-[0.2em] mb-8 opacity-50">Technical_Modules</h3>
        <nav className="space-y-2">
          {hotspots.map((spot, i) => (
            <button
              key={i}
              onMouseEnter={() => setActiveSpot(spot)}
              className={`w-full text-left p-3 font-mono text-[10px] uppercase transition-all flex items-center gap-3 border-2 ${
                activeSpot?.label === spot.label 
                  ? "bg-blue-600 text-white border-blue-600 translate-x-1" 
                  : "bg-white/50 dark:bg-black/50 border-transparent hover:border-black/20 dark:hover:border-white/20"
              }`}
            >
              <span className="opacity-40">0{i+1}</span>
              <span className="font-bold truncate">{spot.label}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="relative flex-grow flex flex-col">
        {/* HEADER BAR */}
        <div className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 flex justify-between items-center z-10">
          <span className="text-[10px] font-mono font-bold tracking-widest uppercase truncate mr-4">SCHEMATIC_VIEW: {title}</span>
          <div className="flex gap-1 shrink-0">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <div className="w-2 h-2 rounded-full bg-yellow-500" />
            <div className="w-2 h-2 rounded-full bg-green-500" />
          </div>
        </div>

        <div className="relative aspect-video overflow-hidden">
          {/* THE BASE IMAGE (OR PLACEHOLDER) */}
          {imageSrc ? (
            <Image src={imageSrc} alt={alt} fill className="object-cover opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-black/5 dark:text-white/5 font-bold text-6xl lg:text-8xl uppercase tracking-tighter">
              {title}
            </div>
          )}

          {/* BLUEPRINT OVERLAY (Visible on Hover) */}
          <div className="absolute inset-0 blueprint-grid opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          {/* SCANLINE EFFECT */}
          <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity overflow-hidden">
            <div className="w-full h-[2px] bg-blue-400 dark:bg-blue-600 animate-scanline shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
          </div>

          {/* HOTSPOTS */}
          {hotspots.map((spot, i) => (
            <div
              key={i}
              className="absolute group/spot transition-all duration-300"
              style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
            >
              {/* LABEL ABOVE POINT */}
              <div className={`absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black dark:bg-white text-white dark:text-black px-2 py-1 text-[8px] font-mono font-bold uppercase transition-all duration-300 ${
                activeSpot?.label === spot.label ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
              }`}>
                {spot.label}
              </div>

              <button
                className={`w-6 h-6 -ml-3 -mt-3 flex items-center justify-center z-20 mechanical-click transition-transform ${
                  activeSpot?.label === spot.label ? "scale-125" : "scale-100"
                }`}
                onMouseEnter={() => setActiveSpot(spot)}
                aria-label={`Show details for ${spot.label}`}
              >
                <div className={`absolute inset-0 bg-blue-600/20 rounded-full ${activeSpot?.label === spot.label ? "animate-ping" : "opacity-0"}`} />
                <div className={`relative w-3 h-3 border-2 transition-colors ${
                  activeSpot?.label === spot.label ? "bg-blue-600 border-white dark:border-black" : "bg-transparent border-black/40 dark:border-white/40"
                }`} />
              </button>
            </div>
          ))}

          {/* ACTIVE DETAIL PANEL (SIDE OVERLAY) */}
          {activeSpot && (
            <div className="absolute top-4 right-4 bottom-4 w-72 bg-black/90 dark:bg-white/90 text-white dark:text-black p-6 border-l-4 border-blue-600 animate-reveal-up z-30 hidden lg:flex flex-col overflow-hidden">
              <div className="marker-box mb-4 shrink-0">DATA_NODE_{activeSpot.label.toUpperCase().replace(/\s/g, '_')}</div>
              <h4 className="text-xl font-bold uppercase mb-4 tracking-tighter leading-none shrink-0">{activeSpot.label}</h4>
              <p className="font-mono text-[10px] opacity-80 mb-6 leading-relaxed shrink-0">
                {activeSpot.description}
              </p>
              {activeSpot.code && (
                <div className="bg-zinc-800 dark:bg-zinc-200 p-3 rounded-sm flex-grow overflow-auto scrollbar-hide">
                  <p className="text-[9px] font-mono text-blue-400 dark:text-blue-600 mb-2 shrink-0">// LOGIC_SNIPPET</p>
                  <pre className="text-[9px] font-mono leading-tight whitespace-pre-wrap text-white/90 dark:text-black/90">
                    {activeSpot.code}
                  </pre>
                </div>
              )}
            </div>
          )}
        </div>

        {/* COORDINATES FOOTER */}
        <div className="bg-zinc-200 dark:bg-zinc-800 px-4 py-1 flex justify-between items-center font-mono text-[8px] opacity-50 uppercase mt-auto border-t-2 border-black/10 dark:border-white/10">
          <div className="flex gap-4">
            <span>Sector: 07-G</span>
            <span>Status: {activeSpot ? `DATA_LOCK_${activeSpot.label.toUpperCase()}` : "IDLE_SCAN"}</span>
          </div>
          <span>Precision: 0.0001ms</span>
        </div>
      </div>
    </div>
  );
}
