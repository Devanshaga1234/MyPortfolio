import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import TechIntro from './components/TechIntro';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  // const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Check for saved dark mode preference or default to system preference
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode !== null) {
      setDarkMode(JSON.parse(savedDarkMode));
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
    }

    // Intro will show by default, user can skip or replay
  }, []);

  useEffect(() => {
    // Apply dark mode to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Save preference to localStorage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // const handleIntroComplete = () => {
  //   setShowIntro(false);
  // };

  // const replayIntro = () => {
  //   setShowIntro(true);
  // };

  return (
    <div className="App min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* {showIntro && <TechIntro onComplete={handleIntroComplete} />} */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      
      {/* Replay Intro Button - Temporarily disabled */}
      {/* {!showIntro && (
        <button
          onClick={replayIntro}
          className="fixed bottom-6 left-6 px-4 py-2 text-gray-400 hover:text-white border border-gray-600 hover:border-gray-400 rounded-lg transition-all duration-300 backdrop-blur-sm bg-black/20 z-40"
        >
          Replay Intro
        </button>
      )} */}
    </div>
  );
}

export default App;
