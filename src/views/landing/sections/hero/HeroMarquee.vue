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
    <div class="w-full overflow-hidden pb-2 mt-2 select-none animate-fade-in-up [animation-delay:1500ms] tech-marquee-mask relative z-20">
        <div class="flex gap-10 items-center whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
            <template v-for="dup in 2">
                <div
                    v-for="(tech, index) in techStack"
                    :key="'tech-' + dup + '-' + index"
                    class="inline-flex items-center gap-2 opacity-40 hover:opacity-100 transition-opacity duration-300 group/item"
                    :aria-hidden="dup === 2 ? 'true' : undefined"
                >
                    <i :class="[tech.iconClass, 'text-2xl sm:text-3xl transition-all duration-300 group-hover/item:scale-110 group-hover/item:text-[var(--color-primary)] text-[var(--color-text-nav-hover)]']" />
                    <span v-if="tech.name" class="text-xs font-bold uppercase tracking-wider text-[var(--color-text-nav-hover)]">
                        {{ tech.name }}
                    </span>
                </div>
            </template>
        </div>
    </div>
</template>

<style scoped>
.tech-marquee-mask {
    overflow: hidden;

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

.animate-marquee {
    display: flex;
    flex-wrap: nowrap;
    width: fit-content;
    min-width: 100%;
    will-change: transform;
    animation: marquee 80s linear infinite;
}

@media (prefers-reduced-motion: reduce) {
    .animate-marquee {
        animation: none;
    }
}

.animate-fade-in-up {
    animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
}
@media (prefers-reduced-motion: reduce) {
    .animate-fade-in-up { animation: none; }
}

@keyframes marquee {
    from {
        transform: translate3d(0, 0, 0);
    }

    to {
        transform: translate3d(-50%, 0, 0);
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