"use client";

import { useEffect, useState, useRef } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const isScrollingToTop = useRef(false);

  useEffect(() => {
    setMounted(true);
    
    const toggleVisibility = () => {
      // If we are currently in the middle of a 'scroll to top' action,
      // ignore scroll events to prevent the button from flickering back on.
      if (isScrollingToTop.current) return;

      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    // 1. Lock visibility updates
    isScrollingToTop.current = true;
    setIsVisible(false);
    
    const isMobile = window.innerWidth <= 768;

    // 2. Perform scroll
    window.scrollTo({
      top: 0,
      behavior: isMobile ? "auto" : "smooth",
    });

    // 3. Unlock after a delay (enough for smooth scroll to finish on desktop)
    // On mobile (auto), this happens almost instantly.
    setTimeout(() => {
      isScrollingToTop.current = false;
      // Final check to ensure it's hidden if we're at the top
      if (window.scrollY <= 300) {
        setIsVisible(false);
      }
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
        // Hard-hide when not visible to prevent ghost artifacts or clicks
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
