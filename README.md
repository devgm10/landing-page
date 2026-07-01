# Landing Page / Portfolio — Gianmarco Linares Becerra

Portafolio web personal de **Gianmarco Linares Becerra**, Full Stack Developer & DevOps Engineer. Es una SPA construida con Vue 3 que presenta experiencia profesional, proyectos, stack tecnológico y datos de contacto, con soporte multilenguaje (ES/EN) y modo claro/oscuro.

## Tech Stack

![Vue](https://img.shields.io/badge/Vue-3.5-4FC08D?logo=vue.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Vue Router](https://img.shields.io/badge/Vue%20Router-5-4FC08D?logo=vuedotjs&logoColor=white)
![Vue I18n](https://img.shields.io/badge/Vue%20I18n-11-4FC08D?logo=vuedotjs&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-package%20manager-F69220?logo=pnpm&logoColor=white)

| Categoría | Tecnología |
|---|---|
| Framework | [Vue 3](https://vuejs.org/) (Composition API, `<script setup>`) |
| Build tool | [Vite 8](https://vite.dev/) con [@vitejs/plugin-vue](https://www.npmjs.com/package/@vitejs/plugin-vue) |
| Estilos | [Tailwind CSS 4](https://tailwindcss.com/) (vía `@tailwindcss/vite`) |
| Enrutamiento | [Vue Router](https://router.vuejs.org/) |
| Internacionalización | [Vue I18n](https://vue-i18n.intlify.dev/) |
| Iconos | [@lucide/vue](https://lucide.dev/), [devicon](https://devicon.dev/) |
| Tipografías | [@fontsource/dm-mono](https://fontsource.org/), [@fontsource/swanky-and-moo-moo](https://fontsource.org/) |
| Otros | [slot-text](https://www.npmjs.com/package/slot-text) (animaciones de texto) |
| Formateo | [Prettier](https://prettier.io/) |

## Características

- **Secciones de landing**: Hero, Sobre Mí, Stack Tecnológico, Proyectos y Experiencia Profesional, cada una como componente independiente en `src/views/landing/sections`.
- **Internacionalización (ES/EN)**: traducciones gestionadas con `vue-i18n`, persistencia del idioma elegido en `localStorage` y un script (`check:i18n`) que valida la paridad de claves entre `es.js` y `en.js`.
- **Modo claro / oscuro**: toggle de tema con persistencia en `localStorage` y aplicación mediante la clase `dark` en `<html>`.
- **Topbar responsive**: navegación adaptada a desktop y mobile (`TopbarDesktop.vue` / `TopbarMobile.vue`).
- **Animaciones al hacer scroll**: composable `useScrollObserver` basado en `IntersectionObserver`.
- **Formulario de contacto**: incluido en el footer (`Footer.vue`); actualmente captura email y mensaje en el cliente (sin integración de envío configurada).
- **404 personalizado**: vista `NotFound.vue` para rutas no existentes.

> **Nota**: existe un conjunto de archivos en `src/components/contact`, `src/composables/contact`, `src/services/contact` y `src/store/contact` que corresponden a un módulo de contacto más completo, pero actualmente están vacíos (en preparación / sin implementar).

## Requisitos previos

- [Node.js](https://nodejs.org/) 20 LTS o superior (requerido por Vite 8)
- [pnpm](https://pnpm.io/) (el proyecto incluye `pnpm-lock.yaml`; también puedes usar npm o yarn generando tu propio lockfile)

## Instalación

```bash
# Clonar el repositorio
git clone <url-del-repositorio>
cd landing-page

# Instalar dependencias
pnpm install
```

## Variables de entorno

El proyecto incluye un archivo `.env` en la raíz, pero **actualmente está vacío y no se usa ninguna variable de entorno en el código** (no hay referencias a `import.meta.env` en `src/`). Si en el futuro se añaden variables (por ejemplo, para el envío del formulario de contacto), deberán documentarse aquí.

## Scripts disponibles

| Script | Comando | Descripción |
|---|---|---|
| `dev` | `pnpm dev` | Inicia el servidor de desarrollo de Vite con hot-reload. |
| `build` | `pnpm build` | Genera el build de producción en `dist/`. |
| `preview` | `pnpm preview` | Sirve localmente el build de producción para previsualizarlo. |
| `check:i18n` | `pnpm check:i18n` | Valida que las claves de traducción coincidan entre `es.js` y `en.js`. |

## Estructura del proyecto

```
landing-page/
├── public/                  # Assets estáticos servidos tal cual (favicon, iconos sociales)
├── scripts/
│   └── check-i18n-parity.js # Script de validación de paridad de claves i18n
├── src/
│   ├── assets/               # Imágenes (hero, perfil)
│   ├── components/
│   │   ├── contact/           # Componentes de contacto (placeholder, sin implementar)
│   │   └── ui/                 # Componentes UI reutilizables: footer, topbar, theme, language, social, loading
│   ├── composables/           # Lógica reutilizable (theme, language, scroll observer, contact)
│   ├── constants/              # Constantes (estados y campos del formulario de contacto)
│   ├── i18n/
│   │   ├── locales/             # Diccionarios es.js / en.js
│   │   └── index.js             # Configuración de vue-i18n
│   ├── layouts/
│   │   └── MainLayout.vue       # Layout principal (topbar + router-view + footer)
│   ├── router/                 # Configuración de Vue Router
│   ├── services/                # Servicios externos (contact, sin implementar)
│   ├── store/                   # Estado compartido (contact, sin implementar)
│   ├── utils/                   # Utilidades (theme, respuestas de contacto)
│   ├── validators/              # Validadores (contact, sin implementar)
│   ├── views/
│   │   ├── NotFound.vue          # Vista 404
│   │   └── landing/
│   │       ├── LandingView.vue    # Composición de todas las secciones
│   │       └── sections/           # Hero, About, Stack, Projects, Experience
│   ├── App.vue
│   ├── main.js                  # Punto de entrada de la aplicación
│   └── style.css                # Estilos globales y theming con Tailwind 4
├── index.html
├── vite.config.js               # Configuración de Vite (alias `@` → `src/`, plugins Vue + Tailwind)
└── package.json
```

## Despliegue

No se detectó configuración de despliegue específica en el repositorio (sin `vercel.json`, `netlify.toml` ni workflows de CI/CD en `.github/`). Al tratarse de una SPA generada con Vite, el flujo estándar es:

```bash
pnpm build
```

Esto genera la carpeta `dist/` con los archivos estáticos listos para servir en cualquier hosting compatible con SPA (Vercel, Netlify, GitHub Pages, Hostman, etc.), configurando el fallback de rutas hacia `index.html` para que funcione correctamente con Vue Router.
