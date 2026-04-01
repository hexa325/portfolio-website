import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <main className="min-h-screen">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded"
      >
        Skip to main content
      </a>
      <Navbar />
      <Hero />
      <FadeIn>
        <About />
      </FadeIn>
      <FadeIn delay={100}>
        <Experience />
      </FadeIn>
      <FadeIn delay={100}>
        <Skills />
      </FadeIn>
      <FadeIn delay={100}>
        <Projects />
      </FadeIn>
      <FadeIn delay={100}>
        <Contact />
      </FadeIn>
      <Footer />
      <ScrollToTop />
    </main>
  );
}
