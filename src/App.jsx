import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Project from "./components/Project";
import Skills from "./components/Skills";
import StarBackground from "./components/ui/StarBackground";

const App = () => {
  return (
    <>
      <StarBackground />
      <Nav />
      <Hero />
      <Project />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
