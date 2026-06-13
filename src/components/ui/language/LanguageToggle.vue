<script setup>
import { useLanguage } from '@/composables/language/useLanguage'

const {
    language,
    setLanguage,
} = useLanguage()
</script>

<template>
    <div
        class="
            flex
            items-center
            rounded-lg
            border

            border-slate-300
            dark:border-slate-700

            overflow-hidden
        "
    >
        <button
            class="
                px-3
                py-2
                text-sm
                transition-colors
            "
            :class="[
                language === 'es'
                    ? 'bg-primary text-white'
                    : 'text-slate-600 dark:text-slate-300'
            ]"
            @click="setLanguage('es')"
        >
            ES
        </button>

        <button
            class="
                px-3
                py-2
                text-sm
                transition-colors
            "
            :class="[
                language === 'en'
                    ? 'bg-primary text-white'
                    : 'text-slate-600 dark:text-slate-300'
            ]"
            @click="setLanguage('en')"
        >
            EN
        </button>
    </div>
</template>