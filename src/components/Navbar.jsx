import React, { useState } from 'react';
import { User, Menu, X, ArrowLeft, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ isAboutOpen, onOpenAbout, onCloseAbout }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#hero', action: () => onCloseAbout && onCloseAbout() },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Contacto', href: '#contact' },
  ];

  const handleAboutClick = () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
    if (isAboutOpen && onCloseAbout) {
      onCloseAbout();
    } else if (onOpenAbout) {
      onOpenAbout();
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-slate-950/75 border-b border-slate-800/80 transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Left: Corporate Identity */}
        <a
          href="#hero"
          onClick={() => onCloseAbout && onCloseAbout()}
          className="flex items-center space-x-2.5 group shrink-0"
        >
          <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-100 group-hover:text-teal-400 transition-colors duration-300">
            {personalInfo.name}
          </span>
          <span className="h-2 w-2 rounded-full bg-teal-400 group-hover:scale-125 transition-transform duration-300" />
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={link.action}
              className="text-sm font-medium text-slate-300 hover:text-teal-400 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Balanced Action Group */}
        <div className="hidden md:flex items-center space-x-4 shrink-0">
          {/* Ver CV Button */}
          <a
            href={personalInfo.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-xs font-medium px-4 py-2.5 rounded-xl border border-slate-700 hover:border-teal-400 hover:bg-teal-900/20 text-slate-200 hover:text-teal-300 transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(20,184,166,0.3)]"
          >
            <FileText className="w-3.5 h-3.5 text-teal-400" />
            <span>Ver CV</span>
          </a>

          {/* Sobre mí Toggle Button */}
          <button
            type="button"
            onClick={handleAboutClick}
            className={`inline-flex items-center space-x-2 text-xs font-medium px-4 py-2.5 rounded-xl border transition-all duration-300 cursor-pointer hover:drop-shadow-[0_0_15px_rgba(20,184,166,0.3)] ${
              isAboutOpen
                ? 'bg-teal-400/20 text-teal-200 border-teal-400/60'
                : 'backdrop-blur-md bg-teal-400/10 border-teal-400/30 text-teal-300 hover:bg-teal-900/30 hover:border-teal-400'
            }`}
          >
            {isAboutOpen ? (
              <>
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Inicio</span>
              </>
            ) : (
              <>
                <User className="w-3.5 h-3.5" />
                <span>Sobre mí</span>
              </>
            )}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center space-x-2.5">
          <a
            href={personalInfo.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border border-slate-700 hover:border-teal-400 hover:bg-teal-900/20 text-slate-200 hover:text-teal-300 transition-all"
          >
            <FileText className="w-3.5 h-3.5 text-teal-400" />
            <span>Ver CV</span>
          </a>

          <button
            type="button"
            onClick={handleAboutClick}
            className={`inline-flex items-center space-x-1 text-xs font-medium px-3 py-1.5 rounded-lg border transition-all duration-300 cursor-pointer ${
              isAboutOpen
                ? 'bg-teal-400/20 text-teal-200 border-teal-400/50'
                : 'backdrop-blur-md bg-teal-400/10 border-teal-400/30 text-teal-300'
            }`}
          >
            {isAboutOpen ? <ArrowLeft className="w-3.5 h-3.5" /> : <User className="w-3.5 h-3.5" />}
            <span>{isAboutOpen ? 'Inicio' : 'Sobre mí'}</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-300 hover:text-teal-400 p-1.5 rounded-lg hover:bg-slate-800/60 focus:outline-none cursor-pointer"
            aria-label="Alternar menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden backdrop-blur-xl bg-slate-900/95 border-b border-slate-800/80 px-6 pt-2 pb-4 space-y-1.5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                if (link.action) link.action();
                setMobileMenuOpen(false);
              }}
              className="block px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-teal-400 hover:bg-slate-800/60 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
