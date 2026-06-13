<script setup>
import ThemeToggle from '@/components/ui/theme/ThemeToggle.vue'
import LanguageToggle from '@/components/ui/language/LanguageToggle.vue'

import TopbarDesktop from './TopbarDesktop.vue'
import TopbarMobile from './TopbarMobile.vue'

const scrollToSection = (id) => {
    const section = document.getElementById(id)

    if (!section) return

    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    })
}
</script>

<template>
    <header
        class="
            sticky
            top-0
            z-50

            border-b
            border-slate-200
            dark:border-slate-800

            bg-background-light/80
            dark:bg-background-dark/80

            backdrop-blur-md
        "
    >
        <div
            class="
                mx-auto
                flex
                h-16
                max-w-7xl
                items-center
                justify-between
                px-4
            "
        >
            <div
                class="
                    font-bold
                    text-primary
                "
            >
                Gianmarco Linares B.
            </div>

            <div class="flex items-center gap-4">
                <TopbarDesktop
                    :on-navigate="scrollToSection"
                />

                <LanguageToggle />

                <ThemeToggle />

                <TopbarMobile
                    :on-navigate="scrollToSection"
                />
            </div>
        </div>
    </header>
</template>