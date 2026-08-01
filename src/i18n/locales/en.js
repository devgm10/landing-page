export default {
    topbar: {
        home: 'Home',
        about: 'About Me',
        stack: 'Tech Stack',
        projects: 'Projects',
        experience: 'Experience',
        testimonials:  'Testimonials'
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
                    section_label: 'My process',
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
                    view_detail: 'View detail',
                    label_overview: 'Overview',
                    label_highlights: 'Key highlights',
                    label_capabilities: 'Capabilities',
                    label_impact: 'Impact',
                },
                list: [
                    {
                        id: 'planifly',
                        title: 'PLANIFLY AI',
                        category: 'Fintech & AI',
                        company: 'Personal Project',
                        type: 'Own SaaS',

                        shortDescription:
                            'AI-powered financial SaaS platform that combines artificial intelligence and automation to turn natural conversations into structured financial records and enable smarter personal finance management.',

                        overview:
                            'Planifly was created to reduce the friction involved in tracking and managing personal expenses. The platform introduces a more natural financial experience, allowing users to interact with their finances through a web interface and an AI-powered conversational assistant.',

                        highlights: [
                            'Designed a modular architecture focused on separating the core capabilities of the financial domain.',
                            'Integrated Artificial Intelligence to interpret natural language interactions and transform them into structured financial data.',
                            'Implemented real-time communication using WebSockets and Django Channels.',
                            'Built financial dashboards and interactive data visualizations for expense and budget analysis.',
                            'Designed a conversational experience aimed at reducing friction between users and their everyday financial tracking.',
                        ],

                        impact:
                            'The platform aims to transform traditional expense tracking into a faster and more natural experience, reducing the number of steps required to record financial transactions while turning financial data into actionable insights for personal decision-making.',

                        details: {
                            architecture: 'Layered Architecture (Modular Monolith)',
                            methodology: 'Scrum',
                            capabilities: [
                                'Financial Dashboard',
                                'Expense Management',
                                'Budget Management',
                                'Analytics & Reports',
                                'AI Financial Assistant',
                                'Conversational Interaction',
                                'AI Processing Engine',
                                'Real-Time Communication',
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
                        category: 'Agricultural ERP',
                        company: 'Agrovision Corp.',
                        type: 'Corporate',

                        shortDescription:
                            'Enterprise agricultural ERP platform designed to centralize the planning, management, and control of production operations across multiple business areas within a unified ecosystem.',

                        overview:
                            'PCG AGRO is an enterprise platform designed to digitize and centralize critical agricultural operations. The solution brings together multiple business areas within a single ecosystem, enabling teams to manage operational, financial, and production data through a centralized platform.',

                        highlights: [
                            'Designed and developed enterprise modules supporting multiple areas of the agricultural business.',
                            'Implemented REST APIs to centralize and expose core business logic.',
                            'Built dynamic interfaces for managing large volumes of structured and tabular data.',
                            'Integrated planning, budgeting, cost management, and forecasting processes into a unified platform.',
                            'Developed solutions designed to support complex agricultural and enterprise-scale business processes.',
                        ],

                        impact:
                            'The platform centralizes information across multiple business areas, providing an integrated view of operations and enabling teams to improve planning, monitoring, and analysis of agricultural and financial processes.',

                        details: {
                            architecture: 'Layered Architecture',
                            methodology: 'Scrum',
                            capabilities: [
                                'Agricultural Operations Management',
                                'Packing Management',
                                'Research & Development',
                                'Commercial Management',
                                'Budget Planning',
                                'Cost Management',
                                'Operational Forecasting',
                                'Enterprise Data Management',
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
                        category: 'Geospatial & Agrotech',
                        company: 'Agrovision Corp.',
                        type: 'Corporate',

                        shortDescription:
                            'Geospatial platform for digitizing harvest operations through interactive maps, operational data, and real-time communication.',

                        overview:
                            'HARVEST is a specialized platform for visualizing and monitoring agricultural operations through geospatial data and interactive maps. The solution connects operational information with a visual representation of the terrain, enabling teams to monitor harvest activities and operational progress in a more dynamic and intuitive way.',

                        highlights: [
                            'Integrated geospatial information with agricultural operational processes.',
                            'Built interactive map-based visualization of fields, rows, and operational areas.',
                            'Implemented real-time communication using WebSockets.',
                            'Processed and generated geospatial information using SimpleKML.',
                            'Developed dynamic interfaces for managing and visualizing operational data.',
                            'Integrated Google Maps API to represent geographic and operational information.',
                        ],

                        impact:
                            'The platform transforms harvest operations data into an interactive geospatial experience, making it easier to monitor operational progress and providing teams with a clearer view of agricultural activities across the field.',

                        details: {
                            architecture: 'Layered Architecture (Monolithic)',
                            methodology: 'Scrum',
                            capabilities: [
                                'Harvest Monitoring',
                                'Pre-Harvest Management',
                                'Pass Tracking',
                                'Validity Management',
                                'Shift Management',
                                'Field Management',
                                'Row Management',
                                'Geospatial Visualization',
                                'Real-Time Updates',
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
                        category: 'Data Engineering & ETL',
                        company: 'Agrovision Corp.',
                        type: 'Corporate',

                        shortDescription:
                            'Enterprise data integration and processing platform designed to automate ETL and ELT pipelines, centralize information from multiple sources, and keep agricultural data synchronized across systems.',

                        overview:
                            'Scraping Agro is a data integration platform developed to automate the extraction, transformation, and loading of information from multiple sources and systems. The solution centralizes data pipeline management and enables transformation processes to run in a controlled, traceable, and scalable manner.',

                        highlights: [
                            'Designed ETL and ELT pipelines to integrate data from multiple sources and systems.',
                            'Processed and transformed large datasets using Python and Pandas.',
                            'Implemented asynchronous processing workflows using Celery and Redis.',
                            'Integrated with different database engines and data sources using SQLAlchemy.',
                            'Implemented monitoring and traceability mechanisms for data integration processes.',
                            'Centralized connection management and extraction configurations.',
                            'Implemented logging and audit capabilities to track pipeline executions and failures.',
                        ],

                        impact:
                            'The platform reduces reliance on manual data integration processes by automating the movement of information across multiple sources and systems, improving data availability, traceability, and consistency throughout the organization.',

                        details: {
                            architecture: 'Layered Architecture with Asynchronous Processing',
                            methodology: 'Scrum',
                            capabilities: [
                                'Extraction Management',
                                'Pipeline Design & Execution',
                                'Process Orchestration',
                                'Asynchronous Processing',
                                'Data Transformation',
                                'Execution Monitoring',
                                'Connection Management',
                                'Logging & Auditing',
                                'Administrative Dashboard',
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
                        category: 'Personal Branding & Engineering',
                        company: 'Gianmarco Linares Becerra',
                        type: 'Professional Portfolio',

                        shortDescription:
                            'Professional web platform designed and built as a personal digital product to showcase my experience, projects, and capabilities as a Full Stack & DevOps Engineer.',

                        overview:
                            'This portfolio was designed as a digital experience focused on communicating my professional journey while demonstrating my capabilities through a real-world product. The project combines modern frontend development, software architecture, user experience, and DevOps practices from development to deployment.',

                        highlights: [
                            'Designed a modular frontend architecture based on reusable components.',
                            'Implemented multilingual support to improve accessibility and reach a broader audience.',
                            'Built a theme management system for personalized visual preferences.',
                            'Designed a responsive experience adapted to different devices and screen sizes.',
                            'Integrated an independent serverless microservice to process contact form submissions.',
                            'Containerized the application using Docker.',
                            'Configured and deployed cloud infrastructure to make the platform publicly available.',
                        ],

                        impact:
                            'The project serves as a practical demonstration of my ability to take a digital product from design and development through deployment, combining modern frontend engineering, decoupled services, cloud infrastructure, and DevOps practices.',

                        details: {
                            architecture:
                                'Modular SPA with Reusable Components and Decoupled Services',
                            methodology: 'Iterative / Agile Development',
                            capabilities: [
                                'Professional Profile',
                                'User Experience',
                                'Multilingual Support',
                                'Theme Management',
                                'Responsive Design',
                                'Projects Portfolio',
                                'Professional Experience',
                                'Contact System',
                                'Serverless Notification Service',
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
                    {
                        id: 'open-data-etl-platform',
                        title: 'OPEN DATA ETL PLATFORM',
                        category: 'Data Engineering & Cloud',
                        company: 'Personal Project',
                        type: 'Cloud-Native Lab',

                        shortDescription:
                            'Experimental Data Engineering platform designed to execute ETL processes on a cloud-native architecture over AWS, integrating CI/CD, containers, Infrastructure as Code, Kubernetes, and automation best practices.',

                        overview:
                            'Open Data ETL Platform was created as a technical lab to take an ETL process from local Python execution to a modern architecture deployed on AWS. The project separates the application and infrastructure into independent repositories, allowing the full workflow to be validated from ETL development, Docker image creation, Amazon ECR publishing, and execution as a Kubernetes Job inside Amazon EKS.',

                        highlights: [
                            'Designed a modular Python ETL application applying separation of responsibilities and Object-Oriented Programming principles.',
                            'Implemented an ETL workflow that consumes a public API, stores raw data as JSON, transforms data with Pandas, validates data quality, and generates a processed dataset.',
                            'Built a Docker image using a multi-stage Dockerfile designed for development and production environments.',
                            'Automated the CI/CD pipeline with GitHub Actions to run quality checks, tests, Docker image builds, and publishing to Amazon ECR.',
                            'Designed modular infrastructure with Terraform and Terraform Cloud, separating networking, security, artifact registry, EKS, and CI/CD integration components.',
                            'Configured secure authentication through OIDC between GitHub Actions, Terraform Cloud, and AWS, avoiding static access keys in pipelines.',
                            'Deployed and executed the ETL as a Kubernetes Job inside Amazon EKS, using ConfigMap to decouple application configuration.',
                            'Implemented a cost-safe approach using Terraform variables to enable and disable resources such as VPC and EKS depending on lab needs.',
                        ],

                        impact:
                            'The project validated a realistic cloud-native foundation for Data Engineering processes, connecting software development, DevOps, Infrastructure as Code, and batch workload execution on Kubernetes. It also established the foundation to evolve into a scalable platform capable of supporting multiple reusable ETLs, orchestration with Argo Workflows, storage in an S3 Data Lake, and loading curated data into a Data Warehouse.',

                        details: {
                            architecture: 'Modular Cloud-Native Architecture',
                            methodology: 'Iterative Lab',
                            capabilities: [
                                'Data Extraction from a Public API',
                                'Python ETL Processing',
                                'Data Quality Validation',
                                'Multi-Stage Dockerization',
                                'CI/CD Pipeline',
                                'Docker Image Publishing to Amazon ECR',
                                'Infrastructure as Code',
                                'OIDC Authentication without Static Access Keys',
                                'Amazon EKS Deployment',
                                'Execution through Kubernetes Job',
                                'Configuration through ConfigMap',
                                'Cost Control with Terraform Variables',
                                'Separation between Application and Infrastructure',
                                'Foundation for Multiple Reusable ETLs',
                            ],
                        },

                        stack: {
                            Backend: [
                                'Python',
                                'Pandas',
                                'Pytest',
                                'Ruff',
                                'Pydantic Settings',
                                'HTTPX',
                            ],
                            DevOps: [
                                'Docker',
                                'GitHub Actions',
                                'Terraform',
                                'Terraform Cloud',
                                'Amazon ECR',
                                'Amazon EKS',
                                'Kubernetes',
                                'ConfigMap',
                                'Kubernetes Job',
                                'OIDC',
                                'IAM',
                            ],
                            Cloud: [
                                'AWS',
                                'VPC',
                                'Subnets',
                                'NAT Gateway',
                                'IAM',
                                'Amazon ECR',
                                'Amazon EKS',
                                'Managed Node Group',
                            ],
                            Future: [
                                'Argo Workflows',
                                'Polars',
                                'Apache Spark',
                                'Amazon S3 Data Lake',
                                'Data Warehouse',
                                'Observability',
                                'Scheduled Pipelines',
                            ],
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

            testimonials: {
                main_title: 'Recommendations',
                secondary_title: 'Testimonials',
                translated_note: 'Translated from Spanish',
                list: [
                    {
                        name: 'Luis Quiroz',
                        role: 'Software Applications Analyst',
                        company: 'Agrovision Perú',
                        rating: 5,
                        comment: 'I had the opportunity to work with Gianmarco on the development of an agricultural planning system, where he demonstrated a solid command of backend development, particularly with Django, along with strong integration with a Vue frontend. He stands out for his ability to structure scalable solutions, keep code well organized, and apply best practices in API design and data handling. He also shows a strong focus on business logic and process optimization, which was key to the system working correctly. He is committed, responsible, and a willing team player.',
                    },
                    {
                        name: 'Anthony Castillo',
                        role: 'GIS Programmer Analyst',
                        company: 'Agrovision Corp',
                        rating: 5,
                        comment: 'Excellent work. He keeps the code clean and reuses recurring functions across every module and component, on both the frontend and the backend.',
                    },
                    {
                        name: 'Jeremy Reyes',
                        role: 'Freelance Developer',
                        company: 'Agrovision',
                        rating: 5,
                        comment: 'I had the chance to work with him on a development project and it was an excellent experience. He is highly responsible, technically strong, and always brings the right attitude to any challenge. Without a doubt, a professional you can trust to carry a project through.',
                    },
                    {
                        name: 'Hernán Machaca',
                        role: 'Management Control Lead',
                        company: 'Agrovision',
                        rating: 5,
                        comment: 'Solid development capability, meeting objectives on time and to specification. Good communication.',
                    },
                    {
                        name: 'Wilson Choquehuanca',
                        role: 'Data Engineer',
                        company: 'Agrovision',
                        rating: 5,
                        comment: 'A very good professional. He enjoys learning new things and takes initiative on projects.',
                    },
                    {
                        name: 'Jaime Cueva',
                        role: 'Information Management Deputy Manager',
                        company: 'Agrovision',
                        rating: 5,
                        comment: 'Works well remotely, goal-oriented, delivers significant results, and performs well under pressure.',
                    },
                ],
            },
        },
    },

    footer: {
        contact_title: 'Contact',
        contact_sub_title: "Let's talk about vacancies, projects or software ideas.",
        location_title: 'Location',
        sending: 'Sending...',
        send: 'Send message',
        placeholder_name: "Name *",
        placeholder_email: "you{'@'}email.com",
        placeholder_message: 'Tell me about your idea or job opening...',
        placeholder_company: 'Company (optional)',
        placeholder_subject: 'Subject (optional)',
        success_title: 'Message sent!',
        success_text: 'Thanks for reaching out. I\'ll get back to you as soon as possible.',
        success_again: 'Send another message',
        errors: {
            name_required: 'This field is required',
            name_min: 'Too short',
            name_max: 'Too long',
            email_required: 'This field is required',
            email_invalid: 'Invalid email format',
            message_required: 'This field is required',
            message_min: 'Too short',
            message_max: 'Too long',
            company_max: 'Too long',
            subject_max: 'Too long',
        },
    },

    status_personal: 'Available for new challenges',
};
