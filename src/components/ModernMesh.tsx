"use client";

import { useEffect, useState } from "react";

export default function ModernMesh() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const height = window.innerHeight;
      // Fade to black over the first 1.5 screen heights
      const progress = Math.min(position / (height * 1.2), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="mesh-background">
      <div className="mesh-gradient" />
      <div 
        className="absolute inset-0 bg-[#050505] transition-opacity duration-300 pointer-events-none" 
        style={{ opacity: scrollProgress * 0.9 }}
      />
      <div className="noise-overlay" />
    </div>
  );
}
