import React, { useEffect, useRef, useState } from 'react';
import {
  Cpu,
  Terminal,
  Layers,
  Users,
  Database,
  Globe,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { skills, personalInfo } from '../data/portfolioData';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
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
      { threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Frontend':
        return <Layers className="w-4 h-4 text-teal-400" />;
      case 'Backend':
        return <Cpu className="w-4 h-4 text-teal-400" />;
      case 'Bases de Datos':
        return <Database className="w-4 h-4 text-teal-400" />;
      default:
        return <Terminal className="w-4 h-4 text-teal-400" />;
    }
  };

  const hardSkillsList = Array.isArray(skills) ? skills : skills.hardSkills || [];
  const softSkillsList = Array.isArray(skills) ? [] : skills.softSkills || [];
  const learningList = skills.learning || personalInfo.learning || [];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="snap-start min-h-screen w-full flex flex-col justify-center py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full space-y-10">
        {/* Section Header (Stagger 1) */}
        <div
          className={`text-center space-y-3 transition-all duration-500 delay-100 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full backdrop-blur-md bg-slate-800/50 border border-slate-700/70 text-xs font-medium uppercase tracking-wider text-teal-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>Stack Técnico, Competencias & Idiomas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-100">
            Habilidades & Competencias
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Dominio de tecnologías Full-Stack para arquitectura de software moderna, respaldado por
            competencias analíticas e inglés técnico.
          </p>
        </div>

        {/* ROW 1 (Top Priority for Recruiters): Tecnologías (Hard Skills) Grid (Stagger 2) */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 transition-all duration-500 delay-150 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {hardSkillsList.map((group) => (
            <div
              key={group.category}
              className="interactive-card backdrop-blur-md bg-slate-900/50 hover:bg-slate-900/70 border border-slate-800 hover:border-teal-400/40 rounded-3xl p-6 transition-all duration-300 ease-in-out shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="mb-5 pb-3.5 border-b border-slate-800 space-y-1.5">
                  <div className="flex items-center space-x-2.5">
                    <div className="p-2 rounded-xl bg-teal-400/10 border border-teal-400/20">
                      {getCategoryIcon(group.category)}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold tracking-tight text-slate-100">
                      {group.category}
                    </h3>
                  </div>
                  {group.description && (
                    <p className="text-xs text-slate-400 leading-relaxed">{group.description}</p>
                  )}
                </div>

                <div className="space-y-2.5">
                  {group.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/90 hover:border-teal-400/30 transition-colors duration-200"
                    >
                      <div className="flex items-center space-x-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-teal-400 shrink-0" />
                        <span className="text-xs sm:text-sm font-semibold text-slate-200">
                          {skill.name}
                        </span>
                      </div>
                      {skill.tag && (
                        <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-900 text-teal-300 border border-slate-800">
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

        {/* ROW 2: Competencias Profesionales (Soft Skills) + Idiomas + Actualmente Aprendiendo (Stagger 3) */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch transition-all duration-500 delay-200 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Soft Skills Panel (7 cols) */}
          <div className="interactive-card lg:col-span-7 backdrop-blur-md bg-slate-900/50 border border-slate-800 hover:border-teal-400/40 rounded-3xl p-6 sm:p-7 flex flex-col justify-between space-y-5 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 pb-3.5 border-b border-slate-800">
                <div className="p-2.5 rounded-xl bg-teal-400/10 border border-teal-400/20">
                  <Users className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-100">
                    Competencias Profesionales
                  </h3>
                  <p className="text-xs text-slate-400">
                    Enfoque analítico y colaborativo en ingeniería de software
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {softSkillsList.map((item) => {
                  const name = typeof item === 'string' ? item : item.name;
                  const summary = typeof item === 'string' ? null : item.summary;
                  return (
                    <div
                      key={name}
                      className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800/90 hover:border-teal-400/30 transition-all space-y-1"
                    >
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                        <h4 className="text-sm font-semibold text-slate-100">{name}</h4>
                      </div>
                      {summary && (
                        <p className="text-xs text-slate-400 leading-relaxed pl-6">{summary}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Actualmente aprendiendo */}
            {learningList.length > 0 && (
              <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
                <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-teal-400">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Actualmente aprendiendo:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {learningList.map((topic) => (
                    <span
                      key={topic}
                      className="text-xs font-medium px-3 py-1 rounded-xl bg-teal-400/10 border border-teal-400/30 text-teal-300"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Dedicated Languages Visual Panel (5 cols) */}
          <div className="interactive-card lg:col-span-5 backdrop-blur-md bg-slate-900/50 border border-slate-800 hover:border-teal-400/40 rounded-3xl p-6 sm:p-7 flex flex-col justify-between space-y-5 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 pb-3.5 border-b border-slate-800">
                <div className="p-2.5 rounded-xl bg-teal-400/10 border border-teal-400/20">
                  <Globe className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-100">
                    Idiomas
                  </h3>
                  <p className="text-xs text-slate-400">
                    Comunicación efectiva y lectura técnica internacional
                  </p>
                </div>
              </div>

              <div className="space-y-3.5">
                {personalInfo.languages?.map((lang) => (
                  <div
                    key={lang.name || lang.label}
                    className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/90 hover:border-teal-400/30 transition-all space-y-1.5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-bold text-slate-100">
                        {lang.label || `${lang.flag} ${lang.name}`}
                      </span>
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-lg bg-teal-400/15 text-teal-300 border border-teal-400/30 shrink-0">
                        {lang.level}
                      </span>
                    </div>
                    {lang.detail && (
                      <p className="text-xs text-slate-400 leading-relaxed">{lang.detail}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
