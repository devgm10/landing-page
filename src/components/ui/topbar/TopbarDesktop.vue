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
    <nav class="hidden nav:flex items-center gap-1">
        <button
            v-for="item in topbarItems"
            :key="item.section"
            @click="onNavigate(item.section)"
            type="button"
            class="nav-item relative px-2.5 py-1.5 font-display text-xs font-semibold uppercase tracking-[0.12em] whitespace-nowrap cursor-pointer transition-colors duration-200 ease-out"
            :class="[
                activeSection === item.section
                    ? 'text-[var(--color-primary)]'
                    : 'text-[var(--color-text-nav)] hover:text-[var(--color-text-nav-hover)]'
            ]"
        >
            {{ t(item.key) }}

            <!-- Punto indicador del activo -->
            <span
                aria-hidden="true"
                class="nav-dot absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-1 rounded-full bg-[var(--color-primary)] transition-all duration-300 ease-out"
                :class="activeSection === item.section ? 'opacity-100 scale-100' : 'opacity-0 scale-0'"
            />
        </button>
    </nav>
</template>