export default function About() {
  return (
    <section id="about" className="section-padding section-container">
      <h2 className="text-3xl font-bold mb-8">About</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-white/70 mb-4">
            I&apos;m a full-stack developer who believes great software comes
            from understanding both the technical and human sides of a
            problem. I don&apos;t just write code — I think about why
            we&apos;re building it and who it serves.
          </p>
          <p className="text-white/70">
            My approach combines clean code with clear communication.
            I explain technical concepts in ways everyone can understand,
            and I make sure every project delivers real value.
          </p>
        </div>
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
          <ul className="space-y-3 text-white/70">
            <li>Based in Romania</li>
            <li>Full-stack developer</li>
            <li>Open to opportunities</li>
            <li>Always learning</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
