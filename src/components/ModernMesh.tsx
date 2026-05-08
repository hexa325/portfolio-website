"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

export default function ModernMesh() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      // Disable scroll calculations on mobile to prevent snapping and artifacts
      if (typeof window === "undefined" || window.innerWidth <= 768) return;
      if (!containerRef.current) return;
      
      const position = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = height > 0 ? Math.min(position / height, 1) : 0;
      
      // Update CSS variables instead of React state to avoid re-renders
      containerRef.current.style.setProperty("--scroll-progress", progress.toString());
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div 
      ref={containerRef}
      className="mesh-background"
      style={{ 
        "--scroll-progress": "0",
        "--is-dark": isDark ? "1" : "0"
      } as React.CSSProperties}
    >
      {/* LAYER 1: DAWN (Vibrant) - Fades out fast */}
      <div 
        className="mesh-gradient absolute inset-0 will-change-opacity" 
        style={{ 
          opacity: "calc(clamp(0, 1 - var(--scroll-progress) * 3, 1) * 0.8)",
          backgroundImage: `
            radial-gradient(at 0% 0%, rgba(59, 130, 246, 0.3) 0px, transparent 50%),
            radial-gradient(at 100% 0%, rgba(139, 92, 246, 0.2) 0px, transparent 50%),
            radial-gradient(at 100% 100%, rgba(59, 130, 246, 0.2) 0px, transparent 50%),
            radial-gradient(at 0% 100%, rgba(139, 92, 246, 0.3) 0px, transparent 50%)
          `,
          transform: "translateZ(0)"
        }} 
      />

      {/* LAYER 2: TWILIGHT (Deep Indigo) - Peaks at middle, Dark Only */}
      <div 
        className="mesh-gradient absolute inset-0 will-change-opacity" 
        style={{ 
          opacity: "calc(var(--is-dark) * clamp(0, 1 - abs(var(--scroll-progress) - 0.5) * 4, 1) * 0.6)",
          backgroundImage: `
            radial-gradient(at 20% 30%, rgba(30, 58, 138, 0.4) 0px, transparent 60%),
            radial-gradient(at 80% 70%, rgba(79, 70, 229, 0.3) 0px, transparent 60%)
          `,
          transform: "translateZ(0)"
        }} 
      />

      {/* LAYER 3: THE VOID (Black/Dark Blue) - Fades in late, Dark Only */}
      <div 
        className="mesh-gradient absolute inset-0 will-change-opacity" 
        style={{ 
          opacity: "calc(var(--is-dark) * clamp(0, (var(--scroll-progress) - 0.6) * 3, 1) * 0.9)",
          backgroundImage: `
            radial-gradient(at 50% 50%, rgba(30, 58, 138, 0.1) 0px, transparent 70%)
          `,
          backgroundColor: '#050505',
          transform: "translateZ(0)"
        }} 
      />

      <div className="noise-overlay" style={{ transform: "translateZ(0)" }} />
    </div>
  );
}
