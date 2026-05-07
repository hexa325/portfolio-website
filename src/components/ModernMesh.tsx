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
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(position / height, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  // Layer Opacities
  const dawnOpacity = Math.max(0, 1 - scrollProgress * 3); // Fades out fast
  const twilightOpacity = isDark 
    ? Math.max(0, 1 - Math.abs(scrollProgress - 0.5) * 4) // Peaks at middle
    : 0;
  const voidOpacity = isDark 
    ? Math.max(0, (scrollProgress - 0.6) * 3) // Fades in late
    : 0;

  return (
    <div className="mesh-background">
      {/* LAYER 1: DAWN (Vibrant) */}
      <div 
        className="mesh-gradient absolute inset-0 transition-opacity duration-700 will-change-[opacity]" 
        style={{ 
          opacity: dawnOpacity * 0.8,
          backgroundImage: `
            radial-gradient(at 0% 0%, rgba(59, 130, 246, 0.3) 0px, transparent 50%),
            radial-gradient(at 100% 0%, rgba(139, 92, 246, 0.2) 0px, transparent 50%),
            radial-gradient(at 100% 100%, rgba(59, 130, 246, 0.2) 0px, transparent 50%),
            radial-gradient(at 0% 100%, rgba(139, 92, 246, 0.3) 0px, transparent 50%)
          `
        }} 
      />

      {/* LAYER 2: TWILIGHT (Deep Indigo) */}
      <div 
        className="mesh-gradient absolute inset-0 transition-opacity duration-700 will-change-[opacity]" 
        style={{ 
          opacity: twilightOpacity * 0.6,
          backgroundImage: `
            radial-gradient(at 20% 30%, rgba(30, 58, 138, 0.4) 0px, transparent 60%),
            radial-gradient(at 80% 70%, rgba(79, 70, 229, 0.3) 0px, transparent 60%)
          `
        }} 
      />

      {/* LAYER 3: THE VOID (Black/Dark Blue) */}
      <div 
        className="mesh-gradient absolute inset-0 transition-opacity duration-700 will-change-[opacity]" 
        style={{ 
          opacity: voidOpacity * 0.9,
          backgroundImage: `
            radial-gradient(at 50% 50%, rgba(30, 58, 138, 0.1) 0px, transparent 70%)
          `,
          backgroundColor: '#050505'
        }} 
      />

      <div className="noise-overlay" />
    </div>
  );
}
