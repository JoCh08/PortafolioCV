import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Code2,
  Cpu,
  Download,
  GraduationCap,
  Layers,
  Mail,
  MapPin,
  Sparkles,
  Terminal,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ isAboutOpen: controlledIsAboutOpen, onCloseAbout }) {
  const [internalAboutOpen, setInternalAboutOpen] = useState(false);
  const heroRef = useRef(null);
  const hasAutoScrolledRef = useRef(false);
  const lastScrollYRef = useRef(0);

  const isAboutOpen =
    typeof controlledIsAboutOpen === 'boolean' ? controlledIsAboutOpen : internalAboutOpen;

  const handleCloseAbout = useCallback(() => {
    if (onCloseAbout) {
      onCloseAbout();
    } else {
      setInternalAboutOpen(false);
    }
  }, [onCloseAbout]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isAboutOpen) {
        handleCloseAbout();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAboutOpen, handleCloseAbout]);

  // Smooth auto-scroll to #proyectos when user scrolls past 50% of the Hero viewport height
  useEffect(() => {
    const handleScroll = () => {
      const heroEl = heroRef.current;
      if (!heroEl || isAboutOpen) return;

      const currentScrollY = window.scrollY;
      const heroHeight = heroEl.offsetHeight || window.innerHeight;
      const isScrollingDown = currentScrollY > lastScrollYRef.current;
      lastScrollYRef.current = currentScrollY;

      if (currentScrollY < heroHeight * 0.25) {
        hasAutoScrolledRef.current = false;
        return;
      }

      if (
        isScrollingDown &&
        !hasAutoScrolledRef.current &&
        currentScrollY >= heroHeight * 0.5 &&
        currentScrollY < heroHeight * 0.88
      ) {
        hasAutoScrolledRef.current = true;
        const projectsSection = document.getElementById('proyectos');
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isAboutOpen]);

  const getBadgeIcon = (index) => {
    if (index === 0) return <GraduationCap className="w-4 h-4 text-teal-400 shrink-0" />;
    if (index === 1) return <Layers className="w-4 h-4 text-teal-400 shrink-0" />;
    return <Terminal className="w-4 h-4 text-teal-400 shrink-0" />;
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-28 pb-24 overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="relative grid grid-cols-1 items-center">
          {/* =========================================================
              CAPA 1: VISTA PRINCIPAL DEL HERO
              2-Column CSS Grid en Desktop con separación amplia
             ========================================================= */}
          <div
            className={`col-start-1 row-start-1 w-full transition-all duration-700 ease-in-out transform ${
              isAboutOpen
                ? '-translate-x-full opacity-0 pointer-events-none scale-[0.97]'
                : 'translate-x-0 opacity-100 pointer-events-auto scale-100'
            }`}
            aria-hidden={isAboutOpen}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column - Editorial Content with Generous Breathing Room */}
              <div className="space-y-9 text-center lg:text-left">
                {/* Availability Pill */}
                <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full backdrop-blur-md bg-slate-900/70 border border-slate-800 text-xs font-medium text-slate-300 shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-60"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
                  </span>
                  <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                  <span className="tracking-wide">{personalInfo.availability}</span>
                </div>

                {/* Main Heading & Role */}
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-teal-400 font-semibold">
                    Ingeniería de Software & Desarrollo Web
                  </p>
                  <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-100 leading-[1.08]">
                    Hola, soy{' '}
                    <span className="bg-gradient-to-r from-teal-300 via-teal-400 to-emerald-300 bg-clip-text text-transparent">
                      {personalInfo.name}
                    </span>
                  </h1>
                  <h2 className="text-lg sm:text-2xl font-medium text-slate-400 tracking-tight max-w-2xl mx-auto lg:mx-0 pt-1">
                    {personalInfo.title}
                  </h2>
                </div>

                {/* Concise Biography */}
                <p className="max-w-2xl mx-auto lg:mx-0 text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                  {personalInfo.shortBio}
                </p>

                {/* Action Buttons with Generous Gap */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 pt-2">
                  <a
                    href="#proyectos"
                    className="group inline-flex items-center space-x-2.5 px-7 py-4 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-semibold text-sm border border-teal-300/40 transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(20,184,166,0.3)] hover:-translate-y-0.5"
                  >
                    <Code2 className="w-4 h-4" />
                    <span>Explorar Proyectos</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </a>

                  <a
                    href={personalInfo.cvUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="group inline-flex items-center space-x-2.5 px-7 py-4 rounded-xl backdrop-blur-md bg-slate-900/60 border border-slate-700 hover:border-teal-400 hover:bg-teal-900/20 text-slate-100 hover:text-teal-300 font-medium text-sm transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(20,184,166,0.3)] hover:-translate-y-0.5"
                  >
                    <Download className="w-4 h-4 text-teal-400 transition-transform duration-300 group-hover:translate-y-0.5" />
                    <span>Ver CV</span>
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex items-center space-x-2.5 px-6 py-4 rounded-xl backdrop-blur-md bg-slate-900/40 hover:bg-slate-800/70 border border-slate-800 hover:border-teal-400/50 text-slate-300 hover:text-white font-medium text-sm transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(20,184,166,0.3)]"
                  >
                    <Mail className="w-4 h-4 text-teal-400" />
                    <span>Contacto</span>
                  </a>
                </div>

                {/* Authentic Academic & Technical Credentials Strip with Generous Spacing */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-4">
                  {personalInfo.badges.map((badge, index) => (
                    <div
                      key={badge.value}
                      className="p-5 rounded-2xl backdrop-blur-md bg-slate-900/55 border border-slate-800/90 hover:border-teal-400/40 transition-all duration-300 text-left space-y-2"
                    >
                      <div className="flex items-center space-x-2.5">
                        {getBadgeIcon(index)}
                        <span className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">
                          {badge.label}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base font-bold text-slate-100 tracking-tight leading-snug">
                        {badge.value}
                      </p>
                      <p className="text-xs text-teal-400 font-medium">
                        {badge.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Clean Architectural Portrait Frame */}
              <div className="relative flex justify-center lg:justify-end items-center">
                <div className="relative group">
                  {/* Soft Ambient Illumination */}
                  <div className="absolute -inset-4 rounded-[2.25rem] bg-gradient-to-tr from-teal-400/15 via-slate-800/30 to-transparent blur-2xl opacity-75 group-hover:opacity-100 transition duration-700" />

                  {/* Glassmorphic Portrait Card */}
                  <div className="relative w-72 h-88 sm:w-96 sm:h-[29rem] lg:w-[26rem] lg:h-[31rem] rounded-3xl backdrop-blur-md bg-slate-900/60 border border-slate-800 group-hover:border-teal-400/40 p-4 shadow-2xl transition-all duration-500">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-950">
                      <img
                        src={personalInfo.avatarUrl}
                        alt={personalInfo.name}
                        className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/15 to-transparent" />

                      {/* Single Clean Caption inside Portrait */}
                      <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl backdrop-blur-md bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-xs text-slate-200 truncate pr-2">
                          <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                          <span className="font-medium truncate">{personalInfo.location}</span>
                        </div>
                        <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md bg-teal-400/15 text-teal-300 border border-teal-400/30 font-semibold shrink-0">
                          USAC
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================
              CAPA 2: SECCIÓN "SOBRE MÍ" (BIOGRAFÍA DETALLADA)
              Botón minimalista ArrowLeft flat-ghost en esquina superior izquierda
             ========================================================= */}
          <div
            className={`col-start-1 row-start-1 w-full transition-all duration-700 ease-in-out transform ${
              isAboutOpen
                ? 'translate-x-0 opacity-100 pointer-events-auto scale-100'
                : 'translate-x-full opacity-0 pointer-events-none scale-[0.97]'
            }`}
            aria-hidden={!isAboutOpen}
          >
            <div className="space-y-6">
              {/* Top Bar with Minimalist Flat-Ghost ArrowLeft Icon */}
              <div className="flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={handleCloseAbout}
                  className="text-slate-300 hover:text-teal-400 hover:bg-slate-800/50 rounded-full p-2 transition-all duration-300 cursor-pointer"
                  aria-label="Volver al inicio"
                  title="Volver al inicio"
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>

                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full backdrop-blur-md bg-slate-900/60 border border-slate-800 text-xs font-medium text-teal-300">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span className="uppercase tracking-widest text-[11px]">
                    Perfil Académico & Técnico
                  </span>
                </div>
              </div>

              {/* Main "Sobre mí" Bento Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                {/* Left Column: Stylized Portrait & Quick Links */}
                <div className="lg:col-span-4 rounded-3xl backdrop-blur-md bg-slate-900/60 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
                  <div className="space-y-5">
                    <div className="relative group mx-auto w-full max-w-[220px] aspect-square rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 p-1.5 shadow-xl">
                      <img
                        src={personalInfo.avatarUrl}
                        alt={personalInfo.name}
                        className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    <div className="text-center space-y-1.5">
                      <h2 className="text-2xl font-bold text-slate-100 tracking-tight">
                        {personalInfo.name}
                      </h2>
                      <p className="text-xs sm:text-sm font-medium text-teal-400">
                        {personalInfo.title}
                      </p>
                      <div className="inline-flex items-center justify-center text-xs text-slate-400 pt-1">
                        <MapPin className="w-3.5 h-3.5 mr-1.5 text-teal-400" />
                        <span>{personalInfo.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Direct CV & Social Actions */}
                  <div className="mt-6 pt-5 border-t border-slate-800 space-y-2.5">
                    <a
                      href={personalInfo.cvUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="flex items-center justify-center space-x-2 w-full py-2.5 px-4 rounded-xl border border-slate-700 hover:border-teal-400 hover:bg-teal-900/20 text-xs font-semibold text-teal-300 transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(20,184,166,0.3)]"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Ver CV (PDF)</span>
                    </a>

                    <div className="grid grid-cols-2 gap-2.5">
                      <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-teal-400 text-xs font-medium text-slate-300 hover:text-teal-300 transition-all"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>GitHub</span>
                      </a>
                      <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-teal-400 text-xs font-medium text-slate-300 hover:text-teal-300 transition-all"
                      >
                        <LinkedinIcon className="w-4 h-4" />
                        <span>LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Column: Detailed Biography & Academic Credentials */}
                <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
                  {/* Detailed Biography Card */}
                  <div className="rounded-3xl backdrop-blur-md bg-slate-900/60 border border-slate-800 p-6 sm:p-8 space-y-4 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-teal-400/40 to-transparent" />

                    <div className="flex items-center space-x-2.5 text-xs uppercase tracking-widest text-teal-400 font-semibold">
                      <BookOpen className="w-4 h-4" />
                      <span>Biografía & Visión Profesional</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight">
                      Ingeniería de software con bases sólidas y enfoque en calidad técnica.
                    </h3>

                    <p className="text-slate-300/95 text-sm sm:text-base leading-relaxed">
                      {personalInfo.detailedBio}
                    </p>
                  </div>

                  {/* Sub-grid: USAC Education & Practical Engineering Focus */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Education Card */}
                    <div className="rounded-3xl backdrop-blur-md bg-slate-900/60 border border-slate-800 p-6 space-y-3.5">
                      <div className="flex items-center space-x-2.5 text-xs uppercase tracking-widest text-teal-400 font-semibold">
                        <GraduationCap className="w-4 h-4" />
                        <span>Formación Universitaria</span>
                      </div>
                      {personalInfo.education.map((edu, idx) => (
                        <div key={idx} className="space-y-2">
                          <p className="text-base font-bold text-slate-100">{edu.degree}</p>
                          <p className="text-sm text-slate-300 font-medium">{edu.institution}</p>
                          <p className="text-xs text-slate-400 leading-relaxed">{edu.focus}</p>
                          <span className="inline-block text-[11px] px-2.5 py-1 rounded-lg bg-teal-400/10 border border-teal-400/25 text-teal-300 font-medium">
                            {edu.period}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Practical Focus Card */}
                    <div className="rounded-3xl backdrop-blur-md bg-slate-900/60 border border-slate-800 p-6 flex flex-col justify-between space-y-4">
                      <div className="space-y-2.5">
                        <div className="flex items-center space-x-2.5 text-xs uppercase tracking-widest text-teal-400 font-semibold">
                          <Cpu className="w-4 h-4" />
                          <span>Enfoque de Ingeniería</span>
                        </div>
                        <p className="text-lg font-bold text-slate-100 tracking-tight">
                          Desarrollo Full-Stack & Sistemas
                        </p>
                        <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed">
                          Construcción de proyectos integrales aplicando arquitectura limpia,
                          estructuras de datos eficientes, APIs modernas en Python/FastAPI e
                          interfaces fluidas en React.
                        </p>
                      </div>

                      <div className="pt-3 flex items-center justify-between border-t border-slate-800">
                        <span className="text-xs text-slate-400 font-medium">
                          USAC • Ingeniería en Sistemas
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Circular Down-Arrow Smooth Scroll Button */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1 text-slate-400 opacity-80 hover:opacity-100 transition-opacity">
        <button
          type="button"
          onClick={() =>
            document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })
          }
          className="p-3 rounded-full backdrop-blur-md bg-slate-900/60 border border-slate-700 hover:border-teal-400 hover:bg-teal-900/20 hover:text-teal-400 transition-all cursor-pointer hover:drop-shadow-[0_0_15px_rgba(20,184,166,0.3)]"
          aria-label="Desplazarse a proyectos"
        >
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
