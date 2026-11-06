import React, { useState, useEffect, useRef } from 'react';
import { Mail, Send, MessageSquare, CheckCircle, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`py-24 max-w-[1440px] mx-auto px-6 lg:px-12 transition-all duration-700 ease-in-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Section Header */}
      <div className="text-center space-y-3 mb-14">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full backdrop-blur-md bg-slate-800/50 border border-slate-700/70 text-xs font-medium uppercase tracking-wider text-teal-400">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Contacto Directo</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-100">
          ¿Hablamos sobre tu próximo proyecto?
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          Envíame un mensaje directo o conéctate conmigo a través de mis canales profesionales.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Contact Info & Social Shortcuts (5 cols) */}
        <div className="lg:col-span-5 space-y-6 backdrop-blur-md bg-slate-800/35 border border-slate-700/70 rounded-3xl p-6 sm:p-8">
          <h3 className="text-xl font-bold tracking-tight text-slate-100">Canales de Contacto</h3>
          <p className="text-slate-300/90 text-sm leading-relaxed">
            Disponible para oportunidades de desarrollo de software Junior, prácticas profesionales
            y proyectos Full-Stack.
          </p>

          <div className="space-y-3.5 pt-1">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center space-x-3 p-3.5 rounded-2xl bg-slate-900/55 border border-slate-700/70 hover:border-teal-400 text-slate-300 hover:text-teal-300 transition-all duration-300 group"
            >
              <div className="p-2 rounded-xl bg-teal-400/10 text-teal-400 group-hover:bg-teal-400/20">
                <Mail className="w-5 h-5" />
              </div>
              <div className="truncate">
                <p className="text-xs text-slate-400 font-medium">Correo electrónico</p>
                <p className="text-sm font-semibold truncate">{personalInfo.email}</p>
              </div>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-3.5 rounded-2xl bg-slate-900/55 border border-slate-700/70 hover:border-teal-400 text-slate-300 hover:text-teal-300 transition-all duration-300 group"
            >
              <div className="p-2 rounded-xl bg-teal-400/10 text-teal-400 group-hover:bg-teal-400/20">
                <GithubIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">GitHub</p>
                <p className="text-sm font-semibold">Repositorios & Código</p>
              </div>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-3.5 rounded-2xl bg-slate-900/55 border border-slate-700/70 hover:border-teal-400 text-slate-300 hover:text-teal-300 transition-all duration-300 group"
            >
              <div className="p-2 rounded-xl bg-teal-400/10 text-teal-400 group-hover:bg-teal-400/20">
                <LinkedinIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">LinkedIn</p>
                <p className="text-sm font-semibold">Red Profesional</p>
              </div>
            </a>

            <a
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="flex items-center justify-center space-x-2 p-3.5 rounded-2xl border border-slate-700 hover:border-teal-400 hover:bg-teal-900/20 text-teal-300 text-xs font-semibold transition-all duration-300 mt-2 hover:drop-shadow-[0_0_15px_rgba(20,184,166,0.3)]"
            >
              <FileText className="w-4 h-4 text-teal-400" />
              <span>Ver CV (PDF)</span>
            </a>
          </div>
        </div>

        {/* Contact Form (7 cols) */}
        <div className="lg:col-span-7 backdrop-blur-md bg-slate-800/35 border border-slate-700/70 rounded-3xl p-6 sm:p-8 relative">
          {submitted ? (
            <div className="py-12 flex flex-col items-center text-center space-y-4">
              <CheckCircle className="w-12 h-12 text-teal-400 animate-bounce" />
              <h4 className="text-xl font-bold text-slate-100">¡Mensaje enviado!</h4>
              <p className="text-slate-300 text-sm max-w-xs">
                Gracias por ponerte en contacto. Te responderé lo antes posible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre completo"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/75 border border-slate-700/80 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400/50 transition-all text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2"
                >
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@correo.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/75 border border-slate-700/80 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400/50 transition-all text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Escribe tu mensaje aquí..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/75 border border-slate-700/80 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400/50 transition-all text-sm resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-semibold text-sm border border-teal-300/30 transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(20,184,166,0.3)] flex items-center justify-center space-x-2 cursor-pointer hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Mensaje</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
