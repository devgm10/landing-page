<script setup>
import { useI18n } from 'vue-i18n'
import { topbarItems } from './topbar.config'

const { t } = useI18n()

defineProps({
    onNavigate: {
        type: Function,
        required: true,
    },
})
</script>

<template>
    <nav class="hidden md:flex items-center gap-1.5">
        <button
            v-for="item in topbarItems"
            :key="item.section"
            @click="onNavigate(item.section)"
            class="
                px-3
                py-1.5
                text-sm
                font-medium
                tracking-wide
                text-[var(--color-text-nav)]
                rounded-lg
                cursor-pointer
                transition-all
                duration-200
                ease-out
                hover:text-[var(--color-text-nav-hover)]
                hover:bg-black/5
                dark:hover:bg-white/5
                active:scale-98
            "
        >
            {{ t(item.key) }}
        </button>
    </nav>
</template>