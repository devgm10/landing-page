export default {
    topbar: {
        home: 'Home',
        about: 'About Me',
        stack: 'Tech Stack',
        projects: 'Projects',
        experience: 'Experience',
    },

    landing: {
        section: {
            hero: {
                description: '4+ years of experience delivering end-to-end solutions. I combine a business-first mindset with technical precision to drive operational excellence.',
                button_download: 'Download CV',
                button_view_projects: 'View Projects',
                button_lets_talk: "Let's Talk",
                metrics: {
                    experiencie: 'Years Experience',
                    efficiency: 'Higher Efficiency',
                    deployment: 'Faster Deploys',
                    cloud: 'Cost Optimization',
                },
            },

            about: {
                main_title: 'Beyond the Code',
                secondary_title: 'About me',
                story: {
                    slogan: 'Beyond just code, I design technology aligned with your business objectives.',
                    paragraph: {
                        first: 'For over 4 years, I have led the design of enterprise platforms, automation systems, and cloud solutions. My approach transcends mere technical execution, focusing on optimizing critical processes and delivering tangible, quantifiable business impact.',
                        second: 'I prioritize a deep understanding of strategic business objectives before defining any architecture. I recognize that behind every line of code lie complex operations, teams, and critical decisions that rely on robust, highly reliable technology.',
                        third: "From end-user experience to deployment infrastructure, my goal is to build scalable and maintainable products. I design solutions prepared not only to operate efficiently today but to evolve and scale as the organization's challenges demand.",
                    }
                },
                principles: {
                    analyze: {
                        title: 'Analyze',
                        description: 'I dissect problems before proposing solutions.',
                    },
                    design: {
                        title: 'Design',
                        description: 'I architect complex processes into scalable, clean systems.',
                    },
                    build: {
                        title: 'Build',
                        description: 'I build high-performance products built to last.',
                    },
                    deploy: {
                        title: 'Deploy',
                        description: 'I automate reliable pipelines for seamless multi-environment delivery.',
                    },
                },
            },

            experience: {
                main_title: 'Professional Journey',
                secondary_title: 'Experience',
                list: [
                    {
                        company: 'Agrovision Corp.',
                        role: 'Programmer Analyst',
                        period: '2022 – 2025',
                        highlights: [
                            { 
                                title: 'Architecture & Leadership',
                                desc: 'Technical direction of agricultural ERPs and strategic migration to AWS.'
                            },
                            {
                                title: 'Senior Full Stack', 
                                desc: 'Robust RESTful APIs with Django/PostgreSQL and high-density UI with Vue 3.'
                            },
                            {
                                title: 'Data Engineering', 
                                desc: 'Advanced ETL pipelines and complex SQL for multidimensional analytics.'
                            },
                        ],
                    },
                    {
                        company: 'Agrovision Corp.',
                        role: 'Programming Assistant',
                        period: '2021 – 2022',
                        highlights: [
                            {
                                title: 'Infrastructure & DevOps', 
                                desc: 'Introduction of Docker and standardization of development environments.'
                            },
                            {
                                title: 'Data Migration', 
                                desc: 'Homogenization and critical data migration from local servers to the cloud.'
                            },
                            {
                                title: 'Git Culture',
                                desc: 'Implementation of version control and source code traceability.'
                            },
                        ],
                    },
                    {
                        company: 'Prosegur S.A.',
                        role: 'Administrative Assistant',
                        period: '2018 – 2019',
                        highlights: [
                            {
                                title: 'Data Management', 
                                desc: 'Auditing of massive datasets and ensuring critical information integrity.'
                            },
                            {
                                title: 'Report Optimization', 
                                desc: 'Automation of KPIs and streamlining of operational workflows.'
                            },
                            {
                                title: 'Technical Support', 
                                desc: 'IT incident resolution and end-user support in high-criticality environments.'
                            },
                        ],
                    },
                ],
            },

            projects: {
                main_title: 'Featured projects',
                secondary_title: 'Projects',
                card: {
                    label_architecture: 'Architecture',
                    label_methodology: 'Methodology',
                    label_modules: 'Modules',
                    label_stack: 'Stack',
                },
                list: [
                    {
                        id: 'planifly',
                        title: 'PLANIFLY AI',
                        category: 'Fintech & AI',
                        company: 'Personal Project',
                        type: 'Own SaaS',
                        shortDescription: 'AI-powered financial SaaS platform to automate personal expense tracking and financial analysis.',
                        details: {
                            architecture: 'Layered Architecture (Modular Monolith)',
                            methodology: 'Scrum',
                            modules: [
                                'Financial Dashboard',
                                'Budgets',
                                'Expenses',
                                'Reports',
                                'WhatsApp AI',
                                'AI Engine',
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
                        category: 'Agricultural ERP',
                        company: 'Agrovision Corp.',
                        type: 'Corporate',
                        shortDescription: 'Corporate ERP for comprehensive planning and control of agricultural operations at global scale.',
                        details: {
                            architecture: 'Layered Architecture',
                            methodology: 'Scrum',
                            modules: [
                                'Agricultural',
                                'Packing',
                                'R&D',
                                'Commercial',
                                'Budget',
                                'Costs',
                                'Projection',
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
                        category: 'Geospatial & Agrotech',
                        company: 'Agrovision Corp.',
                        type: 'Corporate',
                        shortDescription: 'Geospatial platform for real-time monitoring and tracking of harvest progress through interactive maps.',
                        details: {
                            architecture: 'Layered Architecture (Monolith)',
                            methodology: 'Scrum',
                            modules: [
                                'Harvest',
                                'Pre-Harvest',
                                'Passes',
                                'Validity Management',
                                'Shift Management',
                                'Lot Management',
                                'Row Management',
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
                        category: 'Corporate ETL & ELT',
                        company: 'Agrovision Corp.',
                        type: 'Corporate',
                        shortDescription: 'Corporate ETL & ELT platform to centralize, transform and synchronize large volumes of agricultural data.',
                        details: {
                            architecture: 'Layered Architecture (Monolith with Async Processing)',
                            methodology: 'Scrum',
                            modules: [
                                'Extraction Management',
                                'Process Orchestration',
                                'Pipeline Monitoring',
                                'Connection Management',
                                'Audit Logs',
                                'Admin Panel',
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
                        category: 'Personal Brand',
                        company: 'Gianmarco Linares Becerra',
                        type: 'Professional Portfolio',
                        shortDescription: 'Professional web platform to showcase experience, projects and technical skills as a Full Stack & DevOps Engineer.',
                        details: {
                            architecture: 'Modular SPA (Reusable Components)',
                            methodology: 'Iterative / Agile Development',
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
                main_title: 'Technology Stack',
                secondary_title: 'Technologies & Tools',
                backend: {
                    description: 'APIs, automation and business logic.',
                },
                frontend: {
                    description: 'Modern, scalable and responsive user interfaces.',
                },
                databases: {
                    description: 'Relational and NoSQL storage systems.',
                },
                devops: {
                    description: 'Automation, CI/CD and observability.',
                },
                cloud: {
                    description: 'Infrastructure and platform services.',
                },
                tools: {
                    description: 'Version control and team collaboration.',
                },
            },
        },
    },

    footer: {
        contact_title: 'Contact',
        contact_sub_title: "Let's talk about vacancies, projects or software ideas.",
        location_title: 'Location',
        send: 'Send message',
        placeholder_email: "you{'@'}email.com",
        placeholder_message: 'Tell me about your idea or job opening...',
    },

    status_personal: 'Available for new challenges',
};
