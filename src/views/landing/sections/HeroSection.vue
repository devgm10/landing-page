<script setup>
import HeroContent from './hero/HeroContent.vue';
import HeroMetrics from './hero/HeroMetrics.vue';
import HeroMarquee from './hero/HeroMarquee.vue';
</script>

<template>
    <section
        id="home"
        class="relative w-full h-auto lg:h-[calc(100vh-64px)] overflow-hidden flex items-center pt-4 pb-8 lg:py-0"
    >
        <div
            class="absolute left-1/4 top-1/4 z-0 h-96 w-96 rounded-full bg-[var(--color-primary)]/10 blur-[120px] pointer-events-none animate-pulse duration-[6000ms]"
        />

        <div
            class="mx-auto max-w-7xl px-6 w-full flex flex-col gap-6 lg:gap-10 relative z-10"
        >
            <HeroContent />

            <HeroMetrics />

            <HeroMarquee />
        </div>
    </section>
</template>