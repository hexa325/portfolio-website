import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="section-padding section-container relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/10 blur-[150px] -z-10" />
      
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
            Let&apos;s <br /> <span className="text-black/20 dark:text-white/20">Collaborate</span>
          </h2>
          <p className="text-xl text-black/70 dark:text-white/70 mb-12 leading-relaxed">
            I&apos;m always open to new opportunities and interesting projects.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          
          <div className="space-y-6 mb-12">
            <a
              href="mailto:nitescugeorgeeduard@gmail.com"
              className="group flex items-center justify-between p-6 bg-white/50 dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20 transition-all"
            >
              <div className="flex flex-col">
                <span className="text-xs font-bold uppercase tracking-widest text-black/40 dark:text-white/40 mb-1">Email</span>
                <span className="text-lg font-bold">nitescugeorgeeduard@gmail.com</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
            
            <a
              href="https://github.com/hexa325"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 bg-white/50 dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20 transition-all"
            >
              <div className="flex flex-col">
                <span className="text-xs font-bold uppercase tracking-widest text-black/40 dark:text-white/40 mb-1">GitHub</span>
                <span className="text-lg font-bold">hexa325</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </div>

          <a
            id="download-cv"
            href="/cv.pdf"
            className="inline-flex items-center gap-3 px-10 py-5 bg-black text-white dark:bg-white dark:text-black rounded-full hover:scale-105 transition-transform font-bold text-sm uppercase tracking-wider shadow-2xl shadow-blue-500/20"
          >
            Download CV
          </a>
        </div>
        
        <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-[2.5rem] p-8 md:p-12 border border-black/5 dark:border-white/5">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
