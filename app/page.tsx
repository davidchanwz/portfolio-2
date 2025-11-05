import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import WorkExperience from "@/components/work-experience";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <WorkExperience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
