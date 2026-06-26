<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

import ThemeToggle from '@/components/ui/theme/ThemeToggle.vue';
import LanguageToggle from '@/components/ui/language/LanguageToggle.vue';
import SocialLinks from '@/components/ui/social/SocialLinks.vue';

import { topbarItems } from './topbar.config';
import { useScrollObserver } from '@/composables/scroll/useScrollObserver';

import TopbarDesktop from './TopbarDesktop.vue';
import TopbarMobile from './TopbarMobile.vue';

const activeSection = ref('home');
const route = useRoute();

useScrollObserver(
    activeSection,
    topbarItems.map((item) => item.section)
);

const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (!section) return;

    activeSection.value = id;

    if (id === 'home') {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });

        return;
    }

    const y =
        section.getBoundingClientRect().top +
        window.pageYOffset;

    window.scrollTo({
        top: y,
        behavior: 'smooth',
    });
};
</script>

<template>
    <header
        class="sticky top-0 z-40 border-[var(--color-border-nav)] bg-[var(--color-bg-nav)] backdrop-blur-md transition-colors duration-300"
    >
        <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
            <div class="flex-shrink-0">
                <button
                    @click="scrollToSection('home')"
                    type="button"
                    aria-label="Ir al inicio"
                    class="flex items-center gap-2.5 cursor-pointer select-none group"
                >
                    <i
                        aria-hidden="true"
                        class="devicon-devicon-plain text-primary text-3xl transition-transform duration-300 group-hover:scale-110"
                    ></i>
                    <span class="font-bold text-primary tracking-tight hidden sm:block">GLB</span>
                </button>
            </div>

            <div class="hidden nav:flex flex-1 justify-center px-4">
                <TopbarDesktop v-if="route.name === 'Home'" :active-section="activeSection" :on-navigate="scrollToSection" />
            </div>

            <div class="flex items-center justify-end gap-3 flex-shrink-0">
                <ThemeToggle />
                <LanguageToggle />
                <SocialLinks :show-divider="true" />
            </div>
        </div>
    </header>

    <TopbarMobile v-if="route.name === 'Home'" :active-section="activeSection" :on-navigate="scrollToSection" />
</template>
