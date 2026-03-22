import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CursorGlow from './components/CursorGlow';

import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Internship from './sections/Internship';
import Training from './sections/Training';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import Certifications from './sections/Certifications';
import Education from './sections/Education';
import Contact from './sections/Contact';

const Background3D = React.lazy(() => import('./components/Background3D'));

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text font-sans transition-colors duration-300 relative">
        <React.Suspense fallback={null}>
          <Background3D />
        </React.Suspense>
        
        <CursorGlow />
        
        <div className="relative z-10">
          <Navbar />
          
          <main>
            <Hero />
            <About />
            <Skills />
            <Internship />
            <Training />
            <Projects />
            <div className="bg-transparent py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
                <Achievements />
                <Certifications />
              </div>
            </div>
            <Education />
            <Contact />
          </main>
          
          <Footer />
          <ScrollToTop />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
