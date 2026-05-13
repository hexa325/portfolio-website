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
    setMounted(true);
    if (typeof window === "undefined" || !ref.current) return;

    // Mobile: Add active immediately and exit
    if (window.innerWidth <= 768) {
      ref.current.classList.add("active");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => {
            if (ref.current) {
              ref.current.classList.add("active");
            }
          });
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px"
      }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
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
