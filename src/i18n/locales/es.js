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
                    label_overview: 'Resumen',
                    label_highlights: 'Aspectos clave',
                    label_capabilities: 'Capacidades',
                    label_impact: 'Impacto',
                },
                list: [
                    {
                        id: 'planifly',
                        title: 'PLANIFLY AI',
                        category: 'Fintech & IA',
                        company: 'Proyecto Personal',
                        type: 'SaaS Propio',

                        shortDescription:
                            'Plataforma SaaS financiera que combina Inteligencia Artificial y automatización para convertir conversaciones naturales en registros financieros estructurados y facilitar el control inteligente de las finanzas personales.',

                        overview:
                            'Planifly nace con el objetivo de reducir la fricción asociada al registro y seguimiento de gastos personales. La plataforma propone una experiencia financiera más natural, permitiendo que los usuarios interactúen con sus finanzas mediante una interfaz web y un asistente conversacional impulsado por Inteligencia Artificial.',

                        highlights: [
                            'Diseño de una arquitectura modular orientada a separar las principales capacidades del dominio financiero.',
                            'Integración de Inteligencia Artificial para interpretar interacciones en lenguaje natural y transformarlas en información financiera estructurada.',
                            'Implementación de comunicación en tiempo real mediante WebSockets y Django Channels.',
                            'Procesamiento y visualización de información financiera mediante dashboards y gráficos interactivos.',
                            'Diseño de una experiencia conversacional orientada a reducir la fricción entre el usuario y el registro de sus operaciones financieras.',
                        ],

                        impact:
                            'La propuesta busca transformar el registro tradicional de gastos en una experiencia rápida y natural, reduciendo la cantidad de pasos necesarios para registrar una operación y convirtiendo los datos financieros en información útil para la toma de decisiones personales.',

                        details: {
                            architecture: 'Arquitectura en Capas (Monolítica Modular)',
                            methodology: 'Scrum',
                            capabilities: [
                                'Dashboard Financiero',
                                'Gestión de Gastos',
                                'Control de Presupuestos',
                                'Análisis y Reportes',
                                'Asistente Financiero con IA',
                                'Interacción Conversacional',
                                'Motor de Procesamiento IA',
                                'Comunicación en Tiempo Real',
                            ],
                        },

                        stack: {
                            Backend: [
                                'Python',
                                'Django',
                                'Django REST Framework',
                                'Django Channels',
                                'Redis',
                            ],
                            Frontend: [
                                'Vue 3',
                                'Vite',
                                'Tailwind CSS',
                                'Chart.js',
                            ],
                            DevOps: [
                                'Docker',
                                'GitHub',
                                'PostgreSQL',
                            ],
                        },
                    },
                    {
                        id: 'pcg',
                        title: 'PCG AGRO',
                        category: 'ERP Agrícola',
                        company: 'Agrovision Corp.',
                        type: 'Corporativo',

                        shortDescription:
                            'ERP agrícola corporativo diseñado para centralizar la planificación, gestión y control de operaciones productivas, integrando múltiples áreas de negocio dentro de una única plataforma.',

                        overview:
                            'PCG AGRO es una plataforma empresarial orientada a digitalizar y centralizar procesos críticos de la operación agrícola. La solución integra diferentes áreas funcionales del negocio en un único ecosistema, permitiendo gestionar información operativa, financiera y productiva bajo una visión centralizada.',

                        highlights: [
                            'Diseño y desarrollo de módulos empresariales orientados a diferentes áreas del negocio agrícola.',
                            'Implementación de APIs REST para centralizar y exponer la lógica de negocio.',
                            'Construcción de interfaces dinámicas para gestionar grandes volúmenes de información tabular.',
                            'Integración de procesos de planificación, presupuestación, costos y proyección dentro de una misma plataforma.',
                            'Desarrollo de soluciones orientadas a soportar procesos agrícolas y empresariales a gran escala.',
                        ],

                        impact:
                            'La plataforma permite centralizar información de diferentes áreas del negocio y proporcionar una visión integrada de la operación, facilitando la planificación, el seguimiento y el análisis de procesos agrícolas y financieros.',

                        details: {
                            architecture: 'Arquitectura en Capas',
                            methodology: 'Scrum',
                            capabilities: [
                                'Gestión de Operaciones Agrícolas',
                                'Gestión de Packing',
                                'Investigación y Desarrollo',
                                'Gestión Comercial',
                                'Planificación Presupuestaria',
                                'Control de Costos',
                                'Proyecciones Operativas',
                                'Gestión de Información Empresarial',
                            ],
                        },

                        stack: {
                            Backend: [
                                'Python',
                                'Django',
                                'Django REST Framework',
                            ],
                            Frontend: [
                                'Vue 3',
                                'Handsontable',
                                'Vuexy',
                            ],
                            DevOps: [
                                'AWS',
                                'PostgreSQL',
                                'Bitbucket',
                            ],
                        },
                    },
                    {
                        id: 'harvest',
                        title: 'HARVEST',
                        category: 'Geoespacial & Agrotech',
                        company: 'Agrovision Corp.',
                        type: 'Corporativo',

                        shortDescription:
                            'Plataforma geoespacial para digitalizar el seguimiento de operaciones de cosecha mediante mapas interactivos, datos operativos y comunicación en tiempo real.',

                        overview:
                            'HARVEST es una plataforma especializada en la visualización y seguimiento de operaciones agrícolas, utilizando información geoespacial para representar el avance de la cosecha sobre mapas interactivos. La solución conecta información operativa con una representación visual del terreno, permitiendo a los equipos monitorear el estado de las operaciones de forma más clara y dinámica.',

                        highlights: [
                            'Integración de información geoespacial con procesos operativos agrícolas.',
                            'Visualización interactiva de lotes, hileras y zonas de trabajo mediante mapas.',
                            'Implementación de comunicación en tiempo real utilizando WebSockets.',
                            'Procesamiento y generación de información geográfica mediante SimpleKML.',
                            'Construcción de interfaces dinámicas para la gestión y visualización de información operativa.',
                            'Integración de Google Maps API para representar información geográfica y operacional.',
                        ],

                        impact:
                            'La plataforma transforma información operativa de cosecha en una representación geoespacial interactiva, facilitando el monitoreo del avance de las operaciones y proporcionando una visión más clara del estado de los procesos agrícolas.',

                        details: {
                            architecture: 'Arquitectura en Capas (Monolítica)',
                            methodology: 'Scrum',
                            capabilities: [
                                'Monitoreo de Cosecha',
                                'Gestión de Pre-Cosecha',
                                'Seguimiento de Pasadas',
                                'Gestión de Vigencias',
                                'Gestión de Turnos',
                                'Gestión de Lotes',
                                'Gestión de Hileras',
                                'Visualización Geoespacial',
                                'Actualización en Tiempo Real',
                            ],
                        },

                        stack: {
                            Backend: [
                                'Python',
                                'Django',
                                'Django REST Framework',
                                'WebSockets',
                                'SimpleKML',
                            ],
                            Frontend: [
                                'Vue 3',
                                'Vite',
                                'Vuexy',
                                'Handsontable',
                                'Google Maps API',
                            ],
                            DevOps: [
                                'AWS S3',
                                'PostgreSQL',
                                'Bitbucket',
                            ],
                        },
                    },
                    {
                        id: 'scraping-agro',
                        title: 'SCRAPING AGRO',
                        category: 'Ingeniería de Datos & ETL',
                        company: 'Agrovision Corp.',
                        type: 'Corporativo',

                        shortDescription:
                            'Plataforma corporativa de integración y procesamiento de datos diseñada para automatizar pipelines ETL y ELT, centralizar información proveniente de múltiples fuentes y mantener sincronizados los datos agrícolas.',

                        overview:
                            'Scraping Agro es una plataforma de integración de datos desarrollada para automatizar la extracción, transformación y carga de información proveniente de diferentes fuentes y sistemas. La solución centraliza la gestión de pipelines de datos y permite ejecutar procesos de transformación de forma controlada y trazable.',

                        highlights: [
                            'Diseño de pipelines ETL y ELT para integrar información proveniente de múltiples fuentes.',
                            'Procesamiento y transformación de grandes volúmenes de datos utilizando Python y Pandas.',
                            'Ejecución de procesos asíncronos mediante Celery y Redis.',
                            'Integración con diferentes motores y fuentes de datos utilizando SQLAlchemy.',
                            'Implementación de mecanismos de monitoreo y trazabilidad para procesos de integración.',
                            'Gestión centralizada de conexiones y configuraciones de extracción.',
                            'Registro de logs y auditoría para facilitar el seguimiento de ejecuciones y errores.',
                        ],

                        impact:
                            'La plataforma reduce la dependencia de procesos manuales de integración y permite automatizar la circulación de información entre diferentes fuentes y sistemas, mejorando la disponibilidad, trazabilidad y consistencia de los datos utilizados por la organización.',

                        details: {
                            architecture: 'Arquitectura en Capas con Procesamiento Asíncrono',
                            methodology: 'Scrum',
                            capabilities: [
                                'Gestión de Extracciones',
                                'Diseño y Ejecución de Pipelines',
                                'Orquestación de Procesos',
                                'Procesamiento Asíncrono',
                                'Transformación de Datos',
                                'Monitoreo de Ejecuciones',
                                'Administración de Conexiones',
                                'Logs y Auditoría',
                                'Panel Administrativo',
                            ],
                        },

                        stack: {
                            Backend: [
                                'Python',
                                'Django',
                                'Django REST Framework',
                                'Pandas',
                                'Celery',
                                'Redis',
                                'SQLAlchemy',
                            ],
                            Frontend: [
                                'Vue 3',
                                'Vite',
                                'Vuexy',
                            ],
                            DevOps: [
                                'AWS',
                                'PostgreSQL',
                                'Bitbucket',
                            ],
                        },
                    },
                    {
                        id: 'portfolio',
                        title: 'LANDING PAGE / PORTFOLIO',
                        category: 'Marca Personal & Ingeniería',
                        company: 'Gianmarco Linares Becerra',
                        type: 'Portfolio Profesional',

                        shortDescription:
                            'Plataforma web profesional diseñada y desarrollada como producto digital propio para presentar experiencia, proyectos y capacidades como Full Stack & DevOps Engineer.',

                        overview:
                            'Este portfolio fue diseñado como una experiencia digital orientada a comunicar mi trayectoria profesional y demostrar, a través de un producto real, mis capacidades de desarrollo frontend, arquitectura de software, experiencia de usuario y prácticas DevOps.',

                        highlights: [
                            'Arquitectura frontend modular basada en componentes reutilizables.',
                            'Implementación de soporte multiidioma para ampliar la accesibilidad de la plataforma.',
                            'Sistema de gestión de temas y preferencias visuales.',
                            'Diseño responsive adaptado a diferentes dispositivos y resoluciones.',
                            'Integración de un microservicio serverless independiente para el procesamiento del formulario de contacto.',
                            'Contenerización de la aplicación mediante Docker.',
                            'Despliegue y configuración de infraestructura cloud para publicar el producto.',
                        ],

                        impact:
                            'El proyecto funciona como una demostración práctica de mi capacidad para llevar un producto digital desde su diseño y desarrollo hasta su despliegue, integrando frontend moderno, arquitectura desacoplada y prácticas de infraestructura y DevOps.',

                        details: {
                            architecture:
                                'SPA Modular con Componentes Reutilizables y Servicios Desacoplados',
                            methodology: 'Desarrollo Iterativo / Ágil',
                            capabilities: [
                                'Presentación Profesional',
                                'Experiencia de Usuario',
                                'Soporte Multiidioma',
                                'Gestión de Temas',
                                'Diseño Responsive',
                                'Portafolio de Proyectos',
                                'Experiencia Profesional',
                                'Sistema de Contacto',
                                'Servicio de Notificaciones Serverless',
                            ],
                        },

                        stack: {
                            Frontend: [
                                'Vue 3',
                                'Vite',
                                'Vue Router',
                                'Vue I18n',
                                'Tailwind CSS',
                                'Lucide Icons',
                            ],
                            Backend: [
                                'AWS Lambda',
                                'API Gateway',
                                'Resend',
                            ],
                            DevOps: [
                                'Git',
                                'GitHub',
                                'Docker',
                                'AWS',
                                'Hostman',
                            ],
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
        success_title: '¡Mensaje enviado!',
        success_text: 'Gracias por escribirme. Te responderé lo antes posible.',
        success_again: 'Enviar otro mensaje',
        errors: {
            name_required: 'Este campo es obligatorio',
            name_min: 'Demasiado corto',
            name_max: 'Demasiado largo',
            email_required: 'Este campo es obligatorio',
            email_invalid: 'Formato de correo inválido',
            message_required: 'Este campo es obligatorio',
            message_min: 'Demasiado corto',
            message_max: 'Demasiado largo',
            company_max: 'Demasiado largo',
            subject_max: 'Demasiado largo',
        },
    },

    status_personal: 'Disponible para nuevos desafíos',
};
