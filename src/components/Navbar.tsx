"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      aria-label="Main navigation"
      className="fixed top-0 w-full bg-[#0a0a0a]/80 dark:bg-[#0a0a0a]/80 bg-white/80 backdrop-blur-sm z-50 border-b border-white/10 dark:border-white/10 border-black/10"
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-xl font-bold gradient-text" aria-label="Home">
            NGE
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="text-sm hover:text-white/70 dark:hover:text-white/70 hover:text-black/70 transition-colors"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-sm hover:text-white/70 dark:hover:text-white/70 hover:text-black/70 transition-colors"
            >
              Experience
            </a>
            <a
              href="#skills"
              className="text-sm hover:text-white/70 dark:hover:text-white/70 hover:text-black/70 transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-sm hover:text-white/70 dark:hover:text-white/70 hover:text-black/70 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm px-4 py-2 bg-white text-black dark:bg-white dark:text-black bg-black text-white dark:bg-black dark:text-white rounded-full hover:opacity-90 transition-colors"
            >
              Let&apos;s talk
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 dark:bg-white/10 bg-black/10 hover:bg-white/20 dark:hover:bg-white/20 hover:bg-black/20 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
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
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10 dark:border-white/10 border-black/10">
            <div className="flex flex-col gap-4">
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="text-sm hover:text-white/70 dark:hover:text-white/70 hover:text-black/70 transition-colors"
              >
                About
              </a>
              <a
                href="#experience"
                onClick={() => setIsOpen(false)}
                className="text-sm hover:text-white/70 dark:hover:text-white/70 hover:text-black/70 transition-colors"
              >
                Experience
              </a>
              <a
                href="#skills"
                onClick={() => setIsOpen(false)}
                className="text-sm hover:text-white/70 dark:hover:text-white/70 hover:text-black/70 transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                onClick={() => setIsOpen(false)}
                className="text-sm hover:text-white/70 dark:hover:text-white/70 hover:text-black/70 transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="text-sm px-4 py-2 bg-white text-black dark:bg-white dark:text-black bg-black text-white dark:bg-black dark:text-white rounded-full hover:opacity-90 transition-colors text-center"
              >
                Let&apos;s talk
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
