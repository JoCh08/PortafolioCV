import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Code2,
  Cpu,
  Download,
  GraduationCap,
  Layers,
  Mail,
  MapPin,
  Sparkles,
  Terminal,
  User,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';

export default function Hero({
  isAboutOpen: controlledIsAboutOpen,
  onOpenAbout,
  onCloseAbout,
}) {
  const [internalAboutOpen, setInternalAboutOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const isAboutOpen =
    typeof controlledIsAboutOpen === 'boolean' ? controlledIsAboutOpen : internalAboutOpen;

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const handleOpenAbout = useCallback(() => {
    if (onOpenAbout) {
      onOpenAbout();
    } else {
      setInternalAboutOpen(true);
    }
  }, [onOpenAbout]);

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

  const getBadgeIcon = (index) => {
    if (index === 0) return <GraduationCap className="w-3.5 h-3.5 text-teal-400 shrink-0" />;
    if (index === 1) return <Layers className="w-3.5 h-3.5 text-teal-400 shrink-0" />;
    return <Terminal className="w-3.5 h-3.5 text-teal-400 shrink-0" />;
  };

  const renderLayerIndicators = (activeLayer) => (
    <div className="flex items-center justify-center gap-2 pt-2" aria-label="Navegación de capas">
      {[1, 2].map((layer) => (
        <button
          key={layer}
          type="button"
          onClick={layer === 1 ? handleCloseAbout : handleOpenAbout}
          className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300 ${
            activeLayer === layer
              ? 'w-7 bg-teal-300 shadow-[0_0_12px_rgba(45,212,191,0.55)]'
              : 'w-2.5 bg-slate-600 hover:bg-teal-400/70'
          }`}
          aria-label={`Ir a la capa ${layer}`}
          aria-current={activeLayer === layer ? 'step' : undefined}
        />
      ))}
    </div>
  );

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative snap-start min-h-screen w-full flex flex-col justify-center py-24 overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative grid grid-cols-1 items-center">
          {/* =========================================================
              CAPA 1: VISTA PRINCIPAL DEL HERO (LIMPIA Y ENFOCADA)
             ========================================================= */}
          <div
            className={`col-start-1 row-start-1 w-full transition-all duration-700 ease-in-out transform ${
              isAboutOpen
                ? '-translate-x-full opacity-0 pointer-events-none scale-[0.97]'
                : 'translate-x-0 opacity-100 pointer-events-auto scale-100'
            }`}
            aria-hidden={isAboutOpen}
            inert={isAboutOpen ? true : undefined}
          >
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                {/* Left Column - Editorial Content & Value Proposition (7 cols) */}
                <div
                  className={`lg:col-span-7 space-y-6 text-center lg:text-left transition-all duration-500 delay-100 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                >
                  {/* Availability Pill */}
                  <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full backdrop-blur-xl bg-slate-950/30 border border-slate-800/80 text-xs font-medium text-slate-300">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                    </span>
                    <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                    <span className="tracking-wide">{personalInfo.availability}</span>
                  </div>

                  {/* Main Heading & Role */}
                  <div className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.25em] text-teal-400 font-semibold">
                      Ingeniería de Software & Desarrollo Web
                    </p>
                    <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-100 leading-[1.08]">
                      Hola, soy{' '}
                      <span className="bg-gradient-to-r from-teal-300 via-emerald-300 to-teal-400 bg-clip-text text-transparent">
                        {personalInfo.name}
                      </span>
                    </h1>
                    <h2 className="text-base sm:text-lg lg:text-2xl font-medium text-slate-200 tracking-tight max-w-2xl mx-auto lg:mx-0 pt-1">
                      {personalInfo.title}
                    </h2>
                  </div>

                  {/* Concise Results-Oriented Biography */}
                  <p className="text-sm leading-relaxed sm:text-base text-slate-400 max-w-2xl mx-auto lg:mx-0 font-normal">
                    {personalInfo.shortBio}
                  </p>

                  {/* Balanced CTA Hierarchy:
                      Primary: "Ver Proyectos" (Emerald/Teal Gradient)
                      Secondary: "Sobre mí" (Both visible on Mobile & Desktop)
                      Complementary (Desktop md+): "Ver CV" & "Contáctame" */}
                  <div className="flex flex-col sm:flex-row md:flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
                    {/* Primary CTA: Ver Proyectos */}
                    <a
                      href="#proyectos"
                      className="w-full sm:w-auto justify-center group inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 hover:from-emerald-500/20 hover:to-teal-500/20 border border-emerald-500/30 text-emerald-400 font-semibold text-sm shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-all duration-300"
                    >
                      <Code2 className="w-4 h-4" />
                      <span>Ver Proyectos</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </a>

                    {/* Secondary CTA: Sobre mí */}
                    <button
                      type="button"
                      onClick={handleOpenAbout}
                      className="w-full sm:w-auto justify-center inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-slate-900/40 hover:bg-slate-800/60 border border-slate-800/80 hover:border-teal-400/40 text-slate-200 hover:text-teal-300 font-medium text-sm transition-all duration-300 cursor-pointer"
                    >
                      <User className="w-4 h-4 text-teal-400" />
                      <span>Sobre mí</span>
                    </button>

                    {/* Desktop-only (hidden on mobile): Ver CV */}
                    <a
                      href={personalInfo.cvUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="hidden md:inline-flex items-center space-x-2 px-4 py-3 rounded-xl bg-slate-900/30 hover:bg-slate-800/50 text-slate-200 hover:text-teal-300 font-medium text-sm transition-all duration-300"
                    >
                      <Download className="w-4 h-4 text-teal-400" />
                      <span>Ver CV</span>
                    </a>

                    {/* Desktop-only (hidden on mobile): Contáctame */}
                    <a
                      href="#contact"
                      className="hidden md:inline-flex items-center space-x-2 px-4 py-3 rounded-xl bg-slate-900/30 hover:bg-slate-800/50 text-slate-300 hover:text-teal-300 font-medium text-sm transition-all duration-300"
                    >
                      <Mail className="w-4 h-4 text-teal-400" />
                      <span>Contáctame</span>
                    </a>
                  </div>
                </div>

                {/* Right Column - Portrait Card + Technical Specialties (5 cols) */}
                <div
                  className={`lg:col-span-5 flex flex-col items-center space-y-4 w-full transition-all duration-500 delay-200 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                >
                  {/* Portrait Card (interactive-card) */}
                  <div className="relative group w-full max-w-md">
                    <div className="absolute -inset-3 rounded-[2.25rem] bg-gradient-to-tr from-teal-400/10 via-violet-500/10 to-transparent blur-2xl opacity-75 group-hover:opacity-100 transition duration-700 pointer-events-none" />

                    <div className="interactive-card relative w-full h-72 sm:h-96 rounded-3xl backdrop-blur-xl bg-slate-950/20 border border-slate-800/80 shadow-[0_0_30px_rgba(139,92,246,0.03)] hover:border-violet-500/20 p-3.5 transition-all duration-500">
                      <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-950/40">
                        <img
                          src={personalInfo.avatarUrl}
                          alt={personalInfo.name}
                          className="w-full h-full object-cover grayscale-[8%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.03]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent" />

                        {/* Caption inside Portrait */}
                        <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3.5 rounded-2xl backdrop-blur-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between">
                          <div className="flex items-center space-x-2 text-xs text-slate-200 truncate pr-2">
                            <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                            <span className="font-medium truncate">{personalInfo.location}</span>
                          </div>
                          <span className="text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-lg bg-teal-400/15 text-teal-300 border border-teal-400/30 font-semibold shrink-0">
                            USAC
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile (< sm): Ultra-compact 1-line pills to prevent excessive vertical height */}
                  <div className="flex sm:hidden flex-wrap items-center justify-center gap-2 w-full max-w-md">
                    {personalInfo.badges.map((badge, index) => (
                      <div
                        key={badge.value}
                        className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full backdrop-blur-xl bg-slate-950/30 border border-slate-800/80 text-xs text-slate-200"
                      >
                        {getBadgeIcon(index)}
                        <span className="font-semibold">{badge.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tablet & Desktop (sm+): 3 Technical Specialty Cards Below Portrait */}
                  <div className="hidden sm:grid sm:grid-cols-3 gap-3 w-full max-w-md lg:max-w-none">
                    {personalInfo.badges.map((badge, index) => (
                      <div
                        key={badge.value}
                        className="interactive-card p-3.5 rounded-3xl backdrop-blur-xl bg-slate-950/20 border border-slate-800/80 shadow-[0_0_30px_rgba(139,92,246,0.03)] hover:border-violet-500/20 transition-all duration-300 text-left space-y-1.5"
                      >
                        <div className="flex items-center space-x-1.5">
                          {getBadgeIcon(index)}
                          <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium truncate">
                            {badge.label}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm font-bold text-slate-100 tracking-tight leading-snug">
                          {badge.value}
                        </p>
                        <p className="text-[11px] text-teal-400/90 font-medium leading-tight">
                          {badge.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {renderLayerIndicators(1)}
            </div>
          </div>

          {/* =========================================================
              CAPA 2: SECCIÓN "SOBRE MÍ" (CONTIENE EXCLUSIVAMENTE "LO QUE PUEDO APORTAR")
             ========================================================= */}
          <div
            className={`col-start-1 row-start-1 w-full transition-all duration-700 ease-in-out transform ${
              isAboutOpen
                ? 'translate-x-0 opacity-100 pointer-events-auto scale-100'
                : 'translate-x-full opacity-0 pointer-events-none scale-[0.97]'
            }`}
            aria-hidden={!isAboutOpen}
            inert={!isAboutOpen ? true : undefined}
          >
            <div className="space-y-6">
              {/* Top Bar */}
              <div className="flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={handleCloseAbout}
                  className="group inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full backdrop-blur-xl bg-slate-950/30 border border-slate-800/80 hover:border-teal-400/50 text-xs font-medium text-teal-300 hover:text-teal-200 transition-all duration-300 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-300 focus-visible:outline-offset-2"
                  aria-label="Regresar a la portada"
                >
                  <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
                  <span>Regresar</span>
                </button>

                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full backdrop-blur-xl bg-slate-950/30 border border-slate-800/80 text-xs font-medium text-teal-300">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span className="uppercase tracking-widest text-[11px]">
                    Perfil Académico & Técnico
                  </span>
                </div>
              </div>

              {/* Main "Sobre mí" Bento Grid */}
              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
                {/* Left Column: Stylized Portrait & Quick Links */}
                <div className="interactive-card lg:col-span-4 rounded-3xl backdrop-blur-xl bg-slate-950/20 border border-slate-800/80 shadow-[0_0_30px_rgba(139,92,246,0.03)] hover:border-violet-500/20 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-300">
                  <div className="space-y-5">
                    <div className="relative group mx-auto w-full max-w-[220px] aspect-square rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-950/50 p-1.5 shadow-xl">
                      <img
                        src={personalInfo.avatarUrl}
                        alt={personalInfo.name}
                        className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    <div className="text-center space-y-1.5">
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight">
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

                  {/* Direct CV & Social Actions with transient 1.5s highlight pulse */}
                  <div className="mt-6 pt-5 border-t border-slate-800/80 space-y-2.5">
                    <a
                      href={personalInfo.cvUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className={`flex items-center justify-center space-x-2 w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 hover:from-emerald-500/20 hover:to-teal-500/20 border border-emerald-500/30 text-xs font-semibold text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-all duration-300 ${
                        isAboutOpen
                          ? 'animate-[pulse_1.5s_ease-in-out_2] ring-1 ring-emerald-400/50'
                          : ''
                      }`}
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Ver CV (PDF)</span>
                    </a>

                    <div className="grid grid-cols-2 gap-2.5">
                      <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl bg-slate-900/40 hover:bg-slate-800/50 text-xs font-medium text-slate-300 hover:text-teal-300 transition-all ${
                          isAboutOpen
                            ? 'animate-[pulse_1.5s_ease-in-out_2] ring-1 ring-teal-400/35'
                            : ''
                        }`}
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>GitHub</span>
                      </a>
                      <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl bg-slate-900/40 hover:bg-slate-800/50 text-xs font-medium text-slate-300 hover:text-teal-300 transition-all ${
                          isAboutOpen
                            ? 'animate-[pulse_1.5s_ease-in-out_2] ring-1 ring-teal-400/35'
                            : ''
                        }`}
                      >
                        <LinkedinIcon className="w-4 h-4" />
                        <span>LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Column: Value Proposition ("Lo que puedo aportar"), Biography & Academic Credentials */}
                <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
                  {/* Detailed Biography & Contributions Card */}
                  <div className="interactive-card rounded-3xl backdrop-blur-xl bg-slate-950/20 border border-slate-800/80 shadow-[0_0_30px_rgba(139,92,246,0.03)] hover:border-violet-500/20 p-6 sm:p-8 space-y-4 relative overflow-hidden transition-all duration-300">
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-teal-400/40 to-transparent" />

                    <div className="flex items-center space-x-2.5 text-xs uppercase tracking-widest text-teal-400 font-semibold">
                      <BookOpen className="w-4 h-4" />
                      <span>Lo que puedo aportar & Visión Profesional</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-100 tracking-tight">
                      Ingeniería de software orientada a resultados y calidad técnica.
                    </h3>

                    <p className="text-sm leading-relaxed sm:text-base text-slate-300/95">
                      {personalInfo.detailedBio}
                    </p>

                    {personalInfo.contributions && (
                      <div className="pt-2 grid grid-cols-1 gap-2">
                        {personalInfo.contributions.map((item) => (
                          <div
                            key={item}
                            className="flex items-center space-x-2.5 p-2.5 rounded-xl bg-slate-900/40 border border-slate-800/80 text-xs sm:text-sm text-slate-200"
                          >
                            <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Sub-grid: USAC Education & Engineering Focus */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Education Card */}
                    <div className="interactive-card rounded-3xl backdrop-blur-xl bg-slate-950/20 border border-slate-800/80 shadow-[0_0_30px_rgba(139,92,246,0.03)] hover:border-violet-500/20 p-6 space-y-3.5 transition-all duration-300">
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

                    {/* Engineering Methodology & Continuous Learning Card */}
                    <div className="interactive-card rounded-3xl backdrop-blur-xl bg-slate-950/20 border border-slate-800/80 shadow-[0_0_30px_rgba(139,92,246,0.03)] hover:border-violet-500/20 p-6 flex flex-col justify-between space-y-4 transition-all duration-300">
                      <div className="space-y-2.5">
                        <div className="flex items-center space-x-2.5 text-xs uppercase tracking-widest text-teal-400 font-semibold">
                          <Cpu className="w-4 h-4" />
                          <span>Enfoque de Ingeniería</span>
                        </div>
                        <p className="text-base font-bold text-slate-100">
                          Arquitectura Limpia & Escalabilidad
                        </p>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          Diseño de servicios desacoplados con validación de datos, control de
                          versiones bajo Gitflow y pruebas de extremo a extremo.
                        </p>
                      </div>

                      {personalInfo.learning && (
                        <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                          {personalInfo.learning.map((topic) => (
                            <span
                              key={topic}
                              className="text-[11px] px-2.5 py-1 rounded-lg bg-teal-400/10 border border-teal-400/25 text-teal-300 font-medium"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {renderLayerIndicators(2)}
            </div>
          </div>
        </div>
      </div>

      {/* Circular Down-Arrow Smooth Scroll Button (without infinite bounce) */}
      {!isAboutOpen && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1 text-slate-400 opacity-80 hover:opacity-100 transition-opacity">
          <button
            type="button"
            onClick={() =>
              document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="group p-3 rounded-full backdrop-blur-xl bg-slate-950/30 border border-slate-800/80 hover:border-teal-400/50 hover:text-teal-400 hover:translate-y-1 transition-all duration-300 cursor-pointer"
            aria-label="Desplazarse a proyectos"
          >
            <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          </button>
        </div>
      )}
    </section>
  );
}
