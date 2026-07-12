<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const stackGroups = computed(() => [
    {
        key: 'backend',
        title: 'Backend',
        description: t('landing.section.stack.backend.description'),
        skills: [
            { name: 'Node.js', iconClass: 'devicon-nodejs-plain' },
            { name: 'Python', iconClass: 'devicon-python-plain' },
            { name: 'Django', iconClass: 'devicon-django-plain' },
            { name: 'DRF', iconClass: 'devicon-djangorest-plain' },
            { name: 'FastAPI', iconClass: 'devicon-fastapi-plain' },
            { name: 'Pandas', iconClass: 'devicon-pandas-plain' },
        ],
    },
    {
        key: 'frontend',
        title: 'Frontend',
        description: t('landing.section.stack.frontend.description'),
        skills: [
            { name: 'Vue.js', iconClass: 'devicon-vuejs-plain' },
            { name: 'Nuxt', iconClass: 'devicon-nuxt-original' },
            { name: 'React', iconClass: 'devicon-react-original' },
            { name: 'JavaScript', iconClass: 'devicon-javascript-plain' },
            { name: 'TypeScript', iconClass: 'devicon-typescript-plain' },
            { name: 'Tailwind CSS', iconClass: 'devicon-tailwindcss-original' },
            { name: 'Vite', iconClass: 'devicon-vitejs-plain' },
        ],
    },
    {
        key: 'devops',
        title: 'DevOps',
        description: t('landing.section.stack.devops.description'),
        skills: [
            { name: 'Docker', iconClass: 'devicon-docker-plain' },
            { name: 'Kubernetes', iconClass: 'devicon-kubernetes-plain' },
            { name: 'Terraform', iconClass: 'devicon-terraform-plain' },
            { name: 'GitHub Actions', iconClass: 'devicon-githubactions-plain' },
            { name: 'Jenkins', iconClass: 'devicon-jenkins-line' },
            { name: 'Grafana', iconClass: 'devicon-grafana-plain' },
        ],
    },
    {
        key: 'cloud',
        title: 'Cloud',
        description: t('landing.section.stack.cloud.description'),
        skills: [
            { name: 'AWS', iconClass: 'devicon-amazonwebservices-plain-wordmark' },
            { name: 'Azure', iconClass: 'devicon-azure-plain' },
            { name: 'Google Cloud', iconClass: 'devicon-googlecloud-plain' },
            { name: 'Linux', iconClass: 'devicon-linux-plain' },
            { name: 'Nginx', iconClass: 'devicon-nginx-original' },
        ],
    },
    {
        key: 'databases',
        title: 'Databases',
        description: t('landing.section.stack.databases.description'),
        skills: [
            { name: 'PostgreSQL', iconClass: 'devicon-postgresql-plain' },
            { name: 'SQL Server', iconClass: 'devicon-microsoftsqlserver-plain' },
            { name: 'MongoDB', iconClass: 'devicon-mongodb-plain-wordmark' },
            { name: 'MariaDB', iconClass: 'devicon-mariadb-original' },
            { name: 'DynamoDB', iconClass: 'devicon-dynamodb-plain' },
        ],
    },
    {
        key: 'tools',
        title: 'Tools',
        description: t('landing.section.stack.tools.description'),
        skills: [
            { name: 'Git', iconClass: 'devicon-git-plain' },
            { name: 'GitHub', iconClass: 'devicon-github-original' },
            { name: 'GitLab', iconClass: 'devicon-gitlab-plain' },
            { name: 'Bitbucket', iconClass: 'devicon-bitbucket-original' },
            { name: 'Jira', iconClass: 'devicon-jira-plain' },
            { name: 'PNPM', iconClass: 'devicon-pnpm-plain' },
        ],
    },
]);

const totalSkills = computed(() =>
    stackGroups.value.reduce((acc, g) => acc + g.skills.length, 0)
);
</script>

