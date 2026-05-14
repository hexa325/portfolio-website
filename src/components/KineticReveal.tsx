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
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !ref.current) return;

    const currentRef = ref.current;

    const reveal = () => setIsActive(true);

    // 1. Check if we navigated via BACK button
    const isBackNav = 
      window.performance?.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;
    
    if (isBackNav?.type === "back_forward") {
      reveal();
      return;
    }

    // 2. Immediate check: If element is already in view or above viewport
    const rect = currentRef.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      reveal();
    }

    // 3. Listener for browser back/forward buttons
    window.addEventListener("popstate", reveal);

    // 4. FAIL-SAFE: Absolute visibility guarantee
    const failSafe = setTimeout(reveal, 800);

    // 5. Mobile: Add active immediately
    if (window.innerWidth <= 768) {
      reveal();
      clearTimeout(failSafe);
      return;
    }

    // 6. Standard Observer for fresh scrolls
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

  return (
    <div 
      ref={ref} 
      className={`reveal-kinetic ${isActive ? "active" : ""} ${stagger ? `stagger-${stagger}` : ""} ${className}`}
    >
      {children}
    </div>
  );
}
