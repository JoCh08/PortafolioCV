import React, { useEffect } from 'react';
import { ArrowLeft, GraduationCap, MapPin, Mail, Cpu, BookOpen, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';

export default function AboutModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto backdrop-blur-md bg-slate-950/75 animate-fade-in">
      {/* Backdrop overlay listener */}
      <div
        className="fixed inset-0 cursor-pointer"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 my-8">
        <div className="interactive-card relative w-full backdrop-blur-xl bg-slate-950/20 border border-slate-800/80 shadow-[0_0_30px_rgba(139,92,246,0.03)] hover:border-violet-500/20 rounded-3xl p-6 sm:p-10 overflow-hidden transition-all duration-300">
          {/* Top subtle highlight */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-teal-400/0 via-teal-400/50 to-teal-400/0" />

          {/* Subtle Ghost Return Arrow (← Regresar) in Top-Left Corner */}
          <div className="flex items-center justify-between mb-6">
            <button
              type="button"
              onClick={onClose}
              className="group inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-teal-300 hover:bg-slate-800/40 transition-all cursor-pointer"
              aria-label="Regresar a la portada"
            >
              <ArrowLeft className="w-4 h-4 text-teal-400 transition-transform duration-300 group-hover:-translate-x-1" />
              <span>Regresar</span>
            </button>

            <span className="text-xs uppercase tracking-widest text-teal-400 font-semibold">
              Perfil Profesional
            </span>
          </div>

          {/* Modal Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center space-x-4">
              <img
                src={personalInfo.avatarUrl}
                alt={personalInfo.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-teal-400/30 shadow-md"
              />
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-100">
                  {personalInfo.name}
                </h2>
                <p className="text-teal-400 text-xs sm:text-sm font-medium">{personalInfo.title}</p>
                <div className="flex items-center text-xs text-slate-400 mt-1">
                  <MapPin className="w-3.5 h-3.5 mr-1 text-teal-400" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Key Resources with transient 1.5s highlight pulse */}
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={personalInfo.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 hover:from-emerald-500/20 hover:to-teal-500/20 border border-emerald-500/30 text-xs font-semibold text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)] animate-[pulse_1.5s_ease-in-out_2] ring-1 ring-emerald-400/50 transition-all duration-300"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Ver CV</span>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-slate-900/40 hover:bg-slate-800/50 border border-slate-800/80 text-xs font-medium text-slate-300 hover:text-teal-300 animate-[pulse_1.5s_ease-in-out_2] ring-1 ring-teal-400/35 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-slate-900/40 hover:bg-slate-800/50 border border-slate-800/80 text-xs font-medium text-slate-300 hover:text-teal-300 animate-[pulse_1.5s_ease-in-out_2] ring-1 ring-teal-400/35 transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Detailed Bio */}
          <div className="space-y-6 text-slate-300 text-sm leading-relaxed sm:text-base border-t border-slate-800/80 pt-5">
            <div>
              <h3 className="text-xs uppercase tracking-wider text-teal-400 font-semibold mb-2 flex items-center">
                <BookOpen className="w-4 h-4 mr-2" />
                Trayectoria & Biografía
              </h3>
              <p className="interactive-card backdrop-blur-xl bg-slate-950/20 p-5 rounded-3xl border border-slate-800/80 shadow-[0_0_30px_rgba(139,92,246,0.03)] hover:border-violet-500/20 text-sm leading-relaxed sm:text-base text-slate-300">
                {personalInfo.detailedBio}
              </p>
            </div>

            {/* Education & Focus */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="interactive-card backdrop-blur-xl bg-slate-950/20 p-5 rounded-3xl border border-slate-800/80 shadow-[0_0_30px_rgba(139,92,246,0.03)] hover:border-violet-500/20">
                <h4 className="text-xs uppercase tracking-wider text-teal-400 font-semibold mb-3 flex items-center">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Educación
                </h4>
                {personalInfo.education.map((edu, idx) => (
                  <div key={idx} className="space-y-1">
                    <p className="font-semibold text-slate-200 text-sm">{edu.degree}</p>
                    <p className="text-xs text-slate-400">{edu.institution}</p>
                    <span className="inline-block text-[10px] px-2 py-0.5 rounded bg-slate-800 text-teal-300">
                      {edu.period}
                    </span>
                  </div>
                ))}
              </div>

              <div className="interactive-card backdrop-blur-xl bg-slate-950/20 p-5 rounded-3xl border border-slate-800/80 shadow-[0_0_30px_rgba(139,92,246,0.03)] hover:border-violet-500/20">
                <h4 className="text-xs uppercase tracking-wider text-teal-400 font-semibold mb-3 flex items-center">
                  <Cpu className="w-4 h-4 mr-2" />
                  Especialización
                </h4>
                <p className="text-base font-bold text-slate-100">Arquitectura Full-Stack</p>
                <p className="text-xs text-slate-400 mt-1">
                  Desarrollo de software moderno con React, FastAPI, Python y C++.
                </p>
              </div>
            </div>
          </div>

          {/* Footer info */}
          <div className="mt-6 pt-4 border-t border-slate-800/80 flex justify-between items-center text-xs text-slate-400">
            <span className="flex items-center">
              <Mail className="w-3.5 h-3.5 mr-1.5 text-teal-400" />
              {personalInfo.email}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
