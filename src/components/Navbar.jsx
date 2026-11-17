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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
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

        {/* Right: Desktop Action Group (hidden on mobile) */}
        <div className="hidden md:flex items-center space-x-4 shrink-0">
          {/* Ver CV Button */}
          <a
            href={personalInfo.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center space-x-2 text-xs font-medium px-4 py-2.5 rounded-xl border border-slate-700 hover:border-teal-400 hover:bg-teal-900/20 text-slate-200 hover:text-teal-300 transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(20,184,166,0.3)]"
          >
            <FileText className="w-3.5 h-3.5 text-teal-400" />
            <span>Ver CV</span>
          </a>

          {/* Sobre mí Toggle Button */}
          <button
            type="button"
            onClick={handleAboutClick}
            className={`hidden md:flex items-center space-x-2 text-xs font-medium px-4 py-2.5 rounded-xl border transition-all duration-300 cursor-pointer hover:drop-shadow-[0_0_15px_rgba(20,184,166,0.3)] ${
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

        {/* Mobile Controls: ONLY Hamburger Menu Icon on the right */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-300 hover:text-teal-400 p-2 rounded-xl hover:bg-slate-800/60 focus:outline-none cursor-pointer transition-colors"
            aria-label="Alternar menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown (contains Nav Links + Sobre mí & Ver CV) */}
      {mobileMenuOpen && (
        <div className="md:hidden backdrop-blur-xl bg-slate-900/95 border-b border-slate-800/80 px-6 pt-3 pb-5 space-y-2">
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

          <div className="pt-2 mt-2 border-t border-slate-800/80 flex flex-col gap-2">
            <button
              type="button"
              onClick={handleAboutClick}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl border border-teal-400/30 bg-teal-400/10 text-teal-300 text-sm font-medium transition-all cursor-pointer"
            >
              {isAboutOpen ? (
                <>
                  <ArrowLeft className="w-4 h-4" />
                  <span>Volver al Inicio</span>
                </>
              ) : (
                <>
                  <User className="w-4 h-4" />
                  <span>Sobre mí</span>
                </>
              )}
            </button>

            <a
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-800/50 text-slate-200 hover:text-teal-300 text-sm font-medium transition-all"
            >
              <FileText className="w-4 h-4 text-teal-400" />
              <span>Ver CV</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
