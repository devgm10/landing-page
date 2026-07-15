<script setup>
import { useI18n } from 'vue-i18n';

import AboutStory from './about/AboutStory.vue';
import AboutPrinciples from './about/AboutPrinciples.vue';

const { t } = useI18n();
</script>

<template>
    <section id="about" class="relative w-full max-w-6xl mx-auto px-6 py-24">
        <!-- Header -->
        <div class="text-center mb-16">
            <div class="inline-flex items-center gap-2 mb-4 select-none">
                <span class="font-mono text-xs tracking-[0.15em] text-[var(--color-text-nav)]/60">$ about</span>
                <span class="font-mono text-xs tracking-[0.15em]" style="color: var(--color-primary);">--me</span>
            </div>

            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter text-[var(--color-text-nav-hover)]">
                {{ t('landing.section.about.main_title') }}
            </h2>
        </div>

        <AboutStory />
        <AboutPrinciples />
    </section>
</template>