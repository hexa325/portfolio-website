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
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest mb-2">Location</h4>
              <p className="text-black/60 dark:text-white/60">Romania</p>
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest mb-2">Age</h4>
              <p className="text-black/60 dark:text-white/60">21</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-2xl -z-10 rounded-[2rem]" />
          <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-black/5 dark:border-white/5">
            <h3 className="text-2xl font-bold mb-6 tracking-tight">Quick Facts</h3>
            <ul className="space-y-4">
              {[
                "Relentlessly evolving skillset",
                "Comfortable in the unknown",
                "AI-augmented workflow advocate",
                "Passionate game creator"
              ].map((fact, i) => (
                <li key={i} className="flex items-center gap-4 text-black/70 dark:text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
