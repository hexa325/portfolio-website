"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      aria-label="Main navigation"
      className="fixed top-0 w-full bg-[#f4f4f0] dark:bg-[#111111] z-50 border-b-4 border-black dark:border-white"
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-3xl font-bold tracking-tighter uppercase" aria-label="Home">
            hexa.
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="text-xs uppercase font-bold tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black px-2 transition-colors"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-xs uppercase font-bold tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black px-2 transition-colors"
            >
              Experience
            </a>
            <a
              href="#skills"
              className="text-xs uppercase font-bold tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black px-2 transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-xs uppercase font-bold tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black px-2 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="bg-black text-white dark:bg-white dark:text-black px-6 py-2 font-bold uppercase tracking-widest border-2 border-black dark:border-white hover:translate-x-1 hover:translate-y-1 transition-transform"
            >
              Contact
            </a>
            <div className="h-6 w-[2px] bg-black dark:bg-white mx-2" />
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-12 h-12 flex items-center justify-center border-2 border-black dark:border-white bg-white dark:bg-black"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    d="M3.75 9h16.5m-16.5 6.75h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-8 border-t-4 border-black dark:border-white animate-fade-in bg-white dark:bg-black">
            <div className="flex flex-col gap-6 px-4">
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold uppercase tracking-tight"
              >
                About
              </a>
              <a
                href="#experience"
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold uppercase tracking-tight"
              >
                Experience
              </a>
              <a
                href="#skills"
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold uppercase tracking-tight"
              >
                Skills
              </a>
              <a
                href="#projects"
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold uppercase tracking-tight"
              >
                Projects
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="bg-black text-white dark:bg-white dark:text-black px-6 py-4 font-bold uppercase tracking-widest border-4 border-black dark:border-white text-center"
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
