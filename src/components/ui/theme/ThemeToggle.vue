<script setup>
import { useTheme } from '@/composables/theme/useTheme'
import { Sun, Moon } from '@lucide/vue'

const {
    theme,
    toggleTheme,
} = useTheme()
</script>

<template>
    <button
        @click="toggleTheme"
        type="button"
        aria-label="Toggle theme"
        class="
            relative
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-xl
            border-[var(--color-border-nav)]
            bg-transparent
            text-[var(--color-text-nav)]
            cursor-pointer
            transition-all
            duration-300
            ease-out
            hover:bg-black/5
            dark:hover:bg-white/5
            hover:text-[var(--color-text-nav-hover)]
            active:scale-90
        "
    >
        <Sun
            v-if="theme === 'light'"
            class="h-[18px] w-[18px] transition-transform duration-500 rotate-0 scale-100"
        />

        <Moon
            v-else
            class="h-[18px] w-[18px] transition-transform duration-500 rotate-0 scale-100 text-amber-400"
        />
    </button>
</template>