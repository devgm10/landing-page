<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { X } from '@lucide/vue';
import ProjectPlaceholder from './ProjectPlaceholder.vue';
import { PROJECT_IMAGES } from './projects.data';

const { t } = useI18n();

const props = defineProps({
    project: { type: Object, required: true },
    tone: { type: String, required: true },
    onTone: { type: String, required: true },
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
        <!-- Overlay -->
        <div
            class="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
            @click.self="emit('close')"
        >
            <!-- Fondo opaco + blur -->
            <div class="absolute inset-0 bg-[var(--color-neutral-950)]/60 backdrop-blur-sm modal-overlay" />

            <!-- Contenedor exterior: radius + overflow-hidden + flex column -->
            <div
                class="modal-box relative z-10 w-full max-w-3xl max-h-[90vh] rounded-2xl border border-[var(--color-border-nav)] bg-[var(--color-surface)] overflow-hidden flex flex-col modal-content"
                :style="{ '--tone': tone, '--on-tone': onTone }"
            >
                <!-- Franja del tono del proyecto -->
                <span class="modal-accent shrink-0" aria-hidden="true" />

                <!-- Header FIJO (no scrollea) -->
                <div class="shrink-0 flex items-start justify-between gap-4 p-6 border-b border-[var(--color-border-nav)] bg-[var(--color-surface)]">
                    <div>
                        <div class="flex flex-wrap gap-2 mb-2">
                            <span class="badge-solid px-3 py-1 rounded-full text-[9px] uppercase tracking-widest font-bold">
                                {{ project.category }}
                            </span>
                            <span class="px-3 py-1 rounded-full border border-[var(--color-border-nav)] text-[var(--color-text-nav)] text-[9px] uppercase tracking-widest font-bold">
                                {{ project.type }}
                            </span>
                        </div>

                        <h3 class="text-2xl sm:text-3xl font-black tracking-tighter text-[var(--color-text-nav-hover)]">
                            {{ project.title }}
                        </h3>

                        <p class="font-mono text-xs text-[var(--color-text-nav)] mt-1">
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

                <!-- Body SCROLLEABLE (el scroll vive aquí, dentro del radius) -->
                <div class="flex-1 overflow-y-auto overscroll-contain p-6 space-y-6 modal-scroll">
                    <!-- Imagen arquitectura -->
                    <div class="rounded-xl border border-[var(--color-border-nav)] overflow-hidden">
                        <img
                            v-if="PROJECT_IMAGES[project.id]"
                            :src="PROJECT_IMAGES[project.id]"
                            :alt="`${project.title} architecture`"
                            class="w-full h-auto object-contain"
                        />
                        <div v-else class="aspect-video">
                            <ProjectPlaceholder
                                :project-id="project.id"
                                :tone="tone"
                                :on-tone="onTone"
                            />
                        </div>
                    </div>

                    <p class="text-sm text-[var(--color-text-nav)] leading-relaxed">
                        {{ project.shortDescription }}
                    </p>

                    <!-- Arquitectura + Metodología -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="info-box p-4 rounded-xl border border-[var(--color-border-nav)] bg-[var(--color-bg-nav)]/30">
                            <p class="label text-[10px] font-bold uppercase tracking-widest mb-1.5">
                                {{ t('landing.section.projects.card.label_architecture') }}
                            </p>
                            <p class="text-xs text-[var(--color-text-nav)] leading-relaxed">
                                {{ project.details.architecture }}
                            </p>
                        </div>

                        <div class="info-box p-4 rounded-xl border border-[var(--color-border-nav)] bg-[var(--color-bg-nav)]/30">
                            <p class="label text-[10px] font-bold uppercase tracking-widest mb-1.5">
                                {{ t('landing.section.projects.card.label_methodology') }}
                            </p>
                            <p class="text-xs text-[var(--color-text-nav)] leading-relaxed">
                                {{ project.details.methodology }}
                            </p>
                        </div>
                    </div>

                    <!-- Módulos -->
                    <div>
                        <p class="label text-[10px] font-bold uppercase tracking-widest mb-2.5">
                            {{ t('landing.section.projects.card.label_modules') }}
                        </p>
                        <div class="flex flex-wrap gap-1.5">
                            <span
                                v-for="module in project.details.modules"
                                :key="module"
                                class="module-tag px-2.5 py-1 rounded-md text-[10px] font-medium"
                            >
                                {{ module }}
                            </span>
                        </div>
                    </div>

                    <!-- Stack -->
                    <div>
                        <p class="label text-[10px] font-bold uppercase tracking-widest mb-2.5">
                            {{ t('landing.section.projects.card.label_stack') }}
                        </p>
                        <div class="space-y-3">
                            <div v-for="(items, category) in project.stack" :key="category">
                                <p class="font-mono text-[10px] text-[var(--color-text-nav)]/50 mb-1.5">
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
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<style scoped>
/* ---- Animaciones de entrada ---- */
.modal-overlay {
    animation: fadeIn 0.25s ease-out;
}
.modal-content {
    animation: modalIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}
@keyframes modalIn {
    from { opacity: 0; transform: translateY(20px) scale(0.97); }
    to { opacity: 1; transform: translateY(0) scale(1); }
}

/* ---- Caja del modal: sombra derivada del neutro profundo ---- */
.modal-box {
    box-shadow: 0 30px 70px -20px color-mix(in srgb, var(--color-neutral-950) 45%, transparent);
}

/* Franja superior con el tono del proyecto */
.modal-accent {
    height: 3px;
    width: 100%;
    background: linear-gradient(
        to right,
        var(--tone),
        color-mix(in srgb, var(--tone) 30%, transparent)
    );
}

/* ---- Badges ---- */
.badge-solid {
    background: var(--tone);
    color: var(--on-tone);
}

/* ---- Botón cerrar ---- */
.close-btn:hover {
    background: var(--tone);
    color: var(--on-tone);
    border-color: var(--tone);
}

/* ---- Labels de sección: toman el tono del proyecto ---- */
.label {
    color: var(--tone);
}

/* ---- Tags ---- */
.module-tag {
    background: var(--color-bg-nav);
    color: var(--color-text-nav);
    border: 1px solid var(--color-border-nav);
}

.stack-tag {
    background: color-mix(in srgb, var(--tone) 10%, transparent);
    color: var(--color-text-nav-hover);
    border: 1px solid color-mix(in srgb, var(--tone) 22%, transparent);
}

/* ---- Scrollbar: en el tono del proyecto ---- */
.modal-scroll::-webkit-scrollbar {
    width: 8px;
}
.modal-scroll::-webkit-scrollbar-track {
    background: var(--color-neutral-100);
    border-radius: 999px;
    margin: 6px 0;
}
.modal-scroll::-webkit-scrollbar-thumb {
    background: color-mix(in srgb, var(--tone) 55%, transparent);
    border-radius: 999px;
    border: 2px solid var(--color-surface);
}
.modal-scroll::-webkit-scrollbar-thumb:hover {
    background: var(--tone);
}

.modal-scroll {
    scrollbar-width: thin;
    scrollbar-color: color-mix(in srgb, var(--tone) 55%, transparent) var(--color-neutral-100);
}

@media (prefers-reduced-motion: reduce) {
    .modal-overlay, .modal-content { animation: none; }
    .close-btn { transition: none; }
}
</style>