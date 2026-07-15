<script setup>
import { useI18n } from 'vue-i18n';
import { topbarItems } from './topbar.config';

const { t } = useI18n();

defineProps({
    activeSection: {
        type: String,
        required: true,
    },
    onNavigate: {
        type: Function,
        required: true,
    },
});
</script>

<template>
    <div
        class="dock fixed bottom-6 left-1/2 z-50 nav:hidden flex -translate-x-1/2 items-center gap-1 rounded-2xl border border-[var(--color-border-nav)] bg-[var(--color-bg-nav)] p-1.5 backdrop-blur-xl transition-colors duration-300"
    >
        <button
            v-for="item in topbarItems"
            :key="item.section"
            @click="onNavigate(item.section)"
            type="button"
            :aria-label="t(item.key)"
            class="relative flex h-11 w-11 items-center justify-center rounded-xl cursor-pointer transition-all duration-300 ease-out active:scale-90 z-10"
            :class="[
                activeSection === item.section
                    ? 'text-[var(--color-on-primary)]'
                    : 'text-[var(--color-text-nav)] hover:text-[var(--color-text-nav-hover)]',
            ]"
        >
            <!-- Píldora activa -->
            <span
                class="pill absolute inset-0 rounded-xl bg-[var(--color-primary)] transition-all duration-300 ease-out -z-10"
                :class="[
                    activeSection === item.section
                        ? 'scale-100 opacity-100'
                        : 'scale-75 opacity-0',
                ]"
            />

            <component
                :is="item.icon"
                class="w-5 h-5 transition-all duration-300 ease-out"
                :class="[
                    activeSection === item.section
                        ? 'scale-110'
                        : 'opacity-70 hover:opacity-100',
                ]"
                :stroke-width="activeSection === item.section ? 2.25 : 2"
            />
        </button>
    </div>
</template>

<style scoped>
/* Sombra derivada del neutro profundo, no de un negro hardcodeado */
.dock {
    box-shadow: 0 12px 32px -12px color-mix(in srgb, var(--color-neutral-950) 22%, transparent);
}
:global(.dark) .dock {
    box-shadow: 0 12px 32px -12px color-mix(in srgb, var(--color-neutral-950) 55%, transparent);
}

/* La píldora activa lleva un halo de su propio color */
.pill {
    box-shadow: 0 6px 16px -6px color-mix(in srgb, var(--color-primary) 55%, transparent);
}

@media (prefers-reduced-motion: reduce) {
    .dock, .pill { transition: none; }
}
</style>