<script setup>
import { useI18n } from 'vue-i18n';
import { ArrowRight } from '@lucide/vue';
import ProjectPlaceholder from './ProjectPlaceholder.vue';
import { PROJECT_IMAGES } from './projects.data';

const { t } = useI18n();

defineProps({
    project: { type: Object, required: true },
});

const emit = defineEmits(['open']);
</script>

<template>
    <article
        class="card grid grid-cols-1 md:grid-cols-2 rounded-2xl border border-[var(--color-border-nav)] bg-[var(--color-bg-nav)]/20 overflow-hidden transition-all duration-400"
    >
        <!-- Imagen -->
        <div class="relative h-48 md:h-auto md:min-h-[300px] border-b md:border-b-0 md:border-r border-[var(--color-border-nav)]">
            <img
                v-if="PROJECT_IMAGES[project.id]"
                :src="PROJECT_IMAGES[project.id]"
                :alt="`${project.title} architecture`"
                class="w-full h-full object-cover"
            />
            <ProjectPlaceholder v-else :project-id="project.id" />
        </div>

        <!-- Info -->
        <div class="p-6 sm:p-7 flex flex-col">
            <div class="flex flex-wrap gap-2 mb-4">
                <span class="badge-solid px-3 py-1 rounded-full text-[9px] uppercase tracking-widest font-bold">
                    {{ project.category }}
                </span>
                <span class="badge-ghost px-3 py-1 rounded-full text-[9px] uppercase tracking-widest font-bold">
                    {{ project.type }}
                </span>
            </div>

            <h3 class="text-2xl sm:text-3xl font-black tracking-tighter text-[var(--color-text-nav-hover)] leading-none mb-1">
                {{ project.title }}
            </h3>
            <p class="font-mono text-xs text-[var(--color-text-nav)] mb-4">{{ project.company }}</p>

            <p class="text-sm text-[var(--color-text-nav)] leading-relaxed mb-6 flex-1">
                {{ project.shortDescription }}
            </p>

            <button
                @click="emit('open', project)"
                type="button"
                class="cta group/btn inline-flex items-center gap-2 self-start text-xs font-bold uppercase tracking-[0.1em] pb-1 transition-all duration-300 hover:gap-3"
            >
                <span>{{ t('landing.section.projects.card.view_detail') }}</span>
                <ArrowRight class="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </button>
        </div>
    </article>
</template>

<style scoped>
.card:hover {
    border-color: color-mix(in srgb, var(--color-primary) 40%, transparent);
    box-shadow: 0 20px 44px -22px color-mix(in srgb, var(--color-primary) 50%, transparent);
}

.badge-solid {
    background: var(--color-primary);
    color: var(--color-on-primary);
}

.badge-ghost {
    color: var(--color-text-nav);
    border: 1px solid var(--color-border-nav);
}
.card:hover .badge-ghost {
    color: var(--color-primary);
    border-color: color-mix(in srgb, var(--color-primary) 40%, transparent);
}

.cta {
    color: var(--color-text-nav-hover);
    border-bottom: 2px solid var(--color-text-nav-hover);
}
.cta:hover {
    color: var(--color-primary);
    border-bottom-color: var(--color-primary);
}
</style>