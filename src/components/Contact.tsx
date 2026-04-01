import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="section-padding section-container">
      <h2 className="text-3xl font-bold mb-8">Contact</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-black/70 dark:text-white/70 mb-8">
            I&apos;m always open to new opportunities and interesting projects.
            Whether you have a question or just want to say hi, feel free to
            reach out!
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="mailto:your.email@example.com"
              className="flex items-center gap-2 px-4 py-2 bg-black/10 dark:bg-white/10 rounded-full hover:bg-black/20 dark:hover:bg-white/20 transition-colors"
            >
              <span>Email</span>
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-black/10 dark:bg-white/10 rounded-full hover:bg-black/20 dark:hover:bg-white/20 transition-colors"
            >
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-black/10 dark:bg-white/10 rounded-full hover:bg-black/20 dark:hover:bg-white/20 transition-colors"
            >
              <span>GitHub</span>
            </a>
          </div>
          <a
            href="/cv.pdf"
            className="inline-block px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full hover:opacity-90 transition-colors font-medium"
          >
            Download my CV
          </a>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
