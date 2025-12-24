import About from "./about/page";
import Contact from "./contact/page";
import Projects from "./projects/page";
import Resume from "./resume/page";
import Skills from "./skills/page";


export default function Home() {
  return (
    <>
      <main id="home" className="flex flex-col items-center min-h-screen gap-10 w-full">
      <section id="resume" className="container mx-auto p-10 rounded-lg shadow-md">
        <Resume />
      </section>
      <section id="about" className="container mx-auto p-10 bg-white rounded-lg shadow-md">
        <About />
      </section>
      <section id="projects" className="container mx-auto p-10 bg-white rounded-lg shadow-md">
        <Projects />
      </section>
      <section id="skills" className="container mx-auto p-10 bg-white rounded-lg shadow-md">
        <Skills />
      </section>
      <section id="contact" className="container mx-auto p-10 bg-white rounded-lg shadow-md">
        <Contact />
      </section>
      </main>
    </>
  );
}
