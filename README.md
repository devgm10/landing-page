1. PLANIFLY
* Empresa / Cliente: Proyecto Personal (SaaS Fintech).
* Descripción: Plataforma SaaS de gestión financiera personal impulsada por Inteligencia Artificial, diseñada para automatizar el registro, categorización y análisis de gastos mediante lenguaje natural desde una interfaz web y WhatsApp.
* Módulos:
    * Landing Page Corporativa.
    * Dashboard Financiero.
    * Gestión de Presupuestos.
    * Gestión de Gastos.
    * Categorías Financieras.
    * Configuración de Cuenta.
    * Reportes Financieros.
    * Integración WhatsApp AI.
    * Motor de Inteligencia Artificial.
* URL: Actualmente en desarrollo.
* Arquitectura: Monolítica modular basada en Programación en Capas (Layered Architecture), desacoplando Presentación, Servicios de Negocio, Persistencia e Integraciones Externas.
* Seguridad:
    * JWT (Access Token & Refresh Token).
    * Validaciones de ownership por usuario.
    * Permisos personalizados mediante Django REST Framework.
    * Gestión segura de credenciales mediante variables de entorno.
    * Integridad transaccional sobre información financiera.
* Características Destacadas:
    * Registro automático de gastos por WhatsApp.
    * Procesamiento de lenguaje natural mediante IA.
    * Clasificación inteligente de movimientos financieros.
    * Dashboard financiero multimoneda.
    * Actualización en tiempo real mediante WebSockets.
    * Preparado para futuras integraciones Open Banking.
* Stack Tecnológico:
    * Backend: Python, Django, Django REST Framework, Django Channels, Redis.
    * Frontend: Vue 3, Composition API, Vite, Tailwind CSS, Chart.js.
    * Base de Datos: PostgreSQL.
    * Cloud & DevOps: Docker, Docker Compose, GitHub.
    * IA & Automatización: OpenAI API, WhatsApp Cloud API.
* Metodología: Scrum y desarrollo iterativo orientado a MVP.
* Tipo de Desarrollo: Producto SaaS Propio.


2. PCG-AGRO
* Empresa / Cliente: Agrovision Corp.
* Descripción: ERP corporativo diseñado a medida para la planificación, control y gestión integral de las operaciones agrícolas globales de la compañía.
* Módulos:
    * Agrícola.
    * Packing.
    * Comercial.
    * Proyección.
    * Presupuesto.
    * Costos.
    * Investigación y Desarrollo (I+D).
    * Control de Versiones.
* URL: https://pcgagro.agvperu.com/
* Arquitectura: Monolítica basada en Programación en Capas (Layered Architecture), separando Presentación, Lógica de Negocio y Acceso a Datos.
* Seguridad:
    * JWT (JSON Web Tokens).
    * RBAC (Role-Based Access Control).
    * Middlewares de protección y Rate Limiting.
    * Principio de Separación de Funciones (SoD).
* Características Destacadas:
    * Gestión integral de campañas agrícolas.
    * Planificación operativa corporativa.
    * Gestión presupuestal.
    * Control de costos productivos.
    * Versionamiento de información agrícola.
* Stack Tecnológico:
    * Backend: Python, Django, Django REST Framework.
    * Frontend: Vue 3, JavaScript, Vite, Vuexy, Handsontable.
    * Base de Datos: PostgreSQL.
    * Cloud & DevOps: AWS, Bitbucket.
* Metodología: Scrum mediante Jira.
* Tipo de Desarrollo: Privado (Corporativo).


3. HARVEST
* Empresa / Cliente: Agrovision Corp.
* Descripción: Plataforma geoespacial enfocada en el monitoreo y seguimiento en tiempo real de los avances de cosecha mediante mapas interactivos y visualización operativa.
* Módulos:
    * Cosecha.
    * Pre-Cosecha.
    * Pasadas.
    * Gestión de Vigencias.
    * Gestión de Turnos.
    * Gestión de Lotes.
    * Gestión de Hileras.
