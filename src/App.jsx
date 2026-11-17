import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroAnimation from './components/HeroAnimation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactForm from './components/ContactForm';
import { personalInfo } from './data/portfolioData';

const CURRENT_YEAR = new Date().getFullYear();

export default function App() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <div className="h-screen overflow-y-auto overflow-x-hidden snap-y snap-proximity scroll-smooth scroll-pt-20 bg-slate-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 text-slate-100 font-sans antialiased selection:bg-teal-400/30 selection:text-teal-200">
      {/* Interactive Ambient Canvas */}
      <HeroAnimation />

      {/* Navigation Header */}
      <Navbar
        isAboutOpen={isAboutOpen}
        onOpenAbout={() => setIsAboutOpen(true)}
        onCloseAbout={() => setIsAboutOpen(false)}
      />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero
          isAboutOpen={isAboutOpen}
          onOpenAbout={() => setIsAboutOpen(true)}
          onCloseAbout={() => setIsAboutOpen(false)}
        />
        <Projects />
        <Skills />
        <ContactForm />
      </main>

      {/* Minimal Corporate Footer */}
      <footer className="relative z-10 snap-end border-t border-slate-800/80 backdrop-blur-md bg-slate-950/80 py-8 text-center text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © {CURRENT_YEAR} {personalInfo.name} • {personalInfo.education[0]?.institution}
          </p>
          <p className="flex items-center space-x-1 text-slate-400">
            <span>Arquitectura Frontend en React, Vite & Tailwind CSS</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
