<script setup>
import { useI18n } from 'vue-i18n';

import AboutStory from './about/AboutStory.vue';
import AboutPrinciples from './about/AboutPrinciples.vue';

const { t } = useI18n();
</script>

<template>
    <section
        id="about"
        class="relative w-full max-w-6xl mx-auto px-6 py-24"
    >
        <!-- Header -->
        <div class="text-center mb-16">
            <div class="flex items-center justify-center gap-2 mb-4">
                <span class="relative flex h-1.5 w-1.5">
                    <span
                        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
                    />
                    <span
                        class="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"
                    />
                </span>

                <span
                    class="
                        text-[10px]
                        font-medium
                        tracking-wider
                        uppercase
                        text-emerald-600
                        dark:text-emerald-400/80
                    "
                >
                    {{ t('landing.section.about.secondary_title') }}
                </span>
            </div>

            <h3
                class="
                    text-3xl
                    sm:text-5xl
                    font-swanky
                    text-[var(--color-text-nav-hover)]
                    dark:text-white
                "
            >
                {{ t('landing.section.about.main_title') }}
            </h3>
        </div>

        <AboutStory />

        <AboutPrinciples />
    </section>
</template>