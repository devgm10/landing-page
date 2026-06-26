export default {
    topbar: {
        home: 'Inicio',
        about: 'Sobre Mí',
        stack: 'Tecnologías',
        projects: 'Proyectos',
        experience: 'Experiencia',
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
                    button_show_details: 'Ver detalles',
                    button_hide_details: 'Ocultar detalles',
                    label_project: 'Proyecto',
                    label_architecture: 'Arquitectura',
                    label_methodology: 'Metodología',
                    label_modules: 'Módulos',
                    label_security: 'Seguridad',
                    label_stack: 'Stack',
                },
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
        },
    },

    footer: {
        contact_title: 'Contacto',
        contact_sub_title: 'Hablemos de vacantes, proyectos o ideas de software.',
        location_title: 'Ubicación',
        send: 'Enviar mensaje',
        placeholder_email: "tu{'@'}email.com",
        placeholder_message: 'Cuéntame sobre tu idea o vacante...',
    },

    status_personal: 'Disponible para nuevos desafíos',
};
