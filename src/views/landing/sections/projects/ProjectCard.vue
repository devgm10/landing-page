<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { ArrowUpRight } from '@lucide/vue';
import ProjectPlaceholder from './ProjectPlaceholder.vue';
import { PROJECT_IMAGES } from './projects.data';

const { t } = useI18n();

const props = defineProps({
    project: { type: Object, required: true },
    featured: { type: Boolean, default: false },
});

const emit = defineEmits(['open']);

// Muestra unas pocas tecnologías como anticipo
const previewStack = computed(() => {
    const groups = Object.values(props.project.stack ?? {});
    return groups.flat().slice(0, props.featured ? 6 : 4);
});

const extraCount = computed(() => {
    const total = Object.values(props.project.stack ?? {}).flat().length;
    return Math.max(total - previewStack.value.length, 0);
});
</script>

<template>
    <article
        class="card group relative flex overflow-hidden rounded-2xl border border-[var(--color-border-nav)] bg-[var(--color-bg-nav)]/20 transition-all duration-400 cursor-pointer"
        :class="featured ? 'flex-col md:flex-row' : 'flex-col'"
        @click="emit('open', project)"
    >
        <!-- Visual -->
        <div
            class="relative shrink-0 overflow-hidden border-[var(--color-border-nav)]"
            :class="featured
                ? 'h-48 md:h-auto md:w-[42%] border-b md:border-b-0 md:border-r'
                : 'h-40 border-b'"
        >
            <img
                v-if="PROJECT_IMAGES[project.id]"
                :src="PROJECT_IMAGES[project.id]"
                :alt="`${project.title} architecture`"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <ProjectPlaceholder v-else :project-id="project.id" />
        </div>

        <!-- Info -->
        <div class="flex flex-col flex-1 p-5 sm:p-6">
            <div class="flex flex-wrap items-center gap-2 mb-3">
                <span class="badge-solid px-2.5 py-1 rounded-full text-[9px] uppercase tracking-widest font-bold">
                    {{ project.category }}
                </span>
                <span class="badge-ghost px-2.5 py-1 rounded-full text-[9px] uppercase tracking-widest font-bold">
                    {{ project.type }}
                </span>
            </div>

            <h3
                class="font-display font-black tracking-tighter text-[var(--color-text-nav-hover)] leading-none mb-1"
                :class="featured ? 'text-2xl sm:text-3xl' : 'text-xl'"
            >
                {{ project.title }}
            </h3>

            <p class="font-mono text-[11px] text-[var(--color-text-nav)] mb-3">
                {{ project.company }}
            </p>

            <p
                class="text-sm leading-relaxed text-[var(--color-text-nav)] mb-5"
                :class="featured ? '' : 'line-clamp-3'"
            >
                {{ project.shortDescription }}
            </p>

            <!-- Anticipo del stack -->
            <div class="mt-auto flex flex-wrap gap-1.5 mb-4">
                <span
                    v-for="tech in previewStack"
                    :key="tech"
                    class="tech-chip px-2 py-0.5 rounded text-[10px] font-medium"
                >
                    {{ tech }}
                </span>
                <span
                    v-if="extraCount"
                    class="px-2 py-0.5 rounded text-[10px] font-mono text-[var(--color-text-nav)]/50"
                >
                    +{{ extraCount }}
                </span>
            </div>

            <span class="cta inline-flex items-center gap-1.5 self-start text-[11px] font-bold uppercase tracking-[0.1em] transition-all duration-300">
                {{ t('landing.section.projects.card.view_detail') }}
                <ArrowUpRight class="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
        </div>
    </article>
</template>

<style scoped>
.card:hover {
    border-color: color-mix(in srgb, var(--color-primary) 40%, transparent);
    box-shadow: 0 18px 40px -22px color-mix(in srgb, var(--color-primary) 50%, transparent);
    transform: translateY(-3px);
}

.badge-solid {
    background: var(--color-primary);
    color: var(--color-on-primary);
}

.badge-ghost {
    color: var(--color-text-nav);
    border: 1px solid var(--color-border-nav);
}

.tech-chip {
    background: color-mix(in srgb, var(--color-primary) 8%, transparent);
    color: var(--color-text-nav);
    border: 1px solid color-mix(in srgb, var(--color-primary) 18%, transparent);
}

.cta {
    color: var(--color-text-nav-hover);
}
.card:hover .cta {
    color: var(--color-primary);
}

@media (prefers-reduced-motion: reduce) {
    .card, .cta { transition: none; }
}
</style>