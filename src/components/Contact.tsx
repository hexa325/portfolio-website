import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="section-padding section-container relative overflow-x-hidden">
      <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-24 items-center">
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full max-w-full">
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-none uppercase">
            Let&apos;s <br /> <span className="text-black/30 dark:text-white/30">Collaborate</span>
          </h2>
          <p className="text-xl md:text-2xl font-mono text-black/70 dark:text-white/70 mb-12 leading-tight max-w-md mx-auto md:mx-0">
            I&apos;m always open to new opportunities and interesting projects.
            Feel free to reach out!
          </p>
          
          <div className="space-y-6 mb-12 w-full max-w-md">
            <a
              href="mailto:nitescugeorgeeduard@gmail.com"
              className="group sync-card flex items-center justify-between p-6"
            >
              <div className="flex flex-col text-left overflow-hidden">
                <span className="text-[10px] font-bold uppercase tracking-widest text-black/50 dark:text-white/50 mb-1">Email</span>
                <span className="text-sm md:text-lg font-bold break-all">nitescugeorgeeduard@gmail.com</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6 shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                <path strokeLinecap="square" strokeLinejoin="miter" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
            
            <a
              href="https://github.com/hexa325"
              target="_blank"
              rel="noopener noreferrer"
              className="group sync-card flex items-center justify-between p-6"
            >
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-bold uppercase tracking-widest text-black/50 dark:text-white/50 mb-1">GitHub</span>
                <span className="text-lg font-bold">hexa325</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6 shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                <path strokeLinecap="square" strokeLinejoin="miter" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </div>

          <div>
            <a
              id="download-cv"
              href={process.env.NEXT_PUBLIC_GITHUB_PAGES === "true" ? "/portfolio-website/CV_Nitescu_George_Eduard.pdf" : "/CV_Nitescu_George_Eduard.pdf"}
              download="CV_Nitescu_George_Eduard.pdf"
              className="sync-inv inline-block"
            >
              Download CV
            </a>
          </div>
        </div>
        
        <div className="sync-card p-8 md:p-12 w-full">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
