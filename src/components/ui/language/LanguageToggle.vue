<script setup>
import { useLanguage } from '@/composables/language/useLanguage'

const {
    language,
    setLanguage,
} = useLanguage()

const toggleLanguage = () => {
    setLanguage(language.value === 'es' ? 'en' : 'es')
}
</script>

<template>
    <button
        type="button"
        @click="toggleLanguage"
        aria-label="Toggle language"
        class="
            relative
            inline-flex
            h-9
            w-16
            shrink-0
            cursor-pointer
            items-center
            rounded-full
            border
            border-[var(--color-border-nav)]
            bg-slate-100/80
            dark:bg-slate-900/50
            p-1
            transition-colors
            duration-300
            ease-in-out
            outline-none
            active:scale-95
        "
    >
        <div class="absolute inset-0 flex items-center justify-between px-2.5 select-none text-[9px] font-bold tracking-wider text-slate-400 dark:text-slate-600">
            <span>ES</span>
            <span>EN</span>
        </div>

        <div
            class="
                flex
                h-6
                w-6
                items-center
                justify-center
                rounded-full
                bg-white
                dark:bg-slate-800
                text-[10px]
                font-bold
                tracking-tight
                text-[var(--color-primary)]
                dark:text-white
                shadow-md
                transition-transform
                duration-300
                ease-in-out
                z-10
            "
            :class="[
                language === 'en' ? 'translate-x-7' : 'translate-x-0'
            ]"
        >
            {{ language.toUpperCase() }}
        </div>
    </button>
</template>