export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-[#0a0a0a]/80 backdrop-blur-sm z-50 border-b border-white/10">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-xl font-bold gradient-text">
            NGE
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm hover:text-white/70 transition-colors">
              About
            </a>
            <a href="#experience" className="text-sm hover:text-white/70 transition-colors">
              Experience
            </a>
            <a href="#skills" className="text-sm hover:text-white/70 transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-sm hover:text-white/70 transition-colors">
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm px-4 py-2 bg-white text-black rounded-full hover:bg-white/90 transition-colors"
            >
              Let&apos;s talk
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
