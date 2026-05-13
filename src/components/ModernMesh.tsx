"use client";

import { useEffect, useState } from "react";

/**
 * ModernMesh Component (Brutalist Grid Refactor)
 * Provides a structured background grid without organic flows.
 */
export default function ModernMesh() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="mesh-background blueprint-grid" aria-hidden="true">
      {/* HORIZONTAL MARKERS (TOP) */}
      <div className="absolute top-4 left-0 w-full flex justify-between px-8 pointer-events-none">
        {['A', 'B', 'C', 'D', 'E', 'F'].map(m => (
          <span key={m} className="coord-text">{m}</span>
        ))}
      </div>
      {/* HORIZONTAL MARKERS (BOTTOM) */}
      <div className="absolute bottom-4 left-0 w-full flex justify-between px-8 pointer-events-none">
        {['A', 'B', 'C', 'D', 'E', 'F'].map(m => (
          <span key={m} className="coord-text">{m}</span>
        ))}
      </div>
      {/* VERTICAL MARKERS (LEFT) */}
      <div className="absolute left-4 top-0 h-full flex flex-col justify-between py-24 pointer-events-none">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(m => (
          <span key={m} className="coord-text">{m}</span>
        ))}
      </div>
      {/* VERTICAL MARKERS (RIGHT) */}
      <div className="absolute right-4 top-0 h-full flex flex-col justify-between py-24 pointer-events-none">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(m => (
          <span key={m} className="coord-text">{m}</span>
        ))}
      </div>
    </div>
  );
}
