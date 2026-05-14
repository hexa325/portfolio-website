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

    // 1. FAIL-SAFE: If it hasn't revealed in 500ms, force it.
    // This solves the "invisible on back-button" bug.
    const failSafe = setTimeout(() => {
      if (currentRef && !currentRef.classList.contains("active")) {
        currentRef.classList.add("active");
      }
    }, 500);

    // 2. Mobile: Add active immediately and exit
    if (window.innerWidth <= 768) {
      currentRef.classList.add("active");
      clearTimeout(failSafe);
      return;
    }

    // 3. Observer logic
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => {
            if (currentRef) {
              currentRef.classList.add("active");
              clearTimeout(failSafe);
            }
          });
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.01,
        rootMargin: "0px 0px -5% 0px"
      }
    );

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
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
