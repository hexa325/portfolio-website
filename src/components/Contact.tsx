import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="section-padding section-container relative overflow-x-hidden">
      <div className="absolute top-1/4 left-[-10%] w-96 h-96 bg-blue-500/10 dark:bg-blue-600/20 rounded-full blur-[150px] animate-blob pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-[-10%] w-96 h-96 bg-purple-500/5 dark:bg-purple-600/10 rounded-full blur-[150px] animate-blob [animation-delay:4s] pointer-events-none -z-10" />
      
      <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full max-w-full overflow-hidden px-4 md:px-0">
          <h2 className="text-3xl md:text-6xl font-bold tracking-tighter mb-8 leading-tight">
            Let&apos;s <br /> <span className="text-black/20 dark:text-white/20">Collaborate</span>
          </h2>
          <p className="text-base md:text-xl text-black/70 dark:text-white/70 mb-12 leading-relaxed max-w-md mx-auto md:mx-0 break-words">
            I&apos;m always open to new opportunities and interesting projects.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          
          <div className="space-y-4 md:space-y-6 mb-12 w-full max-w-md mx-auto md:mx-0">
            <a
              href="mailto:nitescugeorgeeduard@gmail.com"
              className="group flex items-center justify-between p-5 md:p-6 bg-white/50 dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20 transition-all overflow-hidden"
            >
              <div className="flex flex-col text-left overflow-hidden mr-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40 mb-1">Email</span>
                <span className="text-sm md:text-lg font-bold break-all">nitescugeorgeeduard@gmail.com</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
            
            <a
              href="https://github.com/hexa325"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-5 md:p-6 bg-white/50 dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20 transition-all"
            >
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40 mb-1">GitHub</span>
                <span className="text-base md:text-lg font-bold">hexa325</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </div>

          <a
            id="download-cv"
            href="/cv.pdf"
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-black text-white dark:bg-white dark:text-black rounded-full overflow-hidden transition-all duration-300 hover:scale-105 font-bold text-sm uppercase tracking-wider shadow-2xl shadow-blue-500/20"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white dark:group-hover:text-black">Download CV</span>
            <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out rounded-full" />
          </a>
        </div>
        
        <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-[2.5rem] p-8 md:p-12 border border-black/5 dark:border-white/5">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
