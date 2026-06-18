<script setup>
const techStack = [
    { name: 'Python', iconClass: 'devicon-python-plain' },
    { name: 'Django', iconClass: 'devicon-django-plain' },
    { name: '', iconClass: 'devicon-djangorest-plain' },
    { name: 'Fastapi', iconClass: 'devicon-fastapi-plain' },
    { name: 'Pandas', iconClass: 'devicon-pandas-plain' },

    { name: 'Pnpm', iconClass: 'devicon-pnpm-plain' },
    { name: '', iconClass: 'devicon-npm-original-wordmark' },
    { name: 'Node.js', iconClass: 'devicon-nodejs-plain-wordmark' },
    { name: 'JavaScript', iconClass: 'devicon-javascript-plain' },
    { name: 'TypeScript', iconClass: 'devicon-typescript-plain' },
    { name: 'Vue.js', iconClass: 'devicon-vuejs-plain-wordmark' },
    { name: 'React', iconClass: 'devicon-react-original' },
    { name: 'Nuxt', iconClass: 'devicon-nuxt-original' },
    { name: 'Vitejs', iconClass: 'devicon-vitejs-plain' },
    { name: 'Tailwindcss', iconClass: 'devicon-tailwindcss-original' },

    { name: 'PostgreSQL', iconClass: 'devicon-postgresql-plain' },
    { name: 'Sql Server', iconClass: 'devicon-microsoftsqlserver-plain' },
    { name: 'Mongo DB', iconClass: 'devicon-mongodb-plain-wordmark' },
    { name: 'Maria DB', iconClass: 'devicon-mariadb-original' },
    { name: 'Dynamon DB', iconClass: 'devicon-dynamodb-plain' },

    { name: 'Docker', iconClass: 'devicon-docker-plain' },
    { name: 'Kubernetes', iconClass: 'devicon-kubernetes-plain' },
    { name: 'Terraform', iconClass: 'devicon-terraform-plain' },
    { name: 'GitHub Actions', iconClass: 'devicon-githubactions-plain' },
    { name: 'Jenkins', iconClass: 'devicon-jenkins-line' },
    { name: 'Grafana', iconClass: 'devicon-grafana-plain' },
    { name: 'Swagger', iconClass: 'devicon-swagger-plain' },

    { name: '', iconClass: 'devicon-amazonwebservices-plain-wordmark' },
    { name: 'Azure', iconClass: 'devicon-azure-plain' },
    { name: 'GCP', iconClass: 'devicon-googlecloud-plain' },

    { name: 'Linux', iconClass: 'devicon-linux-plain' },
    { name: '', iconClass: 'devicon-nginx-original' },

    { name: 'Git', iconClass: 'devicon-git-plain' },
    { name: 'GitHub', iconClass: 'devicon-github-original' },
    { name: 'GitLab', iconClass: 'devicon-gitlab-plain' },
    { name: 'Bitbucket', iconClass: 'devicon-bitbucket-original' },

    { name: 'Jira', iconClass: 'devicon-jira-plain' },

];
</script>

<template>
    <div
        class="w-full overflow-hidden pb-2 mt-2 select-none animate-fade-in-up [animation-delay:600ms] tech-marquee-mask relative z-20"
    >
        <div
            class="flex gap-12 items-center whitespace-nowrap animate-marquee hover:[animation-play-state:paused]"
        >
            <div
                v-for="(tech, index) in techStack"
                :key="'tech-1-' + index"
                class="inline-flex items-center gap-2.5 opacity-50 hover:opacity-100 transition-opacity duration-300 group/item"
            >
                <i
                    :class="[
                        tech.iconClass,
                        'text-2xl sm:text-3xl transition-transform duration-300 group-hover/item:scale-110 text-[var(--color-text-nav-hover)] hover:text-[var(--color-primary)]',
                    ]"
                />

                <span
                    class="text-xs font-bold uppercase tracking-wider text-[var(--color-text-nav-hover)]"
                >
                    {{ tech.name }}
                </span>
            </div>

            <div
                v-for="(tech, index) in techStack"
                :key="'tech-2-' + index"
                class="inline-flex items-center gap-2.5 opacity-50 hover:opacity-100 transition-opacity duration-300 group/item"
                aria-hidden="true"
            >
                <i
                    :class="[
                        tech.iconClass,
                        'text-2xl sm:text-3xl transition-transform duration-300 group-hover/item:scale-110 text-[var(--color-text-nav-hover)] hover:text-[var(--color-primary)]',
                    ]"
                />

                <span
                    class="text-xs font-bold uppercase tracking-wider text-[var(--color-text-nav-hover)]"
                >
                    {{ tech.name }}
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.tech-marquee-mask {
    mask-image: linear-gradient(
        to right,
        transparent,
        #000 12%,
        #000 88%,
        transparent
    );

    -webkit-mask-image: linear-gradient(
        to right,
        transparent,
        #000 12%,
        #000 88%,
        transparent
    );
}

.animate-fade-in-up {
    animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both !important;
}

.animate-marquee {
    display: inline-flex;
    width: max-content;
    animation: marquee 80s linear infinite;
}

@keyframes marquee {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-50%);
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(16px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>