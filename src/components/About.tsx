export default function About() {
  return (
    <section id="about" className="section-padding section-container">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="text-center md:text-left">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter uppercase">
            About Me
          </h2>
          <p className="text-xl font-mono text-black/70 dark:text-white/70 mb-6 leading-tight">
            I&apos;m a 21-year-old student based in Romania who believes
            great software comes from understanding both the technical and
            human sides of a problem.
          </p>
          <p className="text-lg font-mono text-black/60 dark:text-white/60 mb-8">
            I don&apos;t just write code — I think
            about why we&apos;re building it and who it serves. My approach combines clean code with clear communication.
          </p>
        </div>

        <div className="relative">
          <div className="sync-card p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-10 tracking-tighter uppercase">Quick Facts</h3>
            <ul className="space-y-6">
              {[
                "Relentlessly evolving skillset",
                "Comfortable in the unknown",
                "AI-augmented workflow advocate",
                "Passionate game creator"
              ].map((fact, i) => (
                <li key={i} className="flex items-start gap-4 text-black dark:text-white group/item">
                  <span className="w-4 h-4 border-2 border-black dark:border-white bg-blue-600 mt-1 shrink-0" />
                  <span className="font-mono font-bold leading-none">{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
