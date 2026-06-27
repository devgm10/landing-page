<script setup>
import { useI18n } from 'vue-i18n';
import ProjectCard from './projects/ProjectCard.vue';
import { useProjects } from './projects/projects.data';

const { t } = useI18n();
const projects = useProjects();
</script>

<template>
    <section
        id="projects"
        class="relative max-w-6xl mx-auto px-6 py-24"
    >
        <!-- Header -->
        <div class="text-center mb-16">
            <div class="flex items-center justify-center gap-2 mb-2">
                <span class="relative flex h-1.5 w-1.5">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                </span>
                <span class="text-[10px] font-medium tracking-wider uppercase text-emerald-600 dark:text-emerald-400/80">
                    {{ t('landing.section.projects.secondary_title') }}
                </span>
            </div>

            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-swanky text-[var(--color-text-nav-hover)] dark:text-white">
                {{ t('landing.section.projects.main_title') }}
            </h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ProjectCard
                v-for="project in projects"
                :key="project.id"
                :project="project"
            />
        </div>
    </section>
</template>
