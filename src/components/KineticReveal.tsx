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

    // Mobile: Add active immediately and exit
    if (window.innerWidth <= 768) {
      ref.current.classList.add("active");
      return;
    }

    const currentRef = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => {
            if (currentRef) {
              currentRef.classList.add("active");
            }
          });
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.01, // Lower threshold for better reliability
        rootMargin: "0px 0px 50px 0px" // Trigger slightly before it enters viewport
      }
    );

    // Initial check in case it's already in view (common on back navigation)
    const rect = currentRef.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    
    if (inView) {
      currentRef.classList.add("active");
    } else {
      observer.observe(currentRef);
    }

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
