export const personalInfo = {
  name: "Josue Chilel",
  title: "Systems Engineering Student & Junior Full-Stack Developer",
  availability: "Disponible para oportunidades Junior & Prácticas",
  shortBio:
    "Desarrollo aplicaciones web Full Stack escalables utilizando React, FastAPI y PostgreSQL. Me enfoco en crear arquitecturas limpias, rendimiento óptimo y experiencias de usuario intuitivas.",

  detailedBio:
    "Desarrollo aplicaciones web Full Stack escalables utilizando React, FastAPI y PostgreSQL. Como estudiante avanzado de Ingeniería en Ciencias y Sistemas en la USAC, me enfoco en crear arquitecturas limpias, rendimiento óptimo y experiencias de usuario intuitivas, respaldadas por contenedores Docker, bases sólidas en C++ y flujos CI/CD con GitHub Actions.",
  contributions: [
    "Desarrollo de aplicaciones web Full Stack escalables.",
    "Diseño de bases de datos relacionales y APIs asíncronas seguras.",
    "Resolución de problemas mediante código modular y documentado.",
  ],
  location: "Ciudad de Guatemala • Remoto/Presencial",
  email: "josue.ch997@gmail.com",
  github: "https://github.com/JosueCh97",
  linkedin: "https://www.linkedin.com/in/josue-chilel-716644332/",
  cvUrl: "https://canva.link/3vkn35k04op8260",
  avatarUrl:
    "https://media.licdn.com/dms/image/v2/D4D03AQHiWjD3pPj5ng/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1728655640507?e=1795651200&v=beta&t=Vk9i8O4h3ArjspEO6nlKIBp6PdDcbZv4tRP4cDO9JG8",
  badges: [
    {
      label: "Formación Académica",
      value: "USAC Systems Engineering",
      detail: "Ciencias y Sistemas",
    },
    {
      label: "Especialidad Práctica",
      value: "Proyectos Full-Stack",
      detail: "React • FastAPI • PostgreSQL",
    },
    {
      label: "Fundamentos Técnicos",
      value: "Sistemas & Cloud",
      detail: "C++ • Docker • Linux",
    },
  ],
  education: [
    {
      degree: "Ingeniería en Ciencias y Sistemas",
      institution: "Universidad de San Carlos de Guatemala (USAC)",
      period: "En curso",
      focus: "Arquitectura de Software, Estructuras de Datos y Sistemas Distribuidos",
    },
  ],
  languages: [
    {
      label: "🇪🇸 Español (Nativo)",
      flag: "🇪🇸",
      name: "Español",
      level: "Nativo",
      detail: "Comunicación profesional, redacción técnica y documentación de arquitectura.",
    },
    {
      label: "🇺🇸 Inglés (B1-B2: Lectura técnica fluida)",
      flag: "🇺🇸",
      name: "Inglés",
      level: "B1-B2",
      detail: "Lectura técnica fluida y consumo continuo de documentación e ingeniería en inglés.",
    },
  ],
  learning: [
    "Arquitecturas Cloud (AWS)",
    "CI/CD avanzado",
  ],
};

export const skills = {
  softSkills: [
    {
      name: "Resolución de problemas",
      summary: "Diagnóstico estructurado de cuellos de botella y diseño de soluciones eficientes.",
    },
    {
      name: "Pensamiento analítico",
      summary: "Descomposición de requerimientos complejos en módulos mantenibles y escalables.",
    },
    {
      name: "Trabajo en equipo",
      summary: "Colaboración efectiva en entornos ágiles, comunicación clara y revisión de código.",
    },
    {
      name: "Adaptabilidad",
      summary: "Aprendizaje autónomo y rápida adopción de nuevos frameworks y arquitecturas.",
    },
  ],
  languages: [
    "🇪🇸 Español (Nativo)",
    "🇺🇸 Inglés (B1-B2: Lectura técnica fluida)",
  ],
  hardSkills: [
    {
      category: "Frontend",
      description: "Interfaces reactivas, accesibles y sistemas de diseño modernos.",
      items: [
        { name: "React", tag: "UI & Hooks" },
        { name: "Tailwind CSS", tag: "Design System" },
        { name: "JavaScript (ES6+)", tag: "Core Web" },
        { name: "HTML5 & CSS3", tag: "Semántica & Layout" },
      ],
    },
    {
      category: "Backend",
      description: "Diseño de APIs RESTful asíncronas, lógica de negocio y alto rendimiento.",
      items: [
        { name: "FastAPI", tag: "Python Async" },
        { name: "Node.js", tag: "Runtime JS" },
        { name: "Python", tag: "Backend & Scripts" },
        { name: "C++", tag: "Sistemas & Algoritmos" },
      ],
    },
    {
      category: "Bases de Datos",
      description: "Modelado relacional, integridad transaccional y consultas optimizadas.",
      items: [
        { name: "PostgreSQL", tag: "Relacional" },
        { name: "SQL Avanzado", tag: "Consultas & Índices" },
        { name: "Modelado ER", tag: "Normalización" },
        { name: "ORM / SQLAlchemy", tag: "Persistencia" },
      ],
    },
    {
      category: "Herramientas",
      description: "Entornos reproducibles, control de versiones y automatización CI/CD.",
      items: [
        { name: "Docker", tag: "Contenedores" },
        { name: "Git & GitHub", tag: "Gitflow & CI/CD" },
        { name: "Linux / Bash", tag: "Entorno Servidor" },
        { name: "Vite", tag: "Build Tooling" },
      ],
    },
  ],
  learning: [
    "Arquitecturas Cloud (AWS)",
    "CI/CD avanzado",
  ],
};

