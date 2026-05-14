"use client";

import { useEffect, useRef, useState } from "react";

export default function KineticReveal({ 
  children, 
  className = "", 
  stagger = 0 
}: { 
  children: React.ReactNode; 
  className?: string; 
  stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !ref.current) return;

    const currentRef = ref.current;

    const reveal = () => {
      if (currentRef && !currentRef.classList.contains("active")) {
        currentRef.classList.add("active");
      }
    };

    // 1. Immediate check for back-navigation / already in view
    const rect = currentRef.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      reveal();
    }

    // 2. Listener for browser back/forward buttons
    window.addEventListener("popstate", reveal);

    // 3. FAIL-SAFE: Ensure it eventually shows up
    const failSafe = setTimeout(reveal, 600);

    // 4. Mobile: Add active immediately
    if (window.innerWidth <= 768) {
      reveal();
      clearTimeout(failSafe);
      return;
    }

    // 5. Standard Observer for fresh scrolls
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          clearTimeout(failSafe);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.01, rootMargin: "0px 0px -5% 0px" }
    );

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
      window.removeEventListener("popstate", reveal);
      clearTimeout(failSafe);
    };
  }, []);

  // On mobile, we render a simple div without the reveal logic/classes
  return (
    <div 
      ref={ref} 
      className={`reveal-kinetic ${stagger ? `stagger-${stagger}` : ""} ${className}`}
    >
      {children}
    </div>
  );
}
