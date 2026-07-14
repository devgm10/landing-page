export default {
    topbar: {
        home: 'Inicio',
        about: 'Sobre Mí',
        stack: 'Tecnologías',
        projects: 'Proyectos',
        experience: 'Experiencia',
        testimonials:  'Testimonios'
    },

    landing: {
        section: {
            hero: {
                description: 'Más de 4 años entregando soluciones tecnológicas integrales. Combino visión de negocio y precisión técnica para impulsar la excelencia operativa.',
                button_download: 'Descargar CV',
                button_lets_talk: 'Hablemos',
                button_view_projects: 'Ver Proyectos',
                metrics: {
                    experiencie: 'Años de Experiencia',
                    efficiency: 'Mayor Eficiencia',
                    deployment: 'Despliegue más Rápido',
                    cloud: 'Optimización Cloud',
                },
            },

            about: {
                main_title: 'Más Allá del Código',
                secondary_title: 'Acerca de mí',
                story: {
                    slogan: 'Más que código, diseño tecnología alineada a los objetivos de tu negocio.',
                    paragraph: {
                        first: 'Durante más de 4 años, he liderado el diseño de plataformas empresariales, sistemas de automatización y soluciones cloud. Mi enfoque trasciende la ejecución técnica, centrándose en optimizar procesos críticos y generar un impacto tangible y cuantificable en el negocio.',
                        second: 'Priorizo la comprensión profunda de los objetivos estratégicos antes de definir cualquier arquitectura. Entiendo que detrás de cada línea de código existen operaciones, equipos y decisiones de negocio que dependen de sistemas tecnológicamente robustos y altamente confiables.',
                        third: 'Desde la experiencia del usuario final hasta la infraestructura de despliegue, mi objetivo es construir productos escalables y mantenibles. Diseño soluciones preparadas no solo para operar hoy, sino para evolucionar y escalar conforme los desafíos de la organización lo demanden.',
                    }
                },
                principles: {
                    section_label: 'Mi proceso',
                    analyze: {
                        title: 'Entender',
                        description: 'Disecciono los problemas antes de proponer soluciones.',
                    },
                    design: {
                        title: 'Diseñar',
                        description: 'Arquitecto procesos complejos en sistemas escalables y limpios.',
                    },
                    build: {
                        title: 'Construir',
                        description: 'Desarrollo productos de alto rendimiento hechos para durar.',
                    },
                    deploy: {
                        title: 'Desplegar',
                        description: 'Automatizo pipelines fiables para una entrega fluida en múltiples entornos.',
                    },
                },
            },

            experience: {
                main_title: 'Trayectoria Profesional',
                secondary_title: 'Experiencia',
                list: [
                    {
                        company: 'Agrovision Corp.',
                        role: 'Analista Programador',
                        period: '2022 – 2025',
                        highlights: [
                            { 
                                title: 'Arquitectura & Liderazgo',
                                desc: 'Dirección técnica de ERPs agrícolas y migración a AWS.'
                            },
                            {
                                title: 'Full Stack Senior', 
                                desc: 'APIs robustas con Django/PostgreSQL y UI con Vue 3.' },
                            {
                                title: 'Ingeniería de Datos', 
                                desc: 'Pipelines ETL avanzados y SQL para analítica multidimensional.'
                            },
                        ],
                    },
                    {
                        company: 'Agrovision Corp.',
                        role: 'Asistente de Programación',
                        period: '2021 – 2022',
                        highlights: [
                            {
                                title: 'Infraestructura & DevOps', 
                                desc: 'Introducción de Docker y estandarización de entornos.'
                            },
                            {
                                title: 'Migración de Datos', 
                                desc: 'Homogeneización y migración crítica a la nube.'
                            },
                            {
                                title: 'Cultura Git',
                                desc: 'Implementación de control de versiones y trazabilidad.'
                            },
                        ],
                    },
                    {
                        company: 'Prosegur S.A.',
                        role: 'Asistente Administrativo',
                        period: '2018 – 2019',
                        highlights: [
                            {
                                title: 'Gestión de Datos', 
                                desc: 'Auditoría de registros masivos y aseguramiento de integridad.'
                            },
                            {
                                title: 'Optimización de Reportes', 
                                desc: 'Automatización de KPIs y reducción de carga operativa.'
                            },
                            {
                                title: 'Soporte Técnico', 
                                desc: 'Resolución de incidencias IT y soporte a usuarios finales.'
                            },
                        ],
                    },
                ],
            },

            projects: {
                main_title: 'Proyectos destacados',
                secondary_title: 'Proyectos',
                card: {
                    label_architecture: 'Arquitectura',
                    label_methodology: 'Metodología',
                    label_modules: 'Módulos',
                    label_stack: 'Stack',
                    view_detail: 'Ver detalle',
                },
                list: [
                    {
                        id: 'planifly',
                        title: 'PLANIFLY AI',
                        category: 'Fintech & IA',
                        company: 'Proyecto Personal',
                        type: 'SaaS Propio',
                        shortDescription: 'Plataforma SaaS financiera impulsada por Inteligencia Artificial para automatizar el registro y análisis de gastos personales.',
                        details: {
                            architecture: 'Arquitectura en Capas (Monolítica Modular)',
                            methodology: 'Scrum',
                            modules: [
                                'Dashboard Financiero',
                                'Presupuestos',
                                'Gastos',
                                'Reportes',
                                'WhatsApp AI',
                                'Motor IA',
                            ],
                        },
                        stack: {
                            Backend: ['Python', 'Django', 'DRF', 'Channels', 'Redis'],
                            Frontend: ['Vue 3', 'Vite', 'Tailwind', 'Chart.js'],
                            DevOps: ['Docker', 'GitHub', 'PostgreSQL'],
                        },
                    },
                    {
                        id: 'pcg',
                        title: 'PCG AGRO',
                        category: 'ERP Agrícola',
                        company: 'Agrovision Corp.',
                        type: 'Corporativo',
                        shortDescription: 'ERP corporativo para planificación y control integral de operaciones agrícolas a escala global.',
                        details: {
                            architecture: 'Arquitectura en Capas',
                            methodology: 'Scrum',
                            modules: [
                                'Agrícola',
                                'Packing',
                                'I+D',
                                'Comercial',
                                'Presupuesto',
                                'Costos',
                                'Proyección',
                            ],
                        },
                        stack: {
                            Backend: ['Python', 'Django', 'DRF'],
                            Frontend: ['Vue 3', 'Handsontable', 'Vuexy'],
                            DevOps: ['AWS', 'PostgreSQL', 'Bitbucket'],
                        },
                    },
                    {
                        id: 'harvest',
                        title: 'HARVEST',
                        category: 'Geoespacial & Agrotech',
                        company: 'Agrovision Corp.',
                        type: 'Corporativo',
                        shortDescription: 'Plataforma geoespacial para el monitoreo y seguimiento en tiempo real de los avances de cosecha mediante mapas interactivos.',
                        details: {
                            architecture: 'Arquitectura en Capas (Monolítica)',
                            methodology: 'Scrum',
                            modules: [
                                'Cosecha',
                                'Pre-Cosecha',
                                'Pasadas',
                                'Gestión de Vigencias',
                                'Gestión de Turnos',
                                'Gestión de Lotes',
                                'Gestión de Hileras',
                            ],
                        },
                        stack: {
                            Backend: ['Python', 'Django', 'DRF', 'WebSockets', 'SimpleKML'],
                            Frontend: ['Vue 3', 'Vite', 'Vuexy', 'Handsontable', 'Google Maps API'],
                            DevOps: ['AWS S3', 'PostgreSQL', 'Bitbucket'],
                        },
                    },
                    {
                        id: 'scraping-agro',
                        title: 'SCRAPING AGRO',
                        category: 'ETL & ELT Corporativo',
                        company: 'Agrovision Corp.',
                        type: 'Corporativo',
                        shortDescription: 'Plataforma corporativa de ETL & ELT para centralizar, transformar y sincronizar grandes volúmenes de datos agrícolas.',
                        details: {
                            architecture: 'Arquitectura en Capas (Monolítica con procesamiento asíncrono)',
                            methodology: 'Scrum',
                            modules: [
                                'Gestión de Extracciones',
                                'Orquestación de Procesos',
                                'Monitoreo de Pipelines',
                                'Administración de Conexiones',
                                'Logs de Auditoría',
                                'Panel Administrativo',
                            ],
                        },
                        stack: {
                            Backend: ['Python', 'Django', 'DRF', 'Pandas', 'Celery', 'Redis', 'SQLAlchemy'],
                            Frontend: ['Vue 3', 'Vite', 'Vuexy'],
                            DevOps: ['AWS', 'PostgreSQL', 'Bitbucket'],
                        },
                    },
                    {
                        id: 'portfolio',
                        title: 'LANDING PAGE / PORTFOLIO',
                        category: 'Marca Personal',
                        company: 'Gianmarco Linares Becerra',
                        type: 'Portfolio Profesional',
                        shortDescription: 'Plataforma web profesional para presentar experiencia, proyectos y competencias técnicas como Full Stack & DevOps Engineer.',
                        details: {
                            architecture: 'SPA Modular (Componentes Reutilizables)',
                            methodology: 'Desarrollo Iterativo / Ágil',
                            modules: [
                                'Hero Section',
                                'About Me',
                                'Technology Stack',
                                'Projects Portfolio',
                                'Professional Experience',
                                'Contact Section',
                                'Multi-language Support',
                                'Theme Management',
                            ],
                        },
                        stack: {
                            Frontend: ['Vue 3', 'Vite', 'Vue Router', 'Vue I18n', 'Tailwind CSS', 'Lucide Icons'],
                            DevOps: ['Git', 'GitHub', 'Docker', 'AWS', 'Hostman'],
                        },
                    },
                ],
            },

            stack: {
                main_title: 'Stack Tecnológico',
                secondary_title: 'Tecnologías y Herramientas',
                backend: {
                    description: 'APIs, automatización y lógica de negocio.',
                },
                frontend: {
                    description: 'Interfaces de usuario modernas, escalables y adaptables.',
                },
                databases: {
                    description: 'Sistemas de almacenamiento relacional y NoSQL.',
                },
                devops: {
                    description: 'Automatización, CI/CD y observabilidad.',
                },
                cloud: {
                    description: 'Infraestructura y servicios en la nube.',
                },
                tools: {
                    description: 'Control de versiones y colaboración en equipo.',
                },
            },

            testimonials: {
                main_title: 'Recomendaciones',
                secondary_title: 'Testimonios',
                translated_note: '',
                list: [
                    {
                        name: 'Luis Quiroz',
                        role: 'Analista de Aplicaciones de Software',
                        company: 'Agrovision Perú',
                        rating: 5,
                        comment: 'He tenido la oportunidad de trabajar con Gianmarco en el desarrollo de un sistema de planificación agrícola, donde demostró un sólido dominio en backend, especialmente utilizando Django, así como una buena integración con el frontend en Vue. Destaca por su capacidad para estructurar soluciones escalables, mantener un código ordenado y aplicar buenas prácticas en el diseño de APIs y manejo de datos. Además, muestra un fuerte enfoque en la lógica de negocio y en la optimización de procesos, lo cual fue clave para el correcto funcionamiento del sistema. Es una persona comprometida, responsable y con buena disposición para el trabajo en equipo.',
                    },
                    {
                        name: 'Anthony Castillo',
                        role: 'Analista Programador GIS',
                        company: 'Agrovision Corp',
                        rating: 5,
                        comment: 'Excelente trabajo, mantiene el código limpio y reutiliza funciones repetitivas para cada módulo o componente, tanto a nivel frontend como backend.',
                    },
                    {
                        name: 'Jeremy Reyes',
                        role: 'Desarrollador Freelance',
                        company: 'Agrovision',
                        rating: 5,
                        comment: 'Tuve la oportunidad de trabajar con él en un proyecto de desarrollo y fue una excelente experiencia. Es una persona muy responsable, con gran capacidad técnica y siempre con la mejor actitud para enfrentar los retos. Sin duda es un profesional en quien se puede confiar para sacar adelante cualquier proyecto.',
                    },
                    {
                        name: 'Hernán Machaca',
                        role: 'Jefe de Control de Gestión',
                        company: 'Agrovision',
                        rating: 5,
                        comment: 'Sólida capacidad de desarrollo, cumplimiento de objetivos en tiempo y requerimientos. Buena comunicación.',
                    },
                    {
                        name: 'Wilson Choquehuanca',
                        role: 'Ingeniero de Datos',
                        company: 'Agrovision',
                        rating: 5,
                        comment: 'Muy buen profesional, le gusta aprender cosas nuevas y toma iniciativas en los proyectos.',
                    },
                    {
                        name: 'Jaime Cueva',
                        role: 'Subgerente de Gestión de la Información',
                        company: 'Agrovision',
                        rating: 5,
                        comment: 'Trabaja bien en teletrabajo, orientado a objetivos, logros importantes y trabaja bajo presión.',
                    },
                ],
            },
        },
    },

    footer: {
        contact_title: 'Contacto',
        contact_sub_title: 'Hablemos de vacantes, proyectos o ideas de software.',
        location_title: 'Ubicación',
        sending: 'Enviando...',
        send: 'Enviar mensaje',
        placeholder_name: "Nombre *",
        placeholder_email: "tu{'@'}email.com",
        placeholder_message: 'Cuéntame sobre tu idea o vacante...',
        placeholder_company: 'Empresa (opcional)',
        placeholder_subject: 'Asunto (opcional)',
    },

    status_personal: 'Disponible para nuevos desafíos',
};
