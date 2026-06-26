export const projects = [
    {
        id: 'planifly',
        title: 'PLANIFLY AI',
        category: 'Fintech & AI',
        company: 'Proyecto Personal',
        type: 'SaaS Propio',

        shortDescription:
            'Plataforma SaaS financiera impulsada por Inteligencia Artificial para automatizar el registro y análisis de gastos.',

        details: {
            description:
                'Plataforma SaaS de gestión financiera personal impulsada por IA con integración WhatsApp, categorización automática y análisis financiero.',

            architecture:
                'Layered Architecture (Monolítica Modular)',

            methodology:
                'Scrum',

            modules: [
                'Dashboard Financiero',
                'Presupuestos',
                'Gastos',
                'Reportes',
                'WhatsApp AI',
                'Motor IA',
            ],

            security: [
                'JWT Authentication',
                'Refresh Tokens',
                'Role-based permissions',
                'Environment Variables',
            ],
        },

        stack: {
            Backend: [
                'Python',
                'Django',
                'DRF',
                'Channels',
                'Redis',
            ],

            Frontend: [
                'Vue 3',
                'Vite',
                'Tailwind',
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
            'ERP corporativo para planificación y control integral de operaciones agrícolas.',

        details: {
            description:
                'Sistema corporativo utilizado para la gestión agrícola global de Agrovision.',

            architecture:
                'Layered Architecture',

            methodology:
                'Scrum',

            modules: [
                'Agrícola',
                'Packing',
                'Comercial',
                'Presupuesto',
                'Costos',
            ],

            security: [
                'JWT Authentication',
                'Refresh Tokens',
                'Role-based permissions',
                'Environment Variables',
            ],
        },

        stack: {
            Backend: [
                'Python',
                'Django',
                'DRF',
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
];