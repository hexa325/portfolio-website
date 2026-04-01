export default function Hero() {
  return (
    <section className="pt-32 pb-16 section-container">
      <div className="max-w-3xl">
        <p className="text-blue-400 mb-4">Hello, I&apos;m</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Nitescu George-Eduard
        </h1>
        <h2 className="text-2xl md:text-3xl text-black/70 dark:text-white/70 mb-8">
          Full-Stack Developer
        </h2>
        <p className="text-lg text-black/60 dark:text-white/60 mb-8 max-w-2xl">
          I combine technical expertise with strategic thinking to build
          solutions that matter. Currently focused on React, Next.js, and
          modern web technologies.
        </p>
        <div className="flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full hover:opacity-90 transition-colors font-medium"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-black/20 dark:border-white/20 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
          >
            Download my CV
          </a>
        </div>
      </div>
    </section>
  );
}