* URL: https://harvest.agvperu.com/
* Arquitectura: Monolítica basada en Programación en Capas (Layered Architecture).
* Seguridad:
    * JWT (JSON Web Tokens).
    * RBAC (Role-Based Access Control).
    * Rate Limiting.
    * Middlewares de seguridad personalizados.
    * Principio de Separación de Funciones (SoD).
* Características Destacadas:
    * Visualización geoespacial mediante Google Maps.
    * Actualización de información operativa en tiempo real.
    * Generación y procesamiento de archivos KML.
    * Seguimiento de productividad agrícola.
    * Gestión centralizada de información de campo.
* Stack Tecnológico:
    * Backend: Python, Django, Django REST Framework, WebSockets, SimpleKML.
    * Frontend: Vue 3, JavaScript, Vite, Vuexy, Handsontable, Google Maps API.
    * Base de Datos: PostgreSQL.
    * Cloud & DevOps: AWS S3, Bitbucket.
* Metodología: Scrum mediante Jira.
* Tipo de Desarrollo: Privado (Corporativo).


4. SCRAPING AGRO
* Empresa / Cliente: Agrovision Corp.
* Descripción: Plataforma corporativa de ETL & ELT diseñada para centralizar, transformar y sincronizar grandes volúmenes de datos provenientes de OData, APIs empresariales y sistemas agrícolas externos.
* Módulos:
    * Gestión de Extracciones.
    * Orquestación de Procesos.
    * Monitoreo de Pipelines.
    * Administración de Conexiones.
    * Logs de Auditoría.
    * Panel Administrativo.
* URL: Privado (Entorno Corporativo Interno).
* Arquitectura: Monolítica basada en Programación en Capas, incorporando procesamiento asíncrono y servicios especializados para integración de datos.
* Seguridad:
    * JWT (JSON Web Tokens).
    * RBAC (Role-Based Access Control).
    * Rate Limiting.
    * Middlewares de protección personalizados.
    * Principio de Separación de Funciones (SoD).
* Características Destacadas:
    * Integración con protocolos OData.
    * Procesamiento masivo de datos agrícolas.
    * Ejecución asíncrona mediante Celery.
    * Monitoreo y auditoría de pipelines.
    * Automatización de procesos ETL y ELT.
* Stack Tecnológico:
    * Backend: Python, Django, Django REST Framework, Pandas, Celery, Redis, SQLAlchemy.
    * Frontend: Vue 3, JavaScript, Vite, Vuexy.
    * Base de Datos: PostgreSQL.
    * Cloud & DevOps: AWS, Bitbucket.
* Metodología: Scrum mediante Jira.
* Tipo de Desarrollo: Privado (Corporativo).


5. LANDING PAGE / PORTFOLIO
* Empresa / Cliente: Marca Personal (Gianmarco Linares Becerra).
* Descripción: Plataforma web profesional desarrollada para presentar experiencia, proyectos, competencias técnicas y trayectoria como Full Stack & DevOps Engineer, priorizando rendimiento, accesibilidad y experiencia de usuario.
* Módulos:
    * Hero Section.
    * About Me.
    * Technology Stack.
    * Projects Portfolio.
    * Professional Experience.
    * Contact Section.
    * Multi-language Support.
    * Theme Management.
* URL: En despliegue.
* Arquitectura: SPA modular basada en componentes reutilizables y secciones independientes desacopladas.
* Seguridad:
    * Gestión segura de variables de entorno.
    * Protección de información sensible en cliente.
    * Buenas prácticas de dependencias y control de paquetes.
* Características Destacadas:
    * Diseño responsive mobile-first.
    * Soporte multilenguaje.
    * Dark Mode / Light Mode.
    * Animaciones optimizadas para rendimiento.
    * Arquitectura escalable basada en componentes.
* Stack Tecnológico:
    * Frontend: Vue 3, JavaScript, Vite, Vue Router, Vue I18n, Tailwind CSS, Lucide Icons.
    * Cloud & DevOps: Git, GitHub, Docker, AWS, Hostman.
* Metodología: Desarrollo iterativo basado en principios ágiles y mejora continua.
* Tipo de Desarrollo: Público (Portfolio Profesional).