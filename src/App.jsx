// App.js
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';

function App() {
  return (
    <div className="font-sans">
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <main>
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Certificates />
              <Contact />
            </main>
            <Footer />
          </>
        } />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
}

export default App;
