<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { X, Layers, GitBranch, Sparkles } from '@lucide/vue';
import ProjectPlaceholder from './ProjectPlaceholder.vue';
import { PROJECT_IMAGES } from './projects.data';

const { t } = useI18n();

defineProps({
    project: { type: Object, required: true },
});

const emit = defineEmits(['close']);

const handleKeydown = (e) => {
    if (e.key === 'Escape') emit('close');
};

onMounted(() => {
    document.addEventListener('keydown', handleKeydown);
    document.body.style.overflow = 'hidden';
});

onUnmounted(() => {
    document.removeEventListener('keydown', handleKeydown);
    document.body.style.overflow = '';
});
</script>

<template>
    <Teleport to="body">
        <div
            class="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:p-6"
            @click.self="emit('close')"
        >
            <div class="absolute inset-0 bg-[var(--color-neutral-950)]/70 backdrop-blur-sm modal-overlay" />

            <!-- Móvil: hoja a pantalla casi completa · Desktop: diálogo centrado -->
            <div
                class="modal-box relative z-10 w-full sm:max-w-3xl max-h-[85dvh] sm:max-h-[88dvh] rounded-t-2xl sm:rounded-2xl border-t sm:border border-[var(--color-border-nav)] bg-[var(--color-surface)] overflow-hidden flex flex-col modal-content"
            >
                <span class="modal-accent shrink-0" aria-hidden="true" />

                <!-- Asa visual (solo móvil) -->
                <div class="sm:hidden flex justify-center pt-2.5 pb-1 shrink-0">
                    <span class="h-1 w-10 rounded-full bg-[var(--color-neutral-300)]" />
                </div>

                <!-- Header -->
                <div class="shrink-0 flex items-start justify-between gap-3 px-5 sm:px-6 py-4 sm:py-5 border-b border-[var(--color-border-nav)]">
                    <div class="min-w-0">
                        <div class="flex flex-wrap gap-1.5 mb-2">
                            <span class="badge-solid px-2.5 py-0.5 rounded-full text-[9px] uppercase tracking-widest font-bold">
                                {{ project.category }}
                            </span>
                            <span class="px-2.5 py-0.5 rounded-full border border-[var(--color-border-nav)] text-[var(--color-text-nav)] text-[9px] uppercase tracking-widest font-bold">
                                {{ project.type }}
                            </span>
                        </div>

                        <h3 class="font-display text-xl sm:text-2xl font-black tracking-tighter text-[var(--color-text-nav-hover)] leading-tight">
                            {{ project.title }}
                        </h3>
                        <p class="font-mono text-[11px] text-[var(--color-text-nav)] mt-0.5">
                            {{ project.company }}
                        </p>
                    </div>

                    <button
                        @click="emit('close')"
                        type="button"
                        aria-label="Cerrar"
                        class="close-btn shrink-0 flex items-center justify-center w-9 h-9 rounded-lg border border-[var(--color-border-nav)] text-[var(--color-text-nav)] transition-colors duration-200"
                    >
                        <X class="w-4 h-4" />
                    </button>
                </div>

                <!-- Body -->
                <div class="flex-1 overflow-y-auto overscroll-contain px-5 sm:px-6 py-5 space-y-7 modal-scroll">
                    <!-- Imagen -->
                    <div class="rounded-xl border border-[var(--color-border-nav)] overflow-hidden">
                        <img
                            v-if="PROJECT_IMAGES[project.id]"
                            :src="PROJECT_IMAGES[project.id]"
                            :alt="`${project.title} architecture`"
                            class="w-full h-auto object-contain"
                        />
                        <div v-else class="aspect-video">
                            <ProjectPlaceholder :project-id="project.id" />
                        </div>
                    </div>

                    <!-- Overview -->
                    <section>
                        <p class="label mb-2">{{ t('landing.section.projects.card.label_overview') }}</p>
                        <p class="text-sm leading-relaxed text-[var(--color-text-nav)]">
                            {{ project.overview }}
                        </p>
                    </section>

                    <!-- Arquitectura + Metodología -->
                    <section class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div class="fact-box flex items-start gap-3 p-3.5 rounded-xl">
                            <Layers class="fact-icon w-4 h-4 shrink-0 mt-0.5" />
                            <div class="min-w-0">
                                <p class="label mb-1">{{ t('landing.section.projects.card.label_architecture') }}</p>
                                <p class="text-xs text-[var(--color-text-nav)] leading-relaxed">
                                    {{ project.details.architecture }}
                                </p>
                            </div>
                        </div>

                        <div class="fact-box flex items-start gap-3 p-3.5 rounded-xl">
                            <GitBranch class="fact-icon w-4 h-4 shrink-0 mt-0.5" />
                            <div class="min-w-0">
                                <p class="label mb-1">{{ t('landing.section.projects.card.label_methodology') }}</p>
                                <p class="text-xs text-[var(--color-text-nav)] leading-relaxed">
                                    {{ project.details.methodology }}
                                </p>
                            </div>
                        </div>
                    </section>

                    <!-- Highlights -->
                    <section v-if="project.highlights?.length">
                        <p class="label mb-3">{{ t('landing.section.projects.card.label_highlights') }}</p>
                        <ul class="space-y-2.5">
                            <li
                                v-for="(item, i) in project.highlights"
                                :key="i"
                                class="flex gap-3 text-sm leading-relaxed text-[var(--color-text-nav)]"
                            >
                                <span class="marker font-mono text-[10px] shrink-0 mt-1">
                                    {{ String(i + 1).padStart(2, '0') }}
                                </span>
                                <span>{{ item }}</span>
                            </li>
                        </ul>
                    </section>

                    <!-- Capabilities -->
                    <section v-if="project.details.capabilities?.length">
                        <p class="label mb-3">{{ t('landing.section.projects.card.label_capabilities') }}</p>
                        <div class="flex flex-wrap gap-1.5">
                            <span
                                v-for="cap in project.details.capabilities"
                                :key="cap"
                                class="cap-chip px-2.5 py-1 rounded-md text-[11px] font-medium"
                            >
                                {{ cap }}
                            </span>
                        </div>
                    </section>

                    <!-- Impacto -->
                    <section v-if="project.impact" class="impact-box relative p-4 sm:p-5 rounded-xl">
                        <div class="flex items-center gap-2 mb-2">
                            <Sparkles class="fact-icon w-4 h-4" />
                            <p class="label">{{ t('landing.section.projects.card.label_impact') }}</p>
                        </div>
                        <p class="text-sm leading-relaxed text-[var(--color-text-nav-hover)]">
                            {{ project.impact }}
                        </p>
                    </section>

                    <!-- Stack -->
                    <section>
                        <p class="label mb-3">{{ t('landing.section.projects.card.label_stack') }}</p>
                        <div class="space-y-3.5">
                            <div v-for="(items, category) in project.stack" :key="category">
                                <p class="font-mono text-[10px] text-[var(--color-text-nav)]/50 mb-1.5 tracking-wider">
                                    {{ category }}
                                </p>
                                <div class="flex flex-wrap gap-1.5">
                                    <span
                                        v-for="item in items"
                                        :key="item"
                                        class="stack-tag px-2.5 py-1 rounded-md text-xs"
                                    >
                                        {{ item }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<style scoped>
.modal-overlay {
    animation: fadeIn 0.25s ease-out;
}
.modal-content {
    animation: sheetUp 0.32s cubic-bezier(0.16, 1, 0.3, 1);
}
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}
@keyframes sheetUp {
    from { opacity: 0; transform: translateY(28px); }
    to { opacity: 1; transform: translateY(0); }
}
@media (min-width: 640px) {
    .modal-content {
        animation: modalIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    @keyframes modalIn {
        from { opacity: 0; transform: translateY(18px) scale(0.97); }
        to { opacity: 1; transform: translateY(0) scale(1); }
    }
}

.modal-box {
    box-shadow: 0 -10px 50px -20px color-mix(in srgb, var(--color-neutral-950) 55%, transparent);
}
@media (min-width: 640px) {
    .modal-box {
        box-shadow: 0 30px 70px -20px color-mix(in srgb, var(--color-neutral-950) 45%, transparent);
    }
}

.modal-accent {
    height: 3px;
    width: 100%;
    background: linear-gradient(
        to right,
        var(--color-primary),
        color-mix(in srgb, var(--color-primary) 25%, transparent)
    );
}

.label {
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: var(--color-primary);
}

.badge-solid {
    background: var(--color-primary);
    color: var(--color-on-primary);
}

.close-btn:hover {
    background: var(--color-primary);
    color: var(--color-on-primary);
    border-color: var(--color-primary);
}

.fact-box {
    background: color-mix(in srgb, var(--color-primary) 5%, transparent);
    border: 1px solid color-mix(in srgb, var(--color-primary) 14%, transparent);
}
.fact-icon {
    color: var(--color-primary);
}

.marker {
    color: color-mix(in srgb, var(--color-primary) 70%, transparent);
}

.cap-chip {
    background: color-mix(in srgb, var(--color-primary) 8%, transparent);
    color: var(--color-text-nav);
    border: 1px solid color-mix(in srgb, var(--color-primary) 18%, transparent);
}

.impact-box {
    background: color-mix(in srgb, var(--color-primary) 7%, transparent);
    border-left: 3px solid var(--color-primary);
}

.stack-tag {
    background: color-mix(in srgb, var(--color-primary) 10%, transparent);
    color: var(--color-text-nav-hover);
    border: 1px solid color-mix(in srgb, var(--color-primary) 20%, transparent);
}

.modal-scroll::-webkit-scrollbar {
    width: 8px;
}
.modal-scroll::-webkit-scrollbar-track {
    background: var(--color-neutral-100);
    border-radius: 999px;
    margin: 6px 0;
}
.modal-scroll::-webkit-scrollbar-thumb {
    background: color-mix(in srgb, var(--color-primary) 55%, transparent);
    border-radius: 999px;
    border: 2px solid var(--color-surface);
}
.modal-scroll::-webkit-scrollbar-thumb:hover {
    background: var(--color-primary);
}
.modal-scroll {
    padding-bottom: max(1.25rem, env(safe-area-inset-bottom));
    scrollbar-width: thin;
    scrollbar-color: color-mix(in srgb, var(--color-primary) 55%, transparent) var(--color-neutral-100);
}

@media (prefers-reduced-motion: reduce) {
    .modal-overlay, .modal-content { animation: none; }
    .close-btn { transition: none; }
}
</style>