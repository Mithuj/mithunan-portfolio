import React from 'react';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-neutral">
      <Toaster position="top-right" />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Achievements />
      <Contact />
    </div>
  );
}

export default App;