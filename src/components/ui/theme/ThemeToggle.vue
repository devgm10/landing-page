<script setup>
import { useTheme } from '@/composables/theme/useTheme'
import { ToggleLeft, ToggleRight } from '@lucide/vue';

const {
    theme,
    toggleTheme,
} = useTheme()
</script>

<template>
    <button
        @click="toggleTheme"
        class="
            flex
            items-center
            justify-center
            rounded-lg
            border-slate-300
            px-3
            py-2
            transition
            hover:opacity-80
        "
    >
        <span v-if="theme === 'light'">
            <ToggleLeft></ToggleLeft>
        </span>

        <span v-else>
            <ToggleRight></ToggleRight>
        </span>
    </button>
</template>