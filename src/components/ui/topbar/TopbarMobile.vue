<script setup>
import * as LucideIcons from '@lucide/vue';
import { topbarItems } from './topbar.config';

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
    <!-- Dock Flotante Móvil Ultra-Translúcido -->
    <div
        class="fixed bottom-6 left-1/2 z-50 nav:hidden flex -translate-x-1/2 items-center justify-between gap-1 rounded-2xl border border-[var(--color-border-nav)]/40 bg-[var(--color-bg-nav)]/70 p-2 shadow-lg shadow-black/5 dark:shadow-black/20 backdrop-blur-xl w-[88vw] max-w-sm transition-colors duration-300"
    >
        <button
            v-for="item in topbarItems"
            :key="item.section"
            @click="onNavigate(item.section)"
            type="button"
            class="relative flex h-11 w-11 items-center justify-center rounded-xl cursor-pointer transition-all duration-300 ease-out active:scale-90 group"
            :class="[
                activeSection === item.section
                    ? 'text-[var(--color-primary)]'
                    : 'text-[var(--color-text-nav)]/80 hover:text-[var(--color-text-nav-hover)]',
            ]"
        >
            <!-- Píldora de Fondo Activa Ultra-Suave -->
            <span
                class="absolute inset-0 rounded-xl bg-[var(--color-primary)]/8 transition-all duration-300 ease-out"
                :class="[
                    activeSection === item.section
                        ? 'scale-100 opacity-100'
                        : 'scale-70 opacity-0 group-hover:scale-90 group-hover:opacity-40',
                ]"
            />

            <!-- Icono de Lucide con Opacidad Selectiva -->
            <component
                :is="LucideIcons[item.iconName]"
                class="w-5 h-5 z-10 transition-all duration-300 ease-out"
                :class="[
                    activeSection === item.section
                        ? 'scale-110 opacity-100'
                        : 'opacity-70 group-hover:opacity-100',
                ]"
                :stroke-width="activeSection === item.section ? 2.25 : 2"
            />
        </button>
    </div>
</template>
