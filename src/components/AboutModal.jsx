import React, { useEffect } from 'react';
import { ArrowLeft, GraduationCap, MapPin, Mail, Cpu, BookOpen } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto backdrop-blur-md bg-slate-900/80 animate-fade-in">
      {/* Backdrop overlay listener */}
      <div
        className="fixed inset-0 cursor-pointer"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 z-10 my-8">
        <div className="relative w-full max-w-3xl mx-auto bg-slate-900/95 border border-slate-800 rounded-3xl shadow-2xl p-6 sm:p-10 overflow-hidden">
          {/* Top subtle highlight */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-teal-400/0 via-teal-400/50 to-teal-400/0" />

          {/* Minimalist Flat-Ghost Return Button in Top-Left Corner */}
          <div className="flex items-center justify-between mb-6">
            <button
              type="button"
              onClick={onClose}
              className="text-slate-300 hover:text-teal-400 hover:bg-slate-800/50 rounded-full p-2 transition-all cursor-pointer"
              aria-label="Volver al inicio"
              title="Volver al inicio"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            <span className="text-xs uppercase tracking-widest text-teal-400 font-semibold">
              Perfil Profesional
            </span>
          </div>

          {/* Modal Header */}
          <div className="flex items-center space-x-4 mb-6">
            <img
              src={personalInfo.avatarUrl}
              alt={personalInfo.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-teal-400/30 shadow-md"
            />
            <div>
              <h2 className="text-2xl font-bold text-slate-100">{personalInfo.name}</h2>
              <p className="text-teal-400 text-sm font-medium">{personalInfo.title}</p>
              <div className="flex items-center text-xs text-slate-400 mt-1">
                <MapPin className="w-3.5 h-3.5 mr-1 text-teal-400" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Detailed Bio */}
          <div className="space-y-6 text-slate-300 text-sm leading-relaxed border-t border-slate-800/80 pt-5">
            <div>
              <h3 className="text-xs uppercase tracking-wider text-teal-400 font-semibold mb-2 flex items-center">
                <BookOpen className="w-4 h-4 mr-2" />
                Trayectoria & Biografía
              </h3>
              <p className="bg-slate-800/40 p-4 rounded-2xl border border-slate-700/70 text-slate-300">
                {personalInfo.detailedBio}
              </p>
            </div>

            {/* Education & Focus */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-800/40 p-4 rounded-2xl border border-slate-700/70">
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

              <div className="bg-slate-800/40 p-4 rounded-2xl border border-slate-700/70">
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
