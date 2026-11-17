import React, { useState, useEffect, useCallback } from 'react';
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

  const isAboutOpen =
    typeof controlledIsAboutOpen === 'boolean' ? controlledIsAboutOpen : internalAboutOpen;

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
      className="relative min-h-screen snap-start flex items-center justify-center pt-24 pb-20 overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative grid grid-cols-1 items-center">
          {/* =========================================================
              CAPA 1: VISTA PRINCIPAL DEL HERO
              2-Column CSS Grid en Desktop con tarjetas técnicas bajo la foto
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
                {/* Left Column - Editorial Content & Refined Flat/Subtle Buttons (7 cols) */}
                <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
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
                  <div className="space-y-3.5">
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

                  {/* Concise Biography */}
                  <p className="text-sm leading-relaxed sm:text-base text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-8 font-normal">
                    {personalInfo.shortBio}
                  </p>

                  {/* Refined Navigation Buttons: 2 primary buttons on mobile ("Sobre mí" & "Ver CV"), full set on md+ */}
                  <div className="flex flex-col sm:flex-row md:flex-wrap items-center justify-center lg:justify-start gap-4 pt-1">
                    {/* Primary (Mobile & Desktop): Sobre mí with subtle emerald/teal gradient */}
                    <button
                      type="button"
                      onClick={handleOpenAbout}
                      className="w-full sm:w-auto justify-center group inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 hover:from-emerald-500/20 hover:to-teal-500/20 border border-emerald-500/30 text-emerald-400 font-semibold text-sm shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-all duration-300 cursor-pointer"
                    >
                      <User className="w-4 h-4" />
                      <span>Sobre mí</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </button>

                    {/* Secondary (Mobile & Desktop): Ver CV */}
                    <a
                      href={personalInfo.cvUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="w-full sm:w-auto justify-center inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-slate-900/40 hover:bg-slate-800/50 border border-slate-800/80 md:border-transparent text-slate-200 hover:text-teal-300 font-medium text-sm transition-all duration-300"
                    >
                      <Download className="w-4 h-4 text-teal-400" />
                      <span>Ver CV</span>
                    </a>

                    {/* Desktop-only (hidden on mobile): Ver Proyectos */}
                    <a
                      href="#proyectos"
                      className="hidden md:inline-flex items-center space-x-2 px-4 py-3 rounded-xl bg-slate-900/30 hover:bg-slate-800/50 text-slate-200 hover:text-teal-300 font-medium text-sm transition-all duration-300"
                    >
                      <Code2 className="w-4 h-4 text-teal-400" />
                      <span>Ver Proyectos</span>
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

                {/* Right Column - Portrait Card + 3 Compact Technical Cards Below (5 cols) */}
                <div className="lg:col-span-5 flex flex-col items-center space-y-4 w-full">
                  {/* Portrait Card (interactive-card) */}
                  <div className="relative group w-full max-w-md">
                    <div className="absolute -inset-3 rounded-[2.25rem] bg-gradient-to-tr from-teal-400/10 via-violet-500/10 to-transparent blur-2xl opacity-75 group-hover:opacity-100 transition duration-700 pointer-events-none" />

                    <div className="interactive-card relative w-full h-80 sm:h-96 rounded-3xl backdrop-blur-xl bg-slate-950/20 border border-slate-800/80 shadow-[0_0_30px_rgba(139,92,246,0.03)] hover:border-violet-500/20 p-3.5 transition-all duration-500">
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

                  {/* 3 Technical Specialty Cards Directly Below Portrait (Minigrid of 3 columns) */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-md lg:max-w-none">
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
              CAPA 2: SECCIÓN "SOBRE MÍ" (PANEL DESLIZANTE)
              RETORNO: BOTÓN SUPERIOR IZQUIERDO + TÍTULO "Perfil Académico & Técnico"
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

                {/* Right Column: Detailed Biography & Academic Credentials */}
                <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
                  {/* Detailed Biography Card */}
                  <div className="interactive-card rounded-3xl backdrop-blur-xl bg-slate-950/20 border border-slate-800/80 shadow-[0_0_30px_rgba(139,92,246,0.03)] hover:border-violet-500/20 p-6 sm:p-8 space-y-4 relative overflow-hidden transition-all duration-300">
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-teal-400/40 to-transparent" />

                    <div className="flex items-center space-x-2.5 text-xs uppercase tracking-widest text-teal-400 font-semibold">
                      <BookOpen className="w-4 h-4" />
                      <span>Biografía & Visión Profesional</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-100 tracking-tight">
                      Ingeniería de software con bases sólidas y enfoque en calidad técnica.
                    </h3>

                    <p className="text-sm leading-relaxed sm:text-base text-slate-300/95">
                      {personalInfo.detailedBio}
                    </p>
                  </div>

                  {/* Sub-grid: USAC Education & Practical Engineering Focus */}
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

                    {/* Languages & Technical Communication Card */}
                    <div className="interactive-card rounded-3xl backdrop-blur-xl bg-slate-950/20 border border-slate-800/80 shadow-[0_0_30px_rgba(139,92,246,0.03)] hover:border-violet-500/20 p-6 flex flex-col justify-between space-y-4 transition-all duration-300">
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2.5 text-xs uppercase tracking-widest text-teal-400 font-semibold">
                          <Cpu className="w-4 h-4" />
                          <span>Idiomas & Comunicación</span>
                        </div>
                        <div className="space-y-2.5">
                          {personalInfo.languages?.map((lang) => (
                            <div
                              key={lang.name}
                              className="p-2.5 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-1"
                            >
                              <div className="flex items-center justify-between text-xs sm:text-sm">
                                <span className="font-bold text-slate-100">
                                  {lang.flag} {lang.name}
                                </span>
                                <span className="text-[11px] px-2 py-0.5 rounded-md bg-teal-400/10 border border-teal-400/25 text-teal-300 font-semibold">
                                  {lang.level}
                                </span>
                              </div>
                              <p className="text-[11px] text-slate-400 leading-snug">
                                {lang.detail}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {renderLayerIndicators(2)}
            </div>
          </div>
        </div>
      </div>

      {/* Circular Down-Arrow Smooth Scroll Button */}
      {!isAboutOpen && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1 text-slate-400 opacity-80 hover:opacity-100 transition-opacity">
          <button
            type="button"
            onClick={() =>
              document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="p-3 rounded-full backdrop-blur-xl bg-slate-950/30 border border-slate-800/80 hover:border-teal-400/50 hover:text-teal-400 transition-all cursor-pointer"
            aria-label="Desplazarse a proyectos"
          >
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      )}
    </section>
  );
}