export const projects = [
  {
    id: "proj-1",
    title: "EduConnect - Plataforma de Tutorías Full Stack",
    subtitle: "Plataforma Académica & Trazabilidad E2E",
    description:
      "Sistema integral para la gestión de tutorías universitarias, coordinación de sesiones y evaluación bidireccional del rendimiento académico.",
    problem:
      "Necesidad de trazabilidad en tutorías, gestión de sesiones y evaluación del rendimiento académico de estudiantes.",
    solution:
      "Implementación de flujos backend seguros en FastAPI, diseño de esquemas en PostgreSQL y conexión con interfaces interactivas en React. Desarrollo íntegro de la HU-038 para calificación bidireccional y actualización reactiva de estados.",
    results:
      "Despliegue de un sistema integral validado mediante pruebas E2E, mejorando la transparencia y automatizando historiales académicos.",
    tags: ["React", "FastAPI", "PostgreSQL", "Docker"],
    repoUrl: "https://github.com/example/cpp-data-engine",
    demoUrl: "https://example.com/demo-engine",
    imageUrl:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=900",
    featured: true,
    metrics: "HU-038 Completa • Validado E2E",
  },
  {
    id: "proj-2",
    title: "Cloud Analytics Platform",
    subtitle: "Dashboard Full-Stack & Telemetría en Tiempo Real",
    description:
      "Plataforma web para visualización de métricas operativas con backend asíncrono en FastAPI, persistencia en PostgreSQL y panel interactivo en React.",
    problem:
      "Dispersión de métricas operativas y lentitud en consultas manuales de reportes.",
    solution:
      "Arquitectura Full-Stack con agregación asíncrona en FastAPI, consultas indexadas en PostgreSQL y UI reactiva en React.",
    results:
      "Centralización de indicadores clave en tiempo real y reducción en tiempos de respuesta.",
    tags: ["React", "FastAPI", "Tailwind CSS", "PostgreSQL"],
    repoUrl: "https://github.com/example/cloud-analytics",
    demoUrl: "https://example.com/cloud-analytics",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=900",
    featured: true,
    metrics: "API Asíncrona REST • UI Modular",
  },
  {
    id: "proj-3",
    title: "Microservices API Gateway",
    subtitle: "Seguridad, Enrutamiento & Control de Tráfico",
    description:
      "Gateway ligero de servicios con autenticación basada en JWT, limitación de tasa de peticiones y despliegue reproducible con Docker.",
    problem:
      "Exposición directa de microservicios sin control unificado de sesiones ni límite de peticiones.",
    solution:
      "Implementación de middleware de validación JWT, rate-limiting y orquestación mediante Docker Compose.",
    results:
      "Estandarización de seguridad en los endpoints y despliegues reproducibles en entornos locales y CI/CD.",
    tags: ["FastAPI", "Docker", "Python", "Git"],
    repoUrl: "https://github.com/example/api-gateway",
    demoUrl: "https://example.com/api-gateway",
    imageUrl:
      "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=900",
    featured: false,
    metrics: "Autenticación JWT • Reverse Proxy",
  },
  {
    id: "proj-4",
    title: "Interactive Portfolio Architecture",
    subtitle: "Ingeniería Frontend & Diseño Corporativo Minimalista",
    description:
      "Aplicación web interactiva con motor de partículas en HTML5 Canvas, transiciones multicapa sin recarga y arquitectura en Tailwind CSS v4.",
    problem:
      "Portafolios estáticos tradicionales que no evidencian habilidades reales de ingeniería UI/UX ni rendimiento.",
    solution:
      "Motor personalizado en HTML5 Canvas a 60 FPS con detección colisional DOM y arquitectura responsiva en React 19 y Tailwind v4.",
    results:
      "Carga instantánea, 0 errores de linter y experiencia de usuario fluida con soporte accesible WCAG 2.2.",
    tags: ["React", "Tailwind CSS", "Vite"],
    repoUrl: "https://github.com/example/portfolio",
    demoUrl: "https://example.com/portfolio",
    imageUrl:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=900",
    featured: true,
    metrics: "60 FPS Canvas • Flat-Glass UI",
  },
];
