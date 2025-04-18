import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import VisitorCounter from './components/VisitorCounter';

function App() {
  return (
    <div>
      <Hero />
      <VisitorCounter />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
