<script setup>
import { ref, nextTick } from 'vue';
import { useI18n } from 'vue-i18n';

import ProjectCard from './projects/ProjectCard.vue';
import { projects } from './projects/projects.data';

const { t } = useI18n();

const expandedId = ref(null);

const toggleProject = async (id) => {
    const isOpening =
        expandedId.value !== id;

    expandedId.value =
        expandedId.value === id
            ? null
            : id;

    if (isOpening) {
        await nextTick();

        const projectElement =
            document.getElementById(
                `project-${id}`
            );

        projectElement?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
};
</script>

<template>
    <section
        id="projects"
        class="
            relative
            max-w-6xl
            mx-auto
            px-6
            py-24
        "
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
                    class="text-[10px] font-medium tracking-wider uppercase text-emerald-600 dark:text-emerald-400/80"
                >
                    {{ t('landing.section.projects.secondary_title') }}
                </span>
            </div>

            <h2
                class="text-3xl sm:text-5xl font-swanky text-[var(--color-text-nav-hover)] dark:text-white"
            >
                {{ t('landing.section.projects.main_title') }}
            </h2>
        </div>

        <div class="space-y-8">
            <ProjectCard
                v-for="project in projects"
                :key="project.id"
                :project="project"
                :is-expanded="expandedId === project.id"
                @toggle="toggleProject"
            />
        </div>
    </section>
</template>