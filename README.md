# Portafolio Profesional — Josue Chilel

Aplicación web interactiva de portafolio profesional desarrollada con **React 19**, **Vite 8** y **Tailwind CSS v4**. Diseñada bajo una arquitectura corporativa minimalista, accesible (WCAG 2.2) y optimizada para dispositivos móviles (*Mobile-First*).

## Características Principales

- **Atmósfera Visual & Motor de Partículas (HTML5 Canvas):** Fondo radial oscuro (`slate-950`) con partículas interactivas a 60 FPS que reaccionan al cursor y cambian dinámicamente a tonos púrpura/fucsia (`#a855f7` / `#ec4899`) al atravesar tarjetas `.interactive-card`.
- **Navegación Multicapa en el Hero:** Panel deslizante *"Sobre mí"* con soporte de teclado (`Escape`), aislamiento de foco mediante atributo booleano `inert` y micro-interacciones de resalte en recursos clave (*Ver CV*, *GitHub*, *LinkedIn*).
- **Experiencia Mobile-First:** Jerarquía limpia en pantallas pequeñas (`< md`) priorizando las acciones **"Sobre mí"** y **"Ver CV"**, con tipografía fluida (`text-3xl sm:text-5xl lg:text-7xl`).
- **CSS Smooth Scrolling + Scroll Snap Nativo:** Navegación vertical fluida mediante `scroll-behavior: smooth` y `scroll-snap-type: y proximity`, con secciones a pantalla completa (`min-h-screen snap-start`).
- **Carrusel de Proyectos con Filtrado Dinámico:** Filtrado por tecnologías y desplazamiento horizontal con `snap-x snap-mandatory`.

---

## Requisitos y Comandos de Desarrollo

Este proyecto utiliza **pnpm** como gestor de paquetes y **oxlint** para verificación estática ultrarrápida.

```bash
# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo (HMR)
pnpm run dev

# Ejecutar linter (0 warnings, 0 errors)
pnpm run lint

# Compilar para producción en /dist
pnpm run build

# Previsualizar build de producción localmente
pnpm run preview
```

---

## Flujo de Trabajo (Gitflow) y Despliegue en GitHub Pages

El despliegue hacia **GitHub Pages** (`base: '/PortafolioCV/'` en `vite.config.js`) está automatizado mediante **GitHub Actions** (`.github/workflows/deploy.yml`) al hacer push a la rama `main`:

```bash
# 1. Confirmar cambios en la rama de desarrollo (develop)
git add .
git commit -m "feat: descripción del cambio"
git push origin develop

# 2. Fusionar en main para desplegar a producción
git checkout main
git merge develop
git push origin main

# 3. Regresar a develop
git checkout develop
```
