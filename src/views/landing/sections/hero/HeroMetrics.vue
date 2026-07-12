<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { BriefcaseBusiness, Cpu, Zap, ServerCrash } from '@lucide/vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const metrics = [
    {
        icon: BriefcaseBusiness, prefix: '+', value: 4, suffix: '',
        labelKey: 'landing.section.hero.metrics.experiencie',
        tone: 'var(--color-brand-600)',
        onTone: 'var(--color-on-brand-600)',
    },
    {
        icon: Cpu, prefix: '', value: 30, suffix: '%',
        labelKey: 'landing.section.hero.metrics.efficiency',
        tone: 'var(--color-brand-500)',
        onTone: 'var(--color-on-brand-500)',
    },
    {
        icon: Zap, prefix: '', value: 85, suffix: '%',
        labelKey: 'landing.section.hero.metrics.deployment',
        tone: 'var(--color-brand-400)',
        onTone: 'var(--color-on-brand-400)',
    },
    {
        icon: ServerCrash, prefix: '', value: 25, suffix: '%',
        labelKey: 'landing.section.hero.metrics.cloud',
        tone: 'var(--color-brand-300)',
        onTone: 'var(--color-on-brand-300)',
    },
];

const gridRef = ref(null);
const displayed = ref(metrics.map(() => 0));

let observer = null;
let hasRun = false;

const prefersReduced = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const runCountUp = () => {
    if (prefersReduced()) {
        displayed.value = metrics.map((m) => m.value);
        return;
    }

    const DURATION = 1600;

    metrics.forEach((metric, i) => {
        const start = performance.now();

        const tick = (now) => {
            const progress = Math.min((now - start) / DURATION, 1);
            const eased = 1 - Math.pow(1 - progress, 3);

            displayed.value[i] = Math.round(metric.value * eased);

            if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
    });
};

onMounted(() => {
    observer = new IntersectionObserver(
        (entries) => {
            if (entries[0].isIntersecting && !hasRun) {
                hasRun = true;
                runCountUp();
            }
        },
        { threshold: 0.35 }
    );

    if (gridRef.value) observer.observe(gridRef.value);
});

onUnmounted(() => observer?.disconnect());
</script>

<template>
    <div
        ref="gridRef"
        class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full max-w-md lg:max-w-none mx-auto animate-fade-in-up [animation-delay:1350ms] relative z-20"
    >
        <div
            v-for="(metric, i) in metrics"
            :key="i"
            class="metric-card group/metric relative flex flex-col justify-between gap-4 p-4 sm:p-6 rounded-2xl border border-[var(--color-border-nav)] bg-[var(--color-bg-nav)] backdrop-blur-md overflow-hidden transition-all duration-500 hover:-translate-y-1.5 min-h-[140px] sm:min-h-[160px]"
            :style="{ '--tone': metric.tone, '--on-tone': metric.onTone }"
        >
            <!-- Resplandor del tono que crece desde la esquina -->
            <span class="metric-glow" aria-hidden="true" />

            <!-- Barra superior que se llena con el tono -->
            <span class="metric-bar" aria-hidden="true" />

            <!-- Índice mono (esquina) -->
            <span class="metric-index absolute top-3 right-4 font-mono text-[10px] tracking-wider select-none">
                0{{ i + 1 }}
            </span>

            <!-- Ícono -->
            <div class="metric-icon relative z-10 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl self-start transition-all duration-500 group-hover/metric:scale-110 group-hover/metric:rotate-[-6deg]">
                <component :is="metric.icon" class="h-4 w-4 sm:h-5 sm:w-5" />
            </div>

            <div class="relative z-10 w-full">
                <p class="metric-value text-3xl sm:text-4xl lg:text-5xl font-black leading-none tracking-tighter transition-all duration-500 group-hover/metric:scale-105 origin-left tabular-nums">
                    {{ metric.prefix }}{{ displayed[i] }}{{ metric.suffix }}
                </p>

                <div class="flex items-start gap-1.5 mt-2">
                    <span class="metric-dollar font-mono text-[9px] select-none mt-0.5 transition-colors duration-500">$</span>
                    <p class="text-[10px] sm:text-[11px] uppercase tracking-[0.1em] text-[var(--color-text-nav)] font-bold leading-tight text-left">
                        {{ t(metric.labelKey) }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.metric-card {
    border-color: var(--color-border-nav);
}
.metric-card:hover {
    border-color: color-mix(in srgb, var(--tone) 45%, transparent);
    box-shadow: 0 14px 34px -14px color-mix(in srgb, var(--tone) 45%, transparent);
}

/* Este bloque faltaba: sin él, el glow nunca se dibuja */
.metric-glow {
    position: absolute;
    right: -30px;
    bottom: -30px;
    width: 110px;
    height: 110px;
    border-radius: 9999px;
    background: var(--tone);
    opacity: 0;
    filter: blur(34px);
    transform: scale(0.6);
    transition:
        opacity 0.55s ease,
        transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
    pointer-events: none;
}
.metric-card:hover .metric-glow {
    opacity: 0.28;
    transform: scale(1.25);
}

/* Barra superior */
.metric-bar {
    position: absolute;
    top: 0;
    left: 0;
    height: 2px;
    width: 0;
    background: var(--tone);
    transition: width 0.55s cubic-bezier(0.16, 1, 0.3, 1);
}
.metric-card:hover .metric-bar {
    width: 100%;
}

/* Ícono: tenue en reposo, sólido en hover */
.metric-icon {
    background: color-mix(in srgb, var(--tone) 12%, transparent);
    border: 1px solid color-mix(in srgb, var(--tone) 25%, transparent);
    color: var(--tone);
}
.metric-card:hover .metric-icon {
    background: var(--tone);
    border-color: var(--tone);
    color: var(--on-tone);
}

/* Índice: gris en reposo, tono en hover */
.metric-index {
    color: color-mix(in srgb, var(--color-text-nav) 40%, transparent);
    transition: color 0.5s ease;
}
.metric-card:hover .metric-index {
    color: var(--tone);
}

/* Número: neutro en reposo, toma el tono en hover */
.metric-value {
    color: var(--color-text-nav-hover);
}
.metric-card:hover .metric-value {
    color: var(--tone);
}

/* El $ del label */
.metric-dollar {
    color: color-mix(in srgb, var(--color-text-nav) 50%, transparent);
}
.metric-card:hover .metric-dollar {
    color: var(--tone);
}

@media (prefers-reduced-motion: reduce) {
    .metric-card,
    .metric-glow,
    .metric-bar,
    .metric-icon,
    .metric-value { transition: none; }
}
</style>