<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, tm } = useI18n();

const experiences = computed(() => tm('landing.section.experience.list'));

const TONES = [
    'var(--color-brand-600)',
    'var(--color-brand-500)',
    'var(--color-brand-400)',
    'var(--color-brand-300)',
];

const toneFor = (i) => TONES[Math.min(i, TONES.length - 1)];
const fadeFor = (i) => Math.max(100 - i * 26, 42); // 100% → 74% → 48% → 42%
</script>

<template>
    <section id="experience" class="relative max-w-6xl mx-auto px-6 py-24">
        <!-- Header -->
        <div class="text-center mb-16">
            <div class="inline-flex items-center gap-2 mb-4 select-none">
                <span class="font-mono text-xs tracking-[0.15em] text-[var(--color-text-nav)]/60">$ git log</span>
                <span class="font-mono text-xs tracking-[0.15em]" style="color: var(--color-primary);">--experience</span>
            </div>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter text-[var(--color-text-nav-hover)]">
                {{ t('landing.section.experience.main_title') }}
            </h2>
        </div>

        <!-- Timeline -->
        <div class="relative space-y-14 pl-10">
            <!-- Línea vertical: arde arriba (presente), se apaga abajo (pasado) -->
            <div
                aria-hidden="true"
                class="timeline-line absolute left-[11px] top-2 bottom-6 w-[2px]"
            />

            <div
                v-for="(exp, index) in experiences"
                :key="`${exp.company}-${exp.period}`"
                class="entry group relative"
                :style="{
                    '--tone': toneFor(index),
                    '--strength': fadeFor(index) + '%',
                }"
            >
                <!-- Nodo: anillo + punto, con halo que crece en hover -->
                <div
                    aria-hidden="true"
                    class="node absolute -left-[34px] top-1 w-6 h-6 rounded-full flex items-center justify-center bg-[var(--color-background-light)] dark:bg-[var(--color-background-dark)] transition-all duration-400"
                >
                    <span class="node-dot w-2 h-2 rounded-full transition-transform duration-400" />
                </div>

                <!-- Cabecera del trabajo -->
                <div class="mb-5">
                    <div class="flex items-baseline justify-between flex-wrap gap-2 mb-1.5">
                        <h3 class="text-xl sm:text-2xl font-bold tracking-tight text-[var(--color-text-nav-hover)]">
                            {{ exp.role }}
                        </h3>
                        <span class="period font-mono text-[11px] px-3 py-1 rounded-md tracking-wider shrink-0 transition-all duration-400">
                            {{ exp.period }}
                        </span>
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="company-dot w-1.5 h-1.5 rounded-full" />
                        <p class="text-sm font-semibold text-[var(--color-text-nav)] tracking-wide">
                            {{ exp.company }}
                        </p>
                    </div>
                </div>

                <!-- Highlights numerados -->
                <div class="grid md:grid-cols-3 gap-3">
                    <div
                        v-for="(h, hIndex) in exp.highlights"
                        :key="hIndex"
                        class="hl group/card relative p-5 rounded-2xl border border-[var(--color-border-nav)] bg-[var(--color-bg-nav)]/30 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:-translate-y-1"
                    >
                        <!-- Barra superior en hover -->
                        <span class="hl-bar absolute top-0 left-0 h-[2px] w-0" aria-hidden="true" />

                        <span class="hl-index font-mono text-[10px] tracking-wider transition-colors duration-400">
                            0{{ hIndex + 1 }}
                        </span>
                        <h4 class="hl-title text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--color-text-nav-hover)] mt-2 mb-2.5 transition-colors duration-400">
                            {{ h.title }}
                        </h4>
                        <p class="text-xs text-[var(--color-text-nav)] leading-relaxed">
                            {{ h.desc }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* La línea: color de marca arriba, se desvanece hacia el pasado */
.timeline-line {
    background: linear-gradient(
        to bottom,
        var(--color-brand-600),
        color-mix(in srgb, var(--color-brand-400) 45%, transparent) 55%,
        transparent
    );
}

/* Nodo: el tono con su presencia según la antigüedad */
.node {
    border: 2px solid color-mix(in srgb, var(--tone) var(--strength), transparent);
}
.node-dot {
    background: color-mix(in srgb, var(--tone) var(--strength), transparent);
}
.entry:hover .node {
    border-color: var(--tone);
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--tone) 14%, transparent);
}
.entry:hover .node-dot {
    background: var(--tone);
    transform: scale(1.25);
}

/* Punto de la empresa: mismo tono, misma presencia */
.company-dot {
    background: color-mix(in srgb, var(--tone) var(--strength), transparent);
}

/* Pill del período: neutro en reposo, se tiñe cuando la entrada está activa */
.period {
    color: var(--color-text-nav);
    background: var(--color-bg-nav);
    border: 1px solid var(--color-border-nav);
}
.entry:hover .period {
    color: var(--tone);
    border-color: color-mix(in srgb, var(--tone) 40%, transparent);
    background: color-mix(in srgb, var(--tone) 8%, transparent);
}

/* Highlights: el feedback de hover usa el tono de SU trabajo */
.hl:hover {
    border-color: color-mix(in srgb, var(--tone) 45%, transparent);
    box-shadow: 0 14px 32px -16px color-mix(in srgb, var(--tone) 50%, transparent);
}
.hl-bar {
    background: var(--tone);
    transition: width 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
.hl:hover .hl-bar {
    width: 100%;
}
.hl-index {
    color: color-mix(in srgb, var(--color-text-nav) 40%, transparent);
}
.hl:hover .hl-index {
    color: var(--tone);
}
.hl:hover .hl-title {
    color: var(--tone);
}

@media (prefers-reduced-motion: reduce) {
    .node, .node-dot, .period, .hl, .hl-bar, .hl-index, .hl-title {
        transition: none;
    }
}
</style>