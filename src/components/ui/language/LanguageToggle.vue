<script setup>
import { useLanguage } from '@/composables/language/useLanguage';

const { language, toggleLanguage } = useLanguage();
</script>

<template>
    <button
        type="button"
        @click="toggleLanguage"
        aria-label="Toggle language"
        class="relative inline-flex h-9 w-16 shrink-0 cursor-pointer items-center rounded-full border border-[var(--color-border-nav)] bg-black/[0.04] dark:bg-white/[0.04] p-1 transition-all duration-300 ease-in-out outline-none active:scale-95 group"
    >
        <!-- Textos de fondo con tipografía DM Mono sutil y alineada -->
        <div
            class="absolute inset-0 flex items-center justify-between px-2.5 select-none text-[10px] font-bold tracking-wider text-[var(--color-text-nav)] opacity-40 dark:opacity-30"
        >
            <span>ES</span>
            <span>EN</span>
        </div>

        <!-- Burbuja del switch con tu color primario #FF692A y transiciones elásticas -->
        <div
            class="flex h-6 w-6 items-center justify-center rounded-full bg-white dark:bg-slate-800 text-[10px] font-bold tracking-tight text-[var(--color-primary)] shadow-md transition-all duration-300 ease-in-out z-10 group-hover:text-[var(--color-primary-hover)]"
            :class="[language === 'en' ? 'translate-x-7' : 'translate-x-0']"
        >
            {{ language.toUpperCase() }}
        </div>
    </button>
</template>
