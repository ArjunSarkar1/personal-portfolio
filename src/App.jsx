import './App.css';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Blog from './sections/Blog';
import Publications from './sections/Publications';
import { Contact } from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Blog />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
