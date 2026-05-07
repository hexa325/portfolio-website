"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ModernMesh() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const position = window.scrollY;
      const height = window.innerHeight;
      const progress = Math.min(position / (height * 1.2), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div className="mesh-background">
      <div className="mesh-gradient" />
      {isDark && (
        <div 
          className="absolute inset-0 bg-[#050505] transition-opacity duration-300 pointer-events-none" 
          style={{ opacity: scrollProgress * 0.9 }}
        />
      )}
      <div className="noise-overlay" />
    </div>
  );
}
