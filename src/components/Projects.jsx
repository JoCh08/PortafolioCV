import React, { useState, useMemo, useEffect, useRef } from 'react';
import {
  ExternalLink,
  Star,
  Code,
  Layers,
  Cpu,
  Database,
  Terminal,
  Box,
  GitBranch,
  Sparkles,
  Code2,
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState('Todos');
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
      { threshold: 0.08 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const allTags = useMemo(() => {
    const tagsSet = new Set();
    projects.forEach((proj) => {
      proj.tags.forEach((tag) => tagsSet.add(tag));
    });
    return ['Todos', ...Array.from(tagsSet)];
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedTag === 'Todos') return projects;
    return projects.filter((proj) => proj.tags.includes(selectedTag));
  }, [selectedTag]);

  const getTagIcon = (tag) => {
    const normalized = tag.toLowerCase();
    if (normalized.includes('react') || normalized.includes('vite')) {
      return <Sparkles className="w-3 h-3 text-teal-400 shrink-0" />;
    }
    if (normalized.includes('python') || normalized.includes('fastapi')) {
      return <Code2 className="w-3 h-3 text-teal-400 shrink-0" />;
    }
    if (normalized.includes('c++')) {
      return <Cpu className="w-3 h-3 text-teal-400 shrink-0" />;
    }
    if (normalized.includes('postgres') || normalized.includes('sql')) {
      return <Database className="w-3 h-3 text-teal-400 shrink-0" />;
    }
    if (normalized.includes('docker')) {
      return <Box className="w-3 h-3 text-teal-400 shrink-0" />;
    }
    if (normalized.includes('git')) {
      return <GitBranch className="w-3 h-3 text-teal-400 shrink-0" />;
    }
    if (normalized.includes('linux')) {
      return <Terminal className="w-3 h-3 text-teal-400 shrink-0" />;
    }
    return <Layers className="w-3 h-3 text-teal-400 shrink-0" />;
  };

  return (
    <section
      id="proyectos"
      ref={sectionRef}
      className="snap-start min-h-screen w-full flex flex-col justify-center py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      {/* Legacy anchor compatibility */}
      <div id="projects" className="sr-only" aria-hidden="true" />

      <div className="w-full">
        {/* Section Header (Stagger 1) */}
        <div
          className={`space-y-3 mb-8 transition-all duration-500 delay-100 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full backdrop-blur-md bg-slate-900/70 border border-slate-800 text-xs font-medium uppercase tracking-wider text-teal-400">
            <Code className="w-3.5 h-3.5" />
            <span>Casos de Estudio & Ingeniería</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-100">
            Proyectos Orientados a Resultados
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Soluciones Full-Stack diseñadas para resolver problemas reales de trazabilidad,
            rendimiento y seguridad mediante arquitecturas limpias.
          </p>
        </div>

        {/* Filter Bar (Stagger 2) */}
        <div
          className={`flex overflow-x-auto whitespace-nowrap scrollbar-hide gap-3 py-2 mb-10 transition-all duration-500 delay-150 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {allTags.map((tag) => {
            const isActive = selectedTag === tag;
            return (
              <button
                key={tag}
                type="button"
                onClick={() => setSelectedTag(tag)}
                className={`inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-medium border transition-all duration-300 ease-in-out cursor-pointer shrink-0 ${
                  isActive
                    ? 'bg-teal-400/20 border-teal-400 text-teal-200 font-semibold drop-shadow-[0_0_15px_rgba(20,184,166,0.3)]'
                    : 'backdrop-blur-md bg-slate-900/60 border-slate-800 text-slate-300 hover:border-teal-400 hover:text-teal-300 hover:bg-teal-900/20'
                }`}
              >
                {tag !== 'Todos' && getTagIcon(tag)}
                <span>{tag}</span>
              </button>
            );
          })}
        </div>

        {/* 2-Column Project Grid (All 4 projects visible with natural vertical scrolling) */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transition-all duration-500 delay-200 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className="interactive-card group relative backdrop-blur-md bg-slate-900/60 hover:bg-slate-900/80 border border-slate-800 hover:border-teal-400/50 rounded-3xl p-6 sm:p-8 transition-all duration-500 ease-in-out flex flex-col justify-between hover:shadow-2xl hover:shadow-slate-950/80"
            >
              {/* Subtle top highlight line on hover */}
              <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-teal-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="space-y-5">
                {/* Reference Image / Mockup Container */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 group-hover:border-teal-400/40 shadow-lg transition-all duration-500">
                  <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950 border-b border-slate-800/90">
                    <div className="flex items-center space-x-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                      <span className="w-2.5 h-2.5 rounded-full bg-teal-400/60" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 truncate max-w-[180px]">
                      0{index + 1} // {project.id}
                    </span>
                    {project.featured ? (
                      <span className="inline-flex items-center space-x-1 text-[10px] font-medium text-teal-400">
                        <Star className="w-3 h-3 fill-teal-400 text-teal-400" />
                        <span>Destacado</span>
                      </span>
                    ) : (
                      <span className="text-[10px] font-medium text-slate-400">
                        {project.tags[0]}
                      </span>
                    )}
                  </div>

                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
                    {project.imageUrl ? (
                      <img
                        src={project.imageUrl}
                        alt={`Vista previa de ${project.title}`}
                        loading="lazy"
                        className="w-full h-full object-cover object-center grayscale-[12%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-500 text-xs">
                        Vista previa del sistema
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                  </div>
                </div>

                {/* Project Title & Clean Left-Bordered Case Study (Zero Box-Inside-a-Box Fatigue) */}
                <div className="space-y-3">
                  <span className="text-xs font-medium uppercase tracking-wider text-teal-400 block">
                    {project.subtitle || 'Arquitectura de Software'}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-100 group-hover:text-teal-300 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {project.problem && project.solution && project.results ? (
                    <div className="pt-2 border-l-2 border-teal-400/40 pl-3.5 space-y-2.5 text-sm leading-relaxed">
                      <div>
                        <span className="text-slate-200 font-semibold">Problema: </span>
                        <span className="text-slate-400">{project.problem}</span>
                      </div>

                      <div>
                        <span className="text-slate-200 font-semibold">Solución: </span>
                        <span className="text-slate-400">{project.solution}</span>
                      </div>

                      <div>
                        <span className="text-teal-300 font-semibold">Resultado: </span>
                        <span className="text-slate-300">{project.results}</span>
                      </div>
                    </div>
                  ) : (
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Bottom Section: Technology Badges with Icons & Action Links */}
              <div className="mt-6 pt-5 border-t border-slate-800 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-slate-950/80 text-slate-200 border border-slate-800 group-hover:border-slate-700 transition-colors"
                    >
                      {getTagIcon(t)}
                      <span>{t}</span>
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center space-x-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl border border-slate-700 hover:border-teal-400 hover:bg-teal-900/20 text-xs font-semibold text-teal-300 transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(20,184,166,0.3)]"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Demo en Vivo</span>
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center p-2.5 rounded-xl backdrop-blur-md bg-slate-950/80 border border-slate-700 hover:border-teal-400 hover:bg-teal-900/20 text-slate-300 hover:text-teal-300 transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(20,184,166,0.3)]"
                        aria-label={`Repositorio GitHub de ${project.title}`}
                        title="Ver en GitHub"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  {project.metrics && (
                    <span className="hidden sm:inline-flex items-center text-[11px] text-slate-400 font-medium">
                      {project.metrics}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
