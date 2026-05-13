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
    <div className="relative group border-4 border-black dark:border-white bg-zinc-100 dark:bg-zinc-900 overflow-hidden shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(244,244,240,1)]">
      {/* HEADER BAR */}
      <div className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 flex justify-between items-center">
        <span className="text-[10px] font-mono font-bold tracking-widest uppercase">SCHEMATIC_VIEW: {title}</span>
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-red-500" />
          <div className="w-2 h-2 rounded-full bg-yellow-500" />
          <div className="w-2 h-2 rounded-full bg-green-500" />
        </div>
      </div>

      <div className="relative aspect-video">
        {/* THE BASE IMAGE (OR PLACEHOLDER) */}
        {imageSrc ? (
          <Image src={imageSrc} alt={alt} fill className="object-cover opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-black/10 dark:text-white/10 font-bold text-4xl uppercase tracking-tighter">
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
          <button
            key={i}
            className="absolute w-8 h-8 -ml-4 -mt-4 flex items-center justify-center z-20 group/spot mechanical-click"
            style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
            onMouseEnter={() => setActiveSpot(spot)}
            onMouseLeave={() => setActiveSpot(null)}
            aria-label={`Show details for ${spot.label}`}
          >
            <div className="absolute inset-0 bg-blue-600/20 rounded-full animate-ping" />
            <div className="relative w-4 h-4 bg-blue-600 border-2 border-white dark:border-black rounded-full transition-transform group-hover/spot:scale-125" />
            
            {/* TOOLTIP (MOBILE/DESKTOP) */}
            <div className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 w-48 bg-black dark:bg-white text-white dark:text-black p-3 text-[10px] font-mono opacity-0 group-hover/spot:opacity-100 transition-opacity pointer-events-none border border-white/20">
               <div className="font-bold border-b border-white/20 dark:border-black/20 pb-1 mb-1 text-blue-400">{spot.label}</div>
               {spot.description}
            </div>
          </button>
        ))}

        {/* ACTIVE DETAIL PANEL (SIDE) */}
        {activeSpot && (
          <div className="absolute top-4 right-4 bottom-4 w-64 bg-black/90 dark:bg-white/90 text-white dark:text-black p-6 border-l-4 border-blue-600 animate-reveal-up z-30 hidden lg:block overflow-auto">
            <div className="marker-box mb-4">DATA_NODE_{activeSpot.label.toUpperCase().replace(/\s/g, '_')}</div>
            <h4 className="text-xl font-bold uppercase mb-4 tracking-tighter leading-none">{activeSpot.label}</h4>
            <p className="font-mono text-xs opacity-80 mb-6 leading-relaxed">
              {activeSpot.description}
            </p>
            {activeSpot.code && (
              <div className="bg-zinc-800 dark:bg-zinc-200 p-3 rounded-sm">
                <p className="text-[9px] font-mono text-blue-400 dark:text-blue-600 mb-2">// LOGIC_SNIPPET</p>
                <pre className="text-[9px] font-mono leading-tight whitespace-pre-wrap text-white/90 dark:text-black/90">
                  {activeSpot.code}
                </pre>
              </div>
            )}
          </div>
        )}
      </div>

      {/* COORDINATES FOOTER */}
      <div className="bg-zinc-200 dark:bg-zinc-800 px-4 py-1 flex justify-between items-center font-mono text-[8px] opacity-50 uppercase">
        <span>Sector: 07-G</span>
        <span>Resolution: 1920x1080</span>
        <span>Status: Online</span>
      </div>
    </div>
  );
}
