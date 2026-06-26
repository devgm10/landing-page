<script setup>
import { useI18n } from 'vue-i18n'
import { topbarItems } from './topbar.config'

const { t } = useI18n()

defineProps({
    activeSection: {
        type: String,
        required: true,
    },
    onNavigate: {
        type: Function,
        required: true,
    },
})
</script>

<template>
    <nav class="hidden nav:flex items-center gap-1">
        <button
            v-for="item in topbarItems"
            :key="item.section"
            @click="onNavigate(item.section)"
            type="button"
            class="
                relative
                px-4
                py-2
                pb-2
                text-sm
                font-medium
                tracking-wide
                whitespace-nowrap
                cursor-pointer
                transition-all
                duration-300
                ease-out
                active:scale-95
            "
            :class="[
                activeSection === item.section
                    ? 'text-[var(--color-primary)] font-bold'
                    : 'text-[var(--color-text-nav)] hover:text-[var(--color-text-nav-hover)]'
            ]"
        >
            <!-- Texto traducido (Mantiene una única línea y cambia a color primario si está activo) -->
            {{ t(item.key) }}

            <!-- Indicador de Línea Inferior Desplazable -->
            <span
                class="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    bg-[var(--color-primary)]
                    transition-all
                    duration-300
                    ease-in-out
                "
                :class="[
                    activeSection === item.section 
                        ? 'w-full opacity-100 scale-x-100' 
                        : 'w-full opacity-0 scale-x-0'
                ]"
            />
        </button>
    </nav>
</template>