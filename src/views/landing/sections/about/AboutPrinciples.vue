<script setup>
import { computed } from 'vue';
import { ScanSearch, PenTool, Code2, Rocket } from '@lucide/vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const principles = computed(() => [
    {
        icon: ScanSearch,
        title: t('landing.section.about.principles.analyze.title'),
        description: t('landing.section.about.principles.analyze.description'),
        tone: 'var(--color-brand-600)',
        on: 'var(--color-on-brand-600)',
    },
    {
        icon: PenTool,
        title: t('landing.section.about.principles.design.title'),
        description: t('landing.section.about.principles.design.description'),
        tone: 'var(--color-brand-500)',
        on: 'var(--color-on-brand-500)',
    },
    {
        icon: Code2,
        title: t('landing.section.about.principles.build.title'),
        description: t('landing.section.about.principles.build.description'),
        tone: 'var(--color-brand-400)',
        on: 'var(--color-on-brand-400)',
    },
    {
        icon: Rocket,
        title: t('landing.section.about.principles.deploy.title'),
        description: t('landing.section.about.principles.deploy.description'),
        tone: 'var(--color-brand-300)',
        on: 'var(--color-on-brand-300)',
    },
]);
</script>

<template>
    <div class="mt-24">
        <!-- Título de sección -->
        <p class="font-mono text-xs text-[var(--color-text-nav)]/60 tracking-[0.15em] uppercase mb-8 text-center lg:text-left">
            // {{ t('landing.section.about.principles.section_label') }}
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div
                v-for="(item, i) in principles"
                :key="item.title"
                class="principle group relative p-6 rounded-2xl border border-[var(--color-border-nav)] bg-[var(--color-bg-nav)]/20 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:-translate-y-1.5"
                :style="{ '--tone': item.tone, '--on': item.on }"
            >
                <!-- Número gigante de fondo, teñido del tono -->
                <span class="principle-index absolute -top-2 right-2 text-6xl font-black select-none pointer-events-none leading-none tracking-tighter transition-colors duration-500">
                    0{{ i + 1 }}
                </span>

                <!-- Barra superior progresiva en hover -->
                <span class="principle-bar absolute top-0 left-0 h-[2px] w-0" aria-hidden="true" />

                <!-- Ícono: sólido con su tono, la progresión se lee de un vistazo -->
                <div class="principle-icon relative w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6">
                    <component :is="item.icon" class="w-5 h-5" />
                </div>

                <h4 class="principle-title relative text-xs uppercase tracking-[0.15em] font-bold mb-3 transition-colors duration-500">
                    {{ item.title }}
                </h4>

                <p class="relative text-sm leading-relaxed text-[var(--color-text-nav)]">
                    {{ item.description }}
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Card: el borde y la sombra se tiñen del tono al hacer hover */
.principle:hover {
    border-color: color-mix(in srgb, var(--tone) 45%, transparent);
    box-shadow: 0 16px 36px -16px color-mix(in srgb, var(--tone) 45%, transparent);
}

/* Barra superior */
.principle-bar {
    background: var(--tone);
    transition: width 0.55s cubic-bezier(0.16, 1, 0.3, 1);
}
.principle:hover .principle-bar {
    width: 100%;
}

/* Ícono sólido con sombra teñida */
.principle-icon {
    background: var(--tone);
    color: var(--on);
    box-shadow: 0 6px 16px -6px color-mix(in srgb, var(--tone) 60%, transparent);
}
.principle:hover .principle-icon {
    box-shadow: 0 10px 22px -6px color-mix(in srgb, var(--tone) 75%, transparent);
}

/* Número gigante: apenas insinuado, se enciende en hover */
.principle-index {
    color: color-mix(in srgb, var(--tone) 9%, transparent);
}
.principle:hover .principle-index {
    color: color-mix(in srgb, var(--tone) 22%, transparent);
}
:global(.dark) .principle-index {
    color: color-mix(in srgb, var(--tone) 14%, transparent);
}
:global(.dark) .principle:hover .principle-index {
    color: color-mix(in srgb, var(--tone) 30%, transparent);
}

/* Título: neutro por defecto, toma el tono solo en hover */
.principle-title {
    color: var(--color-text-nav-hover);
}
.principle:hover .principle-title {
    color: var(--tone);
}

@media (prefers-reduced-motion: reduce) {
    .principle,
    .principle-bar,
    .principle-icon,
    .principle-index,
    .principle-title {
        transition: none;
    }
}
</style>