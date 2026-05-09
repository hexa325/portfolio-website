"use client";

import { useEffect, useState, useRef } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const isScrollingToTop = useRef(false);

  useEffect(() => {
    setMounted(true);
    
    // PERFORMANCE FIX: Use IntersectionObserver instead of scroll listener
    // This stops JS from running on every single pixel scrolled.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (isScrollingToTop.current) return;
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    // Watch the top of the page (hero section target)
    const target = document.getElementById("hero");
    if (target) observer.observe(target);

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    isScrollingToTop.current = true;
    setIsVisible(false);
    
    const isMobile = window.innerWidth <= 768;

    window.scrollTo({
      top: 0,
      behavior: isMobile ? "auto" : "smooth",
    });

    setTimeout(() => {
      isScrollingToTop.current = false;
    }, isMobile ? 50 : 800);
  };

  if (!mounted) return null;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-black text-white dark:bg-white dark:text-black shadow-2xl z-[9999] transition-all duration-300 ${
        isVisible 
          ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" 
          : "opacity-0 scale-50 translate-y-10 pointer-events-none"
      }`}
      aria-label="Scroll to top"
      style={{
        visibility: isVisible ? 'visible' : 'hidden'
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className="w-6 h-6 mx-auto"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
        />
      </svg>
    </button>
  );
}
