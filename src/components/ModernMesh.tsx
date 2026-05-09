"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

export default function ModernMesh() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      return mobile;
    };

    const handleScroll = () => {
      if (!containerRef.current) return;
      const position = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = height > 0 ? Math.min(position / height, 1) : 0;
      containerRef.current.style.setProperty("--scroll-progress", progress.toString());
    };

    const mobile = checkMobile();
    if (!mobile) {
      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();
    }
    window.addEventListener("resize", checkMobile);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  if (!mounted || isMobile) return null;

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
      {/* RESTORED & ENHANCED GLOBAL GLOWS */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-500/10 dark:bg-blue-600/25 rounded-full ambient-glow animate-blob" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-500/10 dark:bg-purple-600/25 rounded-full ambient-glow animate-blob [animation-delay:2s]" />
        {/* New dynamic center glow for the 'Showpiece' feel */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-blue-400/5 dark:bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div 
        className="mesh-gradient absolute inset-0 hidden md:block" 
        style={{ 
          opacity: "calc(clamp(0, 1 - var(--scroll-progress) * 3, 1) * 0.8)",
          backgroundImage: `
            radial-gradient(at 0% 0%, rgba(59, 130, 246, 0.3) 0px, transparent 50%),
            radial-gradient(at 100% 0%, rgba(139, 92, 246, 0.2) 0px, transparent 50%),
            radial-gradient(at 100% 100%, rgba(59, 130, 246, 0.2) 0px, transparent 50%),
            radial-gradient(at 0% 100%, rgba(139, 92, 246, 0.3) 0px, transparent 50%)
          `
        }} 
      />

      <div 
        className="mesh-gradient absolute inset-0 hidden md:block" 
        style={{ 
          opacity: "calc(var(--is-dark) * clamp(0, 1 - abs(var(--scroll-progress) - 0.5) * 4, 1) * 0.6)",
          backgroundImage: `
            radial-gradient(at 20% 30%, rgba(30, 58, 138, 0.4) 0px, transparent 60%),
            radial-gradient(at 80% 70%, rgba(79, 70, 229, 0.3) 0px, transparent 60%)
          `
        }} 
      />

      <div 
        className="mesh-gradient absolute inset-0 hidden md:block" 
        style={{ 
          opacity: "calc(var(--is-dark) * clamp(0, (var(--scroll-progress) - 0.6) * 3, 1) * 0.9)",
          backgroundImage: `
            radial-gradient(at 50% 50%, rgba(30, 58, 138, 0.1) 0px, transparent 70%)
          `,
          backgroundColor: '#050505'
        }} 
      />

      <div className="noise-overlay hidden md:block" />
    </div>
  );
}
