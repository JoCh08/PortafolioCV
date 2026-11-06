import React, { useEffect, useRef, useState } from 'react';
import { Cpu, Terminal, Layers, Users } from 'lucide-react';
import { skills } from '../data/portfolioData';

const WIDTH_CLASS_MAP = {
  94: 'w-[94%]',
  92: 'w-[92%]',
  90: 'w-[90%]',
  88: 'w-[88%]',
  85: 'w-[85%]',
  78: 'w-[78%]',
  76: 'w-[76%]',
  75: 'w-[75%]',
};

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
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Frontend':
        return <Layers className="w-5 h-5 text-teal-400" />;
      case 'Backend & Sistemas':
      case 'Backend':
        return <Cpu className="w-5 h-5 text-teal-400" />;
      case 'Habilidades Blandas':
        return <Users className="w-5 h-5 text-teal-400" />;
      default:
        return <Terminal className="w-5 h-5 text-teal-400" />;
    }
  };

  const getSkillPercentage = (skill) => {
    if (typeof skill.percentage === 'number') return skill.percentage;
    if (skill.level === 'Avanzado') return 88;
    if (skill.level === 'Intermedio') return 75;
    return 80;
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={`py-24 max-w-[1440px] mx-auto px-6 lg:px-12 transition-all duration-700 ease-in-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Section Header */}
      <div className="text-center space-y-3 mb-14">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full backdrop-blur-md bg-slate-800/50 border border-slate-700/70 text-xs font-medium uppercase tracking-wider text-teal-400">
          <Cpu className="w-3.5 h-3.5" />
          <span>Capacidades Técnicas & Humanas</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-100">
          Habilidades & Competencias
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Dominio técnico en desarrollo de software complementado con habilidades blandas clave para
          entornos colaborativos de alto rendimiento.
        </p>
      </div>

      {/* Skills Categories Grid (4 columns on large screens, 2 on medium) */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {skills.map((group, groupIndex) => (
          <div
            key={group.category}
            className="backdrop-blur-md bg-slate-800/35 hover:bg-slate-800/55 border border-slate-700/70 hover:border-teal-400/40 rounded-3xl p-6 sm:p-7 transition-all duration-300 ease-in-out shadow-sm flex flex-col justify-between"
          >
            {/* Category Title */}
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

              {/* Animated Horizontal Progress Bars */}
              <div className="space-y-4">
                {group.items.map((skill, itemIndex) => {
                  const pct = getSkillPercentage(skill);
                  const widthClass = WIDTH_CLASS_MAP[pct] || 'w-[85%]';
                  const delayMs = (groupIndex * 100) + (itemIndex * 120);

                  return (
                    <div
                      key={skill.name}
                      className="p-3.5 rounded-2xl bg-slate-900/55 border border-slate-700/60 hover:border-slate-600 transition-colors duration-200 space-y-2"
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-slate-200">{skill.name}</span>
                        <span className="font-mono text-teal-400 font-semibold">{pct}%</span>
                      </div>
                      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          style={{ transitionDelay: `${delayMs}ms` }}
                          className={`h-full bg-teal-400 rounded-full transition-all duration-1000 ease-out ${
                            isVisible ? widthClass : 'w-0'
                          }`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
