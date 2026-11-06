export const personalInfo = {
  name: "Josue Chilel",
  title: "Systems Engineering Student & Junior Full-Stack Developer",
  availability: "Disponible para oportunidades Junior & Prácticas",
  shortBio:
  "Estudiante avanzado de Ingeniería en Ciencias y Sistemas (USAC) y desarrollador Full-Stack Junior. Especializado en APIs asíncronas con FastAPI, interfaces dinámicas en React y despliegues reproducibles con Docker.",

detailedBio:
  "Estudiante de Ingeniería en Ciencias y Sistemas en la Universidad de San Carlos de Guatemala (USAC) con enfoque en desarrollo web full-stack y modelado de software. Construyo aplicaciones combinando arquitecturas backend eficientes en Python (FastAPI) y bases de datos relacionales (PostgreSQL) con interfaces web reactivas en React y Tailwind CSS. Cuento con bases sólidas en C++, contenedores Docker y flujos CI/CD con GitHub Actions, orientado a escribir código mantenible, modular y documentado.",
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
};

export const skills = [
  {
    category: "Frontend",
    description: "Interfaces reactivas, accesibles y sistemas de diseño modernos.",
    items: [
      { name: "React", level: "Avanzado", percentage: 90 },
      { name: "Tailwind CSS", level: "Avanzado", percentage: 90 },
      { name: "JavaScript / ES6+", level: "Avanzado", percentage: 85 },
      { name: "HTML5 / CSS3", level: "Avanzado", percentage: 92 },
    ],
  },
  {
    category: "Backend & Sistemas",
    description: "Diseño de APIs RESTful asíncronas, lógica de negocio y rendimiento.",
    items: [
      { name: "FastAPI", level: "Avanzado", percentage: 85 },
      { name: "Python", level: "Avanzado", percentage: 88 },
      { name: "C++", level: "Intermedio", percentage: 75 },
      { name: "PostgreSQL", level: "Intermedio", percentage: 78 },
    ],
  },
  {
    category: "Herramientas & DevOps",
    description: "Entornos reproducibles, control de versiones y flujo de despliegue.",
    items: [
      { name: "Docker", level: "Intermedio", percentage: 76 },
      { name: "Git & GitHub", level: "Avanzado", percentage: 88 },
      { name: "Vite", level: "Avanzado", percentage: 85 },
      { name: "Linux / Bash", level: "Intermedio", percentage: 78 },
    ],
  },
  {
    category: "Habilidades Blandas",
    description: "Competencias interpersonales, liderazgo técnico y metodologías ágiles.",
    items: [
      { name: "Comunicación Efectiva", level: "Avanzado", percentage: 80 },
      { name: "Trabajo en Equipo", level: "Avanzado", percentage: 75 },
      { name: "Resolución de Problemas", level: "Avanzado", percentage: 90 },
      { name: "Pensamiento Crítico & Adaptabilidad", level: "Avanzado", percentage: 80 },
    ],
  },
];

export const projects = [
  {
    id: "proj-1",
    title: "High-Performance Data Engine",
    subtitle: "Procesamiento Distribuido & Bindings Nativos",
    description:
      "Motor de procesamiento de datos desarrollado en C++ con bindings de Python y contenedorización completa en Docker para ejecución de pipelines analíticos de baja latencia.",
    tags: ["C++", "Docker", "Python", "Linux"],
    repoUrl: "https://github.com/example/cpp-data-engine",
    demoUrl: "https://example.com/demo-engine",
    imageUrl:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=900",
    featured: true,
    metrics: "Pipelines en C++17 • Contenedores ligeros",
  },
  {
    id: "proj-2",
    title: "Cloud Analytics Platform",
    subtitle: "Dashboard Full-Stack & Telemetría en Tiempo Real",
    description:
      "Plataforma web para visualización de métricas operativas con backend asíncrono en FastAPI, persistencia en PostgreSQL y panel interactivo construido con React y Tailwind CSS.",
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
      "Gateway ligero de servicios con autenticación basada en JWT, limitación de tasa de peticiones (rate limiting) y despliegue reproducible mediante Docker Compose y flujos CI/CD.",
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
      "Aplicación web interactiva con motor de partículas en HTML5 Canvas, transiciones multicapa sin recarga y arquitectura de componentes estilizados con Tailwind CSS v4.",
    tags: ["React", "Tailwind CSS", "Vite"],
    repoUrl: "https://github.com/example/portfolio",
    demoUrl: "https://example.com/portfolio",
    imageUrl:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=900",
    featured: true,
    metrics: "60 FPS Canvas • Flat-Glass UI",
  },
];
