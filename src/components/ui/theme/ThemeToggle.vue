<script setup>
import { useTheme } from '@/composables/theme/useTheme';
import { Sun, Moon } from '@lucide/vue';

const { theme, toggleTheme } = useTheme();
</script>

<template>
    <button
        @click="toggleTheme"
        type="button"
        aria-label="Toggle theme"
        class="relative flex h-9 w-9 items-center justify-center rounded-xl border-[var(--color-border-nav)] bg-transparent cursor-pointer transition-all duration-300 ease-out hover:bg-black/5 dark:hover:bg-white/5 active:scale-90 group"
    >
        <!-- Icono de Sol (Modo Claro) con tu color primario nativo -->
        <Sun
            v-if="theme === 'light'"
            class="h-[18px] w-[18px] transition-all duration-300 text-[var(--color-primary)] group-hover:text-[var(--color-primary-hover)] group-hover:rotate-45"
        />

        <!-- Icono de Luna (Modo Oscuro) pintado con el mismo color primario naranja -->
        <Moon
            v-else
            class="h-[18px] w-[18px] transition-all duration-300 text-[var(--color-primary)] group-hover:text-[var(--color-primary-hover)] group-hover:-rotate-12"
        />
    </button>
</template>
