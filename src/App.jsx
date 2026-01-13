import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Certificates from "./sections/Certificates";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";


export default function App() {
  return (
    <div className="w-full bg-slate-950">
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  )
}