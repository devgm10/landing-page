<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import ProjectCard from './projects/ProjectCard.vue';
import ProjectModal from './projects/ProjectModal.vue';
import { useProjects } from './projects/projects.data';

const { t } = useI18n();
const projects = useProjects();

const selectedProject = ref(null);

const featured = computed(() => projects.value[0] ?? null);
const rest = computed(() => projects.value.slice(1));

const openModal = (project) => { selectedProject.value = project; };
const closeModal = () => { selectedProject.value = null; };
</script>

<template>
    <section id="projects" class="relative max-w-6xl mx-auto px-6 py-24">
        <!-- Header -->
        <div class="text-center mb-14">
            <div class="inline-flex items-center gap-2 mb-4 select-none">
                <span class="font-mono text-xs tracking-[0.15em] text-[var(--color-text-nav)]/60">$ ls</span>
                <span class="font-mono text-xs tracking-[0.15em]" style="color: var(--color-primary);">./projects</span>
            </div>

            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter text-[var(--color-text-nav-hover)]">
                {{ t('landing.section.projects.main_title') }}
            </h2>

            <p class="font-mono text-[11px] text-[var(--color-text-nav)]/50 mt-3 tracking-wider">
                {{ projects.length }} projects
            </p>
        </div>

        <!-- Destacado -->
        <ProjectCard
            v-if="featured"
            :project="featured"
            featured
            class="mb-4 sm:mb-5"
            @open="openModal"
        />

        <!-- Resto en 2x2 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            <ProjectCard
                v-for="project in rest"
                :key="project.id"
                :project="project"
                @open="openModal"
            />
        </div>

        <ProjectModal
            v-if="selectedProject"
            :project="selectedProject"
            @close="closeModal"
        />
    </section>
</template>