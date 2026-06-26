<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const stackGroups = computed(() => [
    {
        title: 'Backend',
        description: t('landing.section.stack.backend.description'),
        skills: [
            { name: 'Python', iconClass: 'devicon-python-plain' },
            { name: 'Django', iconClass: 'devicon-django-plain' },
            { name: 'DRF', iconClass: 'devicon-djangorest-plain' },
            { name: 'FastAPI', iconClass: 'devicon-fastapi-plain' },
            { name: 'Pandas', iconClass: 'devicon-pandas-plain' },
        ],
    },

    {
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
        title: 'Databases',
        description: t('landing.section.stack.databases.description'),
        skills: [
            { name: 'PostgreSQL', iconClass: 'devicon-postgresql-plain' },
            {
                name: 'SQL Server',
                iconClass: 'devicon-microsoftsqlserver-plain',
            },
            { name: 'MongoDB', iconClass: 'devicon-mongodb-plain-wordmark' },
            { name: 'MariaDB', iconClass: 'devicon-mariadb-original' },
            { name: 'DynamoDB', iconClass: 'devicon-dynamodb-plain' },
        ],
    },

    {
        title: 'DevOps',
        description: t('landing.section.stack.devops.description'),
        skills: [
            { name: 'Docker', iconClass: 'devicon-docker-plain' },
            { name: 'Kubernetes', iconClass: 'devicon-kubernetes-plain' },
            { name: 'Terraform', iconClass: 'devicon-terraform-plain' },
            {
                name: 'GitHub Actions',
                iconClass: 'devicon-githubactions-plain',
            },
            { name: 'Jenkins', iconClass: 'devicon-jenkins-line' },
            { name: 'Grafana', iconClass: 'devicon-grafana-plain' },
        ],
    },

    {
        title: 'Cloud',
        description: t('landing.section.stack.cloud.description'),
        skills: [
            {
                name: 'AWS',
                iconClass: 'devicon-amazonwebservices-plain-wordmark',
            },
            { name: 'Azure', iconClass: 'devicon-azure-plain' },
            { name: 'Google Cloud', iconClass: 'devicon-googlecloud-plain' },
            { name: 'Linux', iconClass: 'devicon-linux-plain' },
            { name: 'Nginx', iconClass: 'devicon-nginx-original' },
        ],
    },

    {
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
</script>

<template>
    <section
        id="stack"
        class="relative w-full max-w-6xl mx-auto px-6 py-24"
    >
        <!-- Header -->
        <div class="text-center mb-16">
            <div class="flex items-center justify-center gap-2 mb-4">
                <span class="relative flex h-1.5 w-1.5">
                    <span
                        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
                    />
                    <span
                        class="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"
                    />
                </span>

                <span
                    class="
                        text-[10px]
                        font-medium
                        tracking-wider
                        uppercase
                        text-emerald-600
                        dark:text-emerald-400/80
                    "
                >
                    {{ t('landing.section.stack.secondary_title') }}
                </span>
            </div>

            <h2
                class="
                    text-3xl
                    sm:text-5xl
                    font-swanky
                    text-[var(--color-text-nav-hover)]
                    dark:text-white
                "
            >
                {{ t('landing.section.stack.main_title') }}
            </h2>
        </div>

        <!-- Categories -->
        <div class="space-y-10">
            <div
                v-for="group in stackGroups"
                :key="group.title"
                class="space-y-8"
            >
                <!-- Category Header -->
                <div class="text-center">
                    <h3
                        class="
                            text-xs
                            font-black
                            uppercase
                            tracking-[0.35em]
                            text-[var(--color-primary)]
                            mb-3
                        "
                    >
                        {{ group.title }}
                    </h3>

                    <p
                        class="
                            text-sm
                            text-zinc-500
                            dark:text-zinc-500
                            max-w-xl
                            mx-auto
                        "
                    >
                        {{ group.description }}
                    </p>
                </div>

                <!-- Skills -->
                <div
                    class="
                        flex
                        flex-wrap
                        justify-center
                        gap-x-8
                        gap-y-6
                    "
                >
                    <div
                        v-for="skill in group.skills"
                        :key="skill.name"
                        class="
                            flex
                            flex-col
                            items-center
                            gap-2
                            group
                            min-w-[70px]
                        "
                    >
                        <i
                            :class="[
                                skill.iconClass,
                                `
                                text-2xl
                                text-[var(--color-text-nav-hover)]
                                dark:text-zinc-300
                                group-hover:text-[var(--color-primary)]
                                transition-all
                                duration-300
                                group-hover:scale-110
                                `
                            ]"
                        />

                        <span
                            class="
                                text-[11px]
                                font-medium
                                text-zinc-500
                                dark:text-zinc-500
                                text-center
                                group-hover:text-[var(--color-primary)]
                                transition-colors
                                duration-300
                            "
                        >
                            {{ skill.name }}
                        </span>
                    </div>
                </div>

                <!-- Separator -->
                <div
                    v-if="group.title !== stackGroups[stackGroups.length - 1].title"
                    class="
                        h-px
                        w-full
                        bg-gradient-to-r
                        from-transparent
                        via-zinc-200
                        dark:via-zinc-800
                        to-transparent
                        mt-8
                    "
                />
            </div>
        </div>
    </section>
</template>