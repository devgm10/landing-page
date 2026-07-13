# Landing Page — Gianmarco Linares Becerra

> Portfolio profesional construido como un producto real: no solo una web, sino un sistema completo con pipeline de CI/CD, análisis de calidad, escaneo de seguridad, infraestructura como código y despliegue automatizado en AWS.

**Live:** [gmlinares.dev](https://gmlinares.dev)

<p align="left">
  <img alt="Vue" src="https://img.shields.io/badge/Vue-3-4FC08D?logo=vuedotjs&logoColor=white">
  <img alt="Vite" src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white">
  <img alt="Tailwind" src="https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white">
  <img alt="Docker" src="https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white">
  <img alt="AWS" src="https://img.shields.io/badge/AWS-EC2%20%7C%20Lambda-FF9900?logo=amazonwebservices&logoColor=white">
  <img alt="Terraform" src="https://img.shields.io/badge/Terraform-7B42BC?logo=terraform&logoColor=white">
</p>

---

## Tabla de contenidos

- [Por qué este proyecto](#por-qué-este-proyecto)
- [Arquitectura](#arquitectura)
- [Stack tecnológico](#stack-tecnológico)
- [Sistema de diseño](#sistema-de-diseño)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Puesta en marcha](#puesta-en-marcha)
- [Variables de entorno](#variables-de-entorno)
- [Scripts disponibles](#scripts-disponibles)
- [Pipeline CI/CD](#pipeline-cicd)
- [Infraestructura](#infraestructura)
- [Seguridad](#seguridad)
- [Observabilidad](#observabilidad)
- [Internacionalización](#internacionalización)
- [Roadmap](#roadmap)
- [Contacto](#contacto)

---

## Por qué este proyecto

Un portfolio podría resolverse con una plantilla y un `git push` a Vercel. Este no.

La decisión de fondo fue tratarlo como **un producto en producción**: cada capa que un sistema real necesita está presente y es funcional. El objetivo no era solo mostrar proyectos, sino que **el proyecto mismo fuera la evidencia** — que el código, la infraestructura y el pipeline hablaran por sí solos.

Lo que eso significa en la práctica:

- **Frontend** desacoplado, con sistema de diseño centralizado e i18n real.
- **Backend serverless** independiente para el formulario de contacto, con validación, rate limiting y protección anti-bot.
- **Infraestructura como código**, versionada y reproducible.
- **Pipeline** que valida, analiza calidad, escanea vulnerabilidades y despliega sin intervención manual.
- **Cero acceso SSH**: el despliegue ocurre a través de AWS SSM, con el puerto 22 cerrado.
- **Observabilidad** con métricas de host y contenedores.

---

## Arquitectura

El sistema se organiza en seis capas, cada una con una responsabilidad clara:

```
┌─────────────────────────────────────────────────────────────────┐
│  CÓDIGO Y CONTROL DE VERSIONES                                  │
│  GitHub → landing-page (app) · landing-page-infra (infra)       │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│  CI/CD                                                          │
│  GitHub Actions: Validate → SonarCloud → Snyk → Build → Deploy  │
│  Terraform Cloud: plan/apply remoto vía VCS workflow            │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│  REGISTRO DE ARTEFACTOS                                         │
│  Docker Hub — tags: latest + commit SHA (trazabilidad)          │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│  INFRAESTRUCTURA — AWS us-east-1                                │
│  EC2 (Ubuntu 22.04) · Security Group: solo 80/443               │
│  Acceso administrado exclusivamente vía AWS SSM (sin SSH)       │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│  APLICACIÓN                                                     │
│  Nginx (contenedor) → SPA estática                              │
│  AWS Lambda (microservicio de contacto) → Resend                │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│  OBSERVABILIDAD                                                 │
│  Node Exporter + cAdvisor → Prometheus → Grafana                │
│  Acceso vía SSM Port Forwarding (nunca expuesto a internet)     │
└─────────────────────────────────────────────────────────────────┘
```

### Decisiones de arquitectura

**El formulario de contacto vive en un microservicio aparte.**
El landing es estático y se sirve desde Nginx. El envío de correos es la única pieza con estado, así que se aisló en una función Lambda independiente ([`portfolio-notification-service`](https://github.com/devgm10/portfolio-notification-service)). Esto mantiene el frontend sin backend, permite escalar a cero cuando nadie escribe, y aísla el manejo de secretos.

**Despliegue sin SSH.**
El puerto 22 está cerrado. GitHub Actions asume un rol IAM vía OIDC (sin credenciales estáticas) y ejecuta el despliegue mediante `aws ssm send-command`. La superficie de ataque se reduce a cero por ese lado, y no hay llaves privadas que rotar.

**Tags por commit SHA.**
Cada imagen se publica con `latest` y con el SHA del commit. Un rollback es cambiar un tag, no reconstruir.

---

## Stack tecnológico

### Frontend

| Tecnología | Uso |
|---|---|
| **Vue 3** | Composition API, `<script setup>` |
| **Vite** | Build tool y dev server |
| **Tailwind CSS 4** | Utilidades + `@theme` para el sistema de variables |
| **Vue Router** | Navegación SPA |
| **Vue I18n** | Internacionalización (ES / EN) |
| **Lucide Icons** | Iconografía de interfaz |
| **Devicon** | Logos de tecnologías |
| **pnpm** | Gestor de paquetes |

### Backend (microservicio de contacto)

| Tecnología | Uso |
|---|---|
| **AWS Lambda** | Runtime Node.js 22, sin VPC |
| **API Gateway (REST)** | Endpoint `POST /contact` + preflight `OPTIONS` |
| **Serverless Framework** | Definición y despliegue del stack |
| **Zod** | Validación de esquema con modo `.strict()` |
| **Cloudflare Turnstile** | Verificación anti-bot server-side |
| **Resend** | Entrega transaccional de correo |

### Infraestructura y DevOps

| Tecnología | Uso |
|---|---|
| **Docker** | Build multi-stage, imagen final servida por Nginx |
| **Terraform** | Infraestructura como código (repo independiente) |
| **Terraform Cloud** | Estado remoto y VCS workflow |
| **GitHub Actions** | CI/CD completo |
| **AWS EC2** | Host de la aplicación |
| **AWS SSM** | Despliegue y acceso administrado |
| **Cloudflare** | DNS y CDN |
| **SonarCloud** | Análisis estático de calidad |
| **Snyk** | Escaneo de dependencias e imagen Docker |
| **Prometheus + Grafana** | Métricas y dashboards |

---

## Sistema de diseño

El aspecto del que más aprendí en este proyecto. **Toda la identidad visual se controla desde un único archivo**: `src/style.css`. Cambiar la paleta completa de la aplicación —claro y oscuro, todas las secciones, sombras, scrollbars incluidas— significa editar unas diez líneas.

Ningún componente contiene un color hardcodeado.

### Cómo funciona

```css
@theme {
    /* Rampa de marca: 5 pasos, de oscuro a claro */
    --color-brand-300: ...;   /* brilla sobre fondo oscuro */
    --color-brand-400: ...;
    --color-brand-500: ...;
    --color-brand-600: ...;   /* funciona sobre fondo claro */
    --color-brand-700: ...;

    /* Color del contenido que va ENCIMA de cada paso.
       No es derivable: sobre un tono oscuro va texto claro,
       sobre uno claro va texto oscuro. Sin esto, un ícono
       desaparecería en la mitad de las cards. */
    --color-on-brand-300: ...;
    /* ... */

    /* El acento. Se invierte automáticamente en modo oscuro. */
    --color-primary: ...;
    --color-on-primary: ...;
}
```

Los componentes consumen los tonos vía variables locales y `color-mix()`:

```css
.metric-card:hover {
    border-color: color-mix(in srgb, var(--tone) 45%, transparent);
    box-shadow: 0 14px 34px -14px color-mix(in srgb, var(--tone) 45%, transparent);
}
```

### Principios que guiaron el diseño

**El color acentúa; no sostiene.**
Títulos, párrafos y bordes se quedan en neutros. La jerarquía la crean el peso tipográfico y el tamaño. El acento entra solo donde debe destacar: botones, íconos, hover, la firma. Texto largo nunca va en color de marca.

**Las sombras se tiñen con el acento.**
Nunca negro puro. Una sombra derivada del color de marca hace que todos los elementos se sientan parte del mismo mundo.

**El color significa algo.**
En el proceso del *About*, los cuatro pasos (Analizar → Diseñar → Construir → Desplegar) recorren la rampa: el trabajo literalmente se enciende conforme avanza. En el *timeline* de experiencia, el tono avanza pero la opacidad decrece: lo reciente pesa más, que es lo que un reclutador mira primero.

### Tipografía

| Fuente | Rol |
|---|---|
| **Sora** | Títulos, navegación, logo — carácter geométrico |
| **Inter** | Cuerpo y párrafos — legibilidad |
| **DM Mono** | Acentos developer — `$ whoami`, `</>`, tags |

Los encabezados de sección forman una familia de comandos: `$ whoami`, `$ about --me`, `$ git log --experience`, `$ ls ./projects`, `$ stack --list`.

---

## Estructura del proyecto

```
src/
├── assets/
│   └── img/
│       ├── profile/
│       └── projects/          # Diagramas de arquitectura por proyecto
├── components/
│   ├── contact/               # Formulario + Turnstile
│   └── ui/
│       ├── topbar/            # Topbar.vue, TopbarDesktop, TopbarMobile (dock)
│       ├── theme/             # ThemeToggle
│       ├── language/          # LanguageToggle
│       ├── social/            # SocialLinks
│       ├── footer/
│       └── loading/
├── composables/
│   ├── contact/               # useContact
│   ├── scroll/                # useScrollObserver (sección activa)
│   └── turnstile/             # useTurnstile (render explícito del widget)
├── constants/
├── i18n/
│   ├── en.js
│   └── es.js
├── services/
│   └── contact/               # contact.service.js
├── validators/
│   └── contact/               # contact.validator.js
├── utils/
├── views/
│   └── landing/
│       └── sections/
│           ├── HeroSection.vue
│           ├── AboutSection.vue
│           ├── ExperienceSection.vue
│           ├── ProjectsSection.vue
│           ├── StackSection.vue
│           ├── hero/          # HeroContent, HeroCV, HeroMetrics, HeroMarquee
│           ├── about/         # AboutStory, AboutPrinciples
│           └── projects/      # ProjectCard, ProjectModal, ProjectPlaceholder
├── App.vue
└── style.css                  # ← Sistema de diseño completo
```

El alias `@` apunta a `src/`. Existe un breakpoint personalizado `nav: 860px` para la transición entre el nav de escritorio y el dock móvil.

---

## Puesta en marcha

### Requisitos

- **Node.js 22** o superior
- **pnpm 10**

```bash
node -v    # v22.x
pnpm -v    # 10.x
```

> Si usas `nvm`, fija la versión por defecto para evitar problemas con los binarios nativos de Vite:
> ```bash
> nvm use 22 && nvm alias default 22
> ```

### Instalación

```bash
git clone https://github.com/devgm10/landing-page.git
cd landing-page

pnpm install
cp .env.example .env    # completar valores
pnpm dev
```

La aplicación queda en `http://localhost:5173`.

---

## Variables de entorno

```env
# Endpoint del microservicio de contacto (API Gateway)
VITE_CONTACT_API_URL=https://<api-id>.execute-api.us-east-1.amazonaws.com/dev/contact

# Site key pública de Cloudflare Turnstile
VITE_TURNSTILE_SITE_KEY=<site-key>
```

> **Desarrollo local:** Cloudflare provee claves de prueba que siempre validan. Úsalas en local (`localhost` está autorizado por defecto) y reserva las reales para producción. El widget de Turnstile **no funciona a través de túneles** como `cloudflared`, ya que la doble vuelta por la infraestructura de Cloudflare invalida el desafío.

---

## Scripts disponibles

| Script | Descripción |
|---|---|
| `pnpm dev` | Servidor de desarrollo con HMR |
| `pnpm build` | Build de producción |
| `pnpm preview` | Sirve el build localmente |
| `pnpm check:i18n` | **Valida paridad de traducciones** entre `en.js` y `es.js` |

El script `check:i18n` corre en CI y **bloquea el merge** si una clave existe en un idioma pero no en el otro. Un texto sin traducir no llega a producción.

---

## Pipeline CI/CD

Definido en `.github/workflows/ci-cd.yml`. Se ejecuta en cada *pull request* hacia `main` y en cada *push* a `main`.

```
                      ┌──────────────┐
                      │   Validate   │  i18n parity + build
                      └──────┬───────┘
                             │
                ┌────────────┴────────────┐
                ▼                         ▼
        ┌───────────────┐         ┌───────────────┐
        │  SonarCloud   │         │     Snyk      │
        │ Scan + Gate   │         │ Deps + Image  │
        └───────┬───────┘         └───────┬───────┘
                └────────────┬────────────┘
                             ▼
                     ┌───────────────┐
                     │ Quality Gate  │  punto de convergencia
                     └───────┬───────┘
                             │  (solo en push a main)
                             ▼
                     ┌───────────────┐
                     │ Build & Push  │  Docker Hub
                     │  latest + SHA │
                     └───────┬───────┘
                             ▼
                     ┌───────────────┐
                     │    Deploy     │  EC2 vía AWS SSM
                     └───────────────┘
```

### Detalle de cada etapa

**1 · Validate**
Instala dependencias con lockfile congelado, valida la paridad de traducciones y compila el proyecto. Si el build falla, nada más se ejecuta.

**2 · SonarCloud**
Análisis estático: bugs, code smells, duplicación y cobertura. El *Quality Gate* bloquea el merge si no se cumplen los umbrales.

**3 · Snyk**
Doble escaneo, con umbral en severidad `high`:
- **Dependencias** — vulnerabilidades en el árbol de paquetes.
- **Imagen Docker** — se construye la imagen y se escanea el resultado, incluyendo la capa base.

Ambos resultados se suben a Snyk para monitoreo continuo (`snyk monitor`), lo que genera alertas si aparece una CVE nueva en una dependencia ya desplegada.

**4 · Quality Gate**
Punto de convergencia. Solo continúa si Sonar y Snyk pasan.

**5 · Build & Push**
Construye la imagen para `linux/amd64` con Buildx y la publica en Docker Hub con dos tags: `latest` y el SHA del commit.

**6 · Deploy**
- Asume un rol IAM en AWS mediante **OIDC** (sin credenciales estáticas en GitHub).
- Localiza la instancia EC2 por su tag.
- Ejecuta el despliegue vía `aws ssm send-command`: `docker compose pull && up -d && image prune`.
- Espera el resultado, lo verifica y **falla el workflow** si el comando no terminó en `Success`, exponiendo el `StandardErrorContent`.

---

## Infraestructura

La infraestructura vive en un repositorio independiente ([`landing-page-infra`](https://github.com/devgm10/landing-page-infra)) y se gestiona con **Terraform**, con estado remoto en **Terraform Cloud** y *VCS workflow*: un push al repo dispara `plan`, y el `apply` se aprueba desde la interfaz.

Separar el código de la aplicación del código de la infraestructura permite que cada uno evolucione a su ritmo, con su propio ciclo de revisión.

### Componentes

- **EC2** (Ubuntu 22.04, us-east-1) — host de la aplicación.
- **Security Group** — únicamente los puertos 80 y 443 abiertos a internet.
- **IAM Role para la instancia** — permisos de SSM, sin llaves.
- **IAM Role para el despliegue** — asumido por GitHub Actions vía OIDC.
- **Cloudflare** — DNS y proxy.

---

## Seguridad

Decisiones tomadas deliberadamente, no por defecto:

**Sin acceso SSH.**
El puerto 22 está cerrado en el Security Group. Toda la administración (despliegue, depuración, port forwarding hacia Grafana) pasa por **AWS SSM**. No existe una llave privada que pueda filtrarse.

**Sin credenciales estáticas en CI.**
GitHub Actions asume un rol IAM mediante **OIDC**. No hay `AWS_ACCESS_KEY_ID` guardada en los secrets del repositorio.

**CORS explícito.**
El microservicio de contacto no usa el CORS automático del framework. El preflight (`OPTIONS`) se maneja manualmente y el origen se valida contra una lista permitida, con fallback al dominio de producción si el origen no coincide.

**Rate limiting en API Gateway.**
Throttling configurado a 3 peticiones/segundo con ráfaga de 5, mediante `serverless-api-gateway-throttling`.

**Protección anti-bot.**
Cloudflare Turnstile, verificado **en el servidor**. El token se valida contra la API de Cloudflare **antes** de ejecutar la validación de esquema: si el desafío no pasa, la petición se rechaza con `403` sin llegar a procesar el cuerpo.

**Validación estricta.**
El esquema de Zod usa `.strict()`: cualquier campo no declarado hace fallar la validación, en lugar de descartarse silenciosamente.

**Principio de mínimo privilegio.**
El rol de ejecución de la Lambda solo tiene permisos de escritura en CloudWatch Logs.

**Escaneo continuo.**
Snyk monitorea las dependencias y la imagen publicada, alertando ante nuevas CVE aunque el código no haya cambiado.

---

## Observabilidad

Stack de métricas desplegado junto a la aplicación:

| Componente | Función |
|---|---|
| **Node Exporter** | Métricas del host (CPU, memoria, disco, red) |
| **cAdvisor** | Métricas por contenedor |
| **Prometheus** | Recolección y almacenamiento |
| **Grafana** | Dashboards |

Ninguno de estos servicios está expuesto a internet. El acceso se realiza mediante **SSM Port Forwarding**, creando un túnel local hacia la instancia sin abrir un solo puerto adicional.

---

## Internacionalización

La aplicación es completamente bilingüe (**ES / EN**) mediante Vue I18n. Todo el contenido —incluidos los datos de proyectos, experiencia y descripciones del stack— vive en los archivos de traducción, no en los componentes.

La paridad entre idiomas se valida en CI (`pnpm check:i18n`). Una clave presente en un idioma y ausente en el otro **rompe el pipeline**.

---

## Roadmap

- [ ] **Tests** — Vitest sobre validadores, servicios y composables. Objetivo: superar el *Quality Gate* de cobertura sin exclusiones.
- [ ] **Kubernetes** — migrar el despliegue a un clúster, junto con el stack de observabilidad.
- [ ] **Terraform para el backend** — el microservicio de contacto aún se despliega con Serverless Framework; unificarlo bajo IaC.
- [ ] **IAM de despliegue acotado** — reducir el rol de CI/CD al conjunto mínimo de acciones.
- [ ] **DNS automatizado** — gestionar los registros de Cloudflare desde Terraform.
- [ ] **Diagramas de arquitectura** para los proyectos restantes del portfolio.

---

## Contacto

**Gianmarco Linares Becerra**
Full Stack Developer & DevOps Engineer — Trujillo, Perú

- **Web:** [gmlinares.dev](https://gmlinares.dev)
- **GitHub:** [@devgm10](https://github.com/devgm10)
- **LinkedIn:** [Gianmarco Linares](https://linkedin.com/in/gianmarco-linares)

---

<p align="center">
  <sub>Construido de principio a fin: del componente al contenedor, del contenedor a la nube.</sub>
</p>