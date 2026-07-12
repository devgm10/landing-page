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
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }

    const y = section.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
};
</script>

<template>
    <header
        class="sticky top-0 z-40 border-b border-[var(--color-border-nav)] bg-[var(--color-bg-nav)] backdrop-blur-md transition-colors duration-300"
    >
        <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
            <!-- Izquierda: logo + separador + nav -->
            <div class="flex items-center gap-4 min-w-0">
                <button
                    @click="scrollToSection('home')"
                    type="button"
                    aria-label="Ir al inicio"
                    class="logo flex items-center gap-2 cursor-pointer select-none group flex-shrink-0"
                >
                    <i
                        aria-hidden="true"
                        class="devicon-devicon-plain text-[var(--color-primary)] text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                    ></i>
                    <span
                        class="font-display font-extrabold tracking-tight text-[15px] hidden sm:block text-[var(--color-text-nav-hover)] transition-colors duration-300 group-hover:text-[var(--color-primary)]"
                    >
                        GLB
                    </span>
                </button>

                <!-- Separador diagonal -->
                <span
                    class="hidden nav:block font-mono text-[var(--color-text-nav)]/35 text-base select-none"
                    aria-hidden="true"
                >/</span>

                <TopbarDesktop
                    v-if="route.name === 'Home'"
                    :active-section="activeSection"
                    :on-navigate="scrollToSection"
                />
            </div>

            <!-- Derecha: acciones -->
            <div class="flex items-center justify-end gap-3 flex-shrink-0">
                <ThemeToggle />
                <LanguageToggle />
                <SocialLinks :show-divider="true" />
            </div>
        </div>
    </header>

    <TopbarMobile
        v-if="route.name === 'Home'"
        :active-section="activeSection"
        :on-navigate="scrollToSection"
    />
</template>