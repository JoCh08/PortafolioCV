import React, { useEffect, useRef, useState } from 'react';
import { Cpu, Terminal, Layers, Users, Database, Globe, CheckCircle2 } from 'lucide-react';
import { skills, personalInfo } from '../data/portfolioData';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('hard');
  const sectionRef = useRef(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Frontend':
        return <Layers className="w-5 h-5 text-teal-400" />;
      case 'Backend':
        return <Cpu className="w-5 h-5 text-teal-400" />;
      case 'Bases de Datos':
        return <Database className="w-5 h-5 text-teal-400" />;
      default:
        return <Terminal className="w-5 h-5 text-teal-400" />;
    }
  };

  const hardSkillsList = Array.isArray(skills) ? skills : skills.hardSkills || [];
  const softSkillsList = Array.isArray(skills) ? [] : skills.softSkills || [];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={`min-h-screen snap-start flex flex-col justify-center py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-in-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Section Header */}
      <div className="text-center space-y-3 mb-10">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full backdrop-blur-md bg-slate-800/50 border border-slate-700/70 text-xs font-medium uppercase tracking-wider text-teal-400">
          <Cpu className="w-3.5 h-3.5" />
          <span>Stack Técnico & Perfil Profesional</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-100">
          Habilidades & Competencias
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Tecnologías de desarrollo Full-Stack organizadas por especialidad, complementadas con
          competencias profesionales e idiomas para entornos de ingeniería colaborativos.
        </p>

        {/* Interactive Tabs for Mobile & Quick Filtering */}
        <div className="pt-4 flex items-center justify-center">
          <div className="inline-flex p-1.5 rounded-2xl backdrop-blur-xl bg-slate-900/70 border border-slate-800">
            <button
              type="button"
              onClick={() => setActiveTab('hard')}
              className={`inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === 'hard'
                  ? 'bg-teal-400/20 text-teal-200 border border-teal-400/50 shadow-[0_0_15px_rgba(20,184,166,0.2)]'
                  : 'text-slate-400 hover:text-slate-200 border border-transparent'
              }`}
            >
              <Cpu className="w-4 h-4 text-teal-400" />
              <span>Tecnologías (Hard Skills)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('soft')}
              className={`inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === 'soft'
                  ? 'bg-teal-400/20 text-teal-200 border border-teal-400/50 shadow-[0_0_15px_rgba(20,184,166,0.2)]'
                  : 'text-slate-400 hover:text-slate-200 border border-transparent'
              }`}
            >
              <Users className="w-4 h-4 text-teal-400" />
              <span>Competencias & Idiomas</span>
            </button>
          </div>
        </div>
      </div>

      {/* PANEL 1: Tecnologías (Hard Skills) */}
      {activeTab === 'hard' && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {hardSkillsList.map((group) => (
            <div
              key={group.category}
              className="interactive-card backdrop-blur-md bg-slate-800/35 hover:bg-slate-800/55 border border-slate-700/70 hover:border-teal-400/40 rounded-3xl p-6 sm:p-7 transition-all duration-300 ease-in-out shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="mb-6 pb-4 border-b border-slate-700/60 space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-xl bg-teal-400/10 border border-teal-400/20">
                      {getCategoryIcon(group.category)}
                    </div>
                    <h3 className="text-lg font-bold tracking-tight text-slate-100">
                      {group.category}
                    </h3>
                  </div>
                  {group.description && (
                    <p className="text-xs text-slate-400 leading-relaxed pt-1">
                      {group.description}
                    </p>
                  )}
                </div>

                {/* Clean Skill Items without arbitrary percentages */}
                <div className="space-y-3">
                  {group.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between p-3 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-teal-400/30 transition-colors duration-200"
                    >
                      <div className="flex items-center space-x-2.5">
                        <span className="h-2 w-2 rounded-full bg-teal-400 shrink-0" />
                        <span className="text-xs sm:text-sm font-semibold text-slate-100">
                          {skill.name}
                        </span>
                      </div>
                      {skill.tag && (
                        <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-lg bg-slate-800/90 text-teal-300 border border-slate-700/80">
                          {skill.tag}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* PANEL 2: Competencias Profesionales (Soft Skills) + Idiomas */}
      {activeTab === 'soft' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Soft Skills (8 cols) */}
          <div className="interactive-card lg:col-span-8 backdrop-blur-md bg-slate-800/35 border border-slate-700/70 rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center space-x-3 pb-4 border-b border-slate-700/60">
              <div className="p-2.5 rounded-xl bg-teal-400/10 border border-teal-400/20">
                <Users className="w-5 h-5 text-teal-400" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-100">
                  Competencias Profesionales (Soft Skills)
                </h3>
                <p className="text-xs text-slate-400">
                  Aptitudes clave para el trabajo colaborativo y la entrega de software de calidad
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {softSkillsList.map((item) => (
                <div
                  key={item.name}
                  className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-teal-400/30 transition-all space-y-1.5"
                >
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                    <h4 className="text-sm font-bold text-slate-100">{item.name}</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pl-6">{item.summary}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Languages Card (4 cols) */}
          <div className="interactive-card lg:col-span-4 backdrop-blur-md bg-slate-800/35 border border-slate-700/70 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex items-center space-x-3 pb-4 border-b border-slate-700/60">
                <div className="p-2.5 rounded-xl bg-teal-400/10 border border-teal-400/20">
                  <Globe className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-100">
                    Idiomas
                  </h3>
                  <p className="text-xs text-slate-400">Comunicación & Documentación Técnica</p>
                </div>
              </div>

              <div className="space-y-4">
                {personalInfo.languages?.map((lang) => (
                  <div
                    key={lang.name}
                    className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-slate-100">
                        {lang.flag} {lang.name}
                      </span>
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-lg bg-teal-400/15 text-teal-300 border border-teal-400/30">
                        {lang.level}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">{lang.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
