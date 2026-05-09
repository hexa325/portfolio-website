import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import KineticReveal from "@/components/KineticReveal";
import ScrollReset from "@/components/ScrollReset";

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollReset />
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded"
      >
        Skip to main content
      </a>
      
      <Navbar />
      <Hero />
      
      <div id="about">
        <KineticReveal>
          <About />
        </KineticReveal>
      </div>
      
      <div id="experience">
        <KineticReveal>
          <Experience />
        </KineticReveal>
      </div>
      
      <div id="skills">
        <KineticReveal>
          <Skills />
        </KineticReveal>
      </div>
      
      <div id="projects">
        <KineticReveal>
          <Projects />
        </KineticReveal>
      </div>
      
      <div id="contact">
        <KineticReveal>
          <Contact />
        </KineticReveal>
      </div>
      
      <Footer />
      <ScrollToTop />
    </main>
  );
}
