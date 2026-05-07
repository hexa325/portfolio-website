"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      aria-label="Main navigation"
      className="fixed top-0 w-full bg-white/50 dark:bg-[#050505]/50 backdrop-blur-xl z-50 border-b border-black/5 dark:border-white/5"
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-2xl font-display font-bold tracking-tighter hover:opacity-70 transition-opacity" aria-label="Home">
            hexa.
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <a
              href="#about"
              className="text-xs uppercase tracking-widest font-bold hover:text-black/50 dark:hover:text-white/50 transition-colors"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-xs uppercase tracking-widest font-bold hover:text-black/50 dark:hover:text-white/50 transition-colors"
            >
              Experience
            </a>
            <a
              href="#skills"
              className="text-xs uppercase tracking-widest font-bold hover:text-black/50 dark:hover:text-white/50 transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-xs uppercase tracking-widest font-bold hover:text-black/50 dark:hover:text-white/50 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-xs uppercase tracking-widest font-bold px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full hover:scale-105 transition-transform"
            >
              Contact
            </a>
            <div className="h-4 w-[1px] bg-black/10 dark:bg-white/10 mx-2" />
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 9h16.5m-16.5 6.75h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-8 animate-fade-in">
            <div className="flex flex-col gap-6 text-center">
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="text-lg font-display font-bold"
              >
                About
              </a>
              <a
                href="#experience"
                onClick={() => setIsOpen(false)}
                className="text-lg font-display font-bold"
              >
                Experience
              </a>
              <a
                href="#skills"
                onClick={() => setIsOpen(false)}
                className="text-lg font-display font-bold"
              >
                Skills
              </a>
              <a
                href="#projects"
                onClick={() => setIsOpen(false)}
                className="text-lg font-display font-bold"
              >
                Projects
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="text-lg font-display font-bold px-6 py-4 bg-black text-white dark:bg-white dark:text-black rounded-full"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
