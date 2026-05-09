"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const toggleVisibility = () => {
      // Show button after 300px scroll
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
    // 1. Immediately hide the button to prevent double-clicks or lingering
    setIsVisible(false);
    
    // 2. Absolute top scroll
    window.scrollTo({
      top: 0,
      behavior: "auto", // Instant jump for reliability
    });
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
        // Force hide on mobile if not visible without complex transforms if they are buggy
        display: isVisible ? 'block' : 'none'
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
