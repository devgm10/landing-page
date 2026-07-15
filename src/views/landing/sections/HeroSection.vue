<script setup>
import HeroContent from './hero/HeroContent.vue';
import HeroCV from './hero/HeroCV.vue';
import HeroMetrics from './hero/HeroMetrics.vue';
import HeroMarquee from './hero/HeroMarquee.vue';
</script>

<template>
    <section
        id="home"
        class="relative w-full h-auto lg:min-h-[calc(100vh-64px)] overflow-hidden flex items-center pt-6 pb-28 lg:py-0"
    >
        <!-- Grid sutil de fondo -->
        <div
            class="absolute inset-0 z-0 opacity-[0.4] dark:opacity-[0.25] pointer-events-none"
            style="background-image: radial-gradient(circle at 1px 1px, var(--color-border-nav) 1px, transparent 0); background-size: 32px 32px;"
        />

        <div class="absolute inset-0 z-0 opacity-[0.25] dark:opacity-[0.25] pointer-events-none"
            style="background-image: radial-gradient(circle at 1px 1px, var(--color-border-nav) 1px, transparent 0); background-size: 32px 32px;"
        />

        <div class="mx-auto max-w-7xl px-6 w-full flex flex-col gap-10 lg:gap-14 relative z-10">
            <div class="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-6 items-center">
                <HeroContent />
                <div class="flex justify-center">
                    <HeroCV />
                </div>
            </div>

            <HeroMetrics />
            <HeroMarquee />
        </div>
    </section>
</template>

<style scoped>
.hero-glow {
    background: color-mix(in srgb, var(--color-primary) 3%, transparent);
}
:global(.dark) .hero-glow {
    background: color-mix(in srgb, var(--color-primary) 12%, transparent);
}
</style>