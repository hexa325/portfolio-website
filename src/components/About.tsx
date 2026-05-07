export default function About() {
  return (
    <section id="about" className="section-padding section-container">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tighter">
            About Me
          </h2>
          <p className="text-xl text-black/70 dark:text-white/70 mb-6 leading-relaxed">
            I&apos;m a 21-year-old student based in Romania who believes
            great software comes from understanding both the technical and
            human sides of a problem.
          </p>
          <p className="text-lg text-black/60 dark:text-white/60 mb-8">
            I don&apos;t just write code — I think
            about why we&apos;re building it and who it serves. My approach combines clean code with clear communication.
          </p>
        </div>

        <div className="relative group">
          <div className="bg-black/[0.02] dark:bg-white/[0.02] backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-black/5 dark:border-white/5 transition-colors duration-500 hover:border-black/10 dark:hover:border-white/10">
            <h3 className="text-2xl font-bold mb-8 tracking-tight">Quick Facts</h3>
            <ul className="space-y-5">
              {[
                "Relentlessly evolving skillset",
                "Comfortable in the unknown",
                "AI-augmented workflow advocate",
                "Passionate game creator"
              ].map((fact, i) => (
                <li key={i} className="flex items-center gap-4 text-black/60 dark:text-white/60 group/item">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover/item:bg-blue-500 transition-colors" />
                  <span className="group-hover/item:text-black dark:group-hover/item:white transition-colors">{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
