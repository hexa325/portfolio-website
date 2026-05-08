"use client";

import { useEffect, useRef } from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
}

export default function FadeIn({ children, delay = 0 }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            ref.current?.classList.add("opacity-100");
            ref.current?.classList.remove("opacity-0", "translate-y-4");
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.05,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className="opacity-0 translate-y-4 transition-all duration-1000 ease-out will-change-[opacity,transform]">
      {children}
    </div>
  );
}
