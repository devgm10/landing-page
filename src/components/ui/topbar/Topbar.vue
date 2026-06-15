<script setup>
import { ref } from 'vue'

import ThemeToggle from '@/components/ui/theme/ThemeToggle.vue'
import LanguageToggle from '@/components/ui/language/LanguageToggle.vue'

import { topbarItems } from './topbar.config'
import { useScrollObserver } from '@/composables/scroll/useScrollObserver'

import TopbarDesktop from './TopbarDesktop.vue'
import TopbarMobile from './TopbarMobile.vue'

const activeSection = ref('home')

useScrollObserver(
    activeSection,
    topbarItems.map(
        (item) => item.section
    )
)

const scrollToSection = (id) => {
    const section =
        document.getElementById(id)

    if (!section) return

    activeSection.value = id

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
            z-40
            border-[var(--color-border-nav)]
            bg-[var(--color-bg-nav)]
            backdrop-blur-md
            transition-colors
            duration-300
        "
    >
        <div
            class="
                mx-auto
                grid
                h-16
                max-w-7xl
                grid-cols-3
                items-center
                px-4
            "
        >
            <div class="flex justify-start">
                <div
                    @click="scrollToSection('home')"
                    class="flex items-center gap-2.5 cursor-pointer select-none group"
                >
                    <i class="devicon-devicon-plain text-primary text-3xl transition-transform duration-300 group-hover:scale-110"></i>
                    
                    <div
                        class="
                            font-bold
                            text-primary
                            tracking-tight
                            hidden sm:block
                        "
                    >
                        GLB
                    </div>
                </div>
            </div>

            <div class="flex justify-center">
                <TopbarDesktop
                    :active-section="activeSection"
                    :on-navigate="scrollToSection"
                />
            </div>

            <div class="flex items-center justify-end gap-3">
                <ThemeToggle />
                <LanguageToggle />
            </div>
        </div>
    </header>

    <TopbarMobile
        :active-section="activeSection"
        :on-navigate="scrollToSection"
    />
</template>