<template>
    <section id="stack" class="relative w-full max-w-6xl mx-auto px-6 py-24">
        <!-- Header -->
        <div class="text-center mb-14">
            <div class="inline-flex items-center gap-2 mb-4 select-none">
                <span class="font-mono text-xs tracking-[0.15em] text-[var(--color-text-nav)]/60">$ stack</span>
                <span class="font-mono text-xs tracking-[0.15em]" style="color: var(--color-primary);">--list</span>
            </div>

            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter text-[var(--color-text-nav-hover)]">
                {{ t('landing.section.stack.main_title') }}
            </h2>

            <p class="font-mono text-[11px] text-[var(--color-text-nav)]/50 mt-3 tracking-wider">
                {{ totalSkills }} technologies · {{ stackGroups.length }} categories
            </p>
        </div>

        <!-- Bandas horizontales: 2 columnas en desktop, 3 filas -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
            <div
                v-for="(group, gi) in stackGroups"
                :key="group.key"
                class="band group/band relative flex flex-col rounded-2xl border border-[var(--color-border-nav)] bg-[var(--color-bg-nav)]/25 overflow-hidden transition-all duration-400 pl-5 pr-5 py-5"
            >
                <!-- Barra lateral: se llena con el acento en hover -->
                <span class="band-rail absolute left-0 top-0 bottom-0 w-[3px]" aria-hidden="true" />

                <!-- Cabecera: todo en una línea, sin desperdiciar alto -->
                <div class="flex items-baseline gap-2.5 mb-1.5">
                    <span class="band-index font-mono text-[10px] tracking-wider select-none transition-colors duration-400">
                        0{{ gi + 1 }}
                    </span>
                    <h3 class="text-xs font-black uppercase tracking-[0.2em] text-[var(--color-text-nav-hover)]">
                        {{ group.title }}
                    </h3>
                    <span class="band-count font-mono text-[10px] transition-colors duration-400">
                        {{ group.skills.length }}
                    </span>
                </div>

                <p class="text-xs leading-relaxed text-[var(--color-text-nav)] mb-4 line-clamp-2">
                    {{ group.description }}
                </p>

                <!-- Chips horizontales: ícono + nombre EN LÍNEA -->
                <div class="mt-auto flex flex-wrap gap-1.5">
                    <span
                        v-for="skill in group.skills"
                        :key="skill.name"
                        class="chip inline-flex items-center gap-1.5 pl-1.5 pr-2.5 py-1 rounded-lg transition-all duration-300"
                    >
                        <i :class="[skill.iconClass, 'colored', 'text-base leading-none transition-transform duration-300']" />
                        <span class="text-[10px] font-semibold whitespace-nowrap text-[var(--color-text-nav)] transition-colors duration-300">
                            {{ skill.name }}
                        </span>
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* Banda */
.band:hover {
    border-color: color-mix(in srgb, var(--color-primary) 35%, transparent);
    box-shadow: 0 14px 32px -18px color-mix(in srgb, var(--color-primary) 45%, transparent);
}

/* Riel lateral: crece de arriba abajo al hacer hover */
.band-rail {
    background: var(--color-primary);
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
}
.band:hover .band-rail {
    transform: scaleY(1);
}

/* Índice y contador: tenues, se encienden con la banda */
.band-index {
    color: color-mix(in srgb, var(--color-text-nav) 45%, transparent);
}
.band:hover .band-index {
    color: var(--color-primary);
}

.band-count {
    color: color-mix(in srgb, var(--color-text-nav) 40%, transparent);
}
.band:hover .band-count {
    color: var(--color-primary);
}

/* Chips: el color lo pone el devicon, el chrome se queda neutro */
.chip {
    background: color-mix(in srgb, var(--color-text-nav-hover) 4%, transparent);
    border: 1px solid var(--color-border-nav);
}
.chip:hover {
    background: color-mix(in srgb, var(--color-primary) 8%, transparent);
    border-color: color-mix(in srgb, var(--color-primary) 35%, transparent);
    transform: translateY(-2px);
}
.chip:hover i {
    transform: scale(1.15);
}
.chip:hover span {
    color: var(--color-text-nav-hover);
}

@media (prefers-reduced-motion: reduce) {
    .band, .band-rail, .band-index, .band-count, .chip { transition: none; }
}
</style>