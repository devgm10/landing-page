<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
const { t, tm } = useI18n();

const experiences = computed(() => {
    return tm('landing.section.experience.list');
});
</script>

<template>
    <section id="experience" class="relative max-w-6xl mx-auto px-6 py-24">
        <div class="text-center mb-16">
            <div class="flex items-center justify-center gap-2 mb-2">
                <span class="relative flex h-1.5 w-1.5">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                </span>
                <span class="text-[10px] font-medium tracking-wider uppercase text-emerald-600 dark:text-emerald-400/80">
                    {{ t('landing.section.experience.secondary_title') }}
                </span>
            </div>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-swanky text-[var(--color-text-nav-hover)] dark:text-white">
                {{ t('landing.section.experience.main_title') }}
            </h2>
        </div>
        
        <div class="relative space-y-12 pl-8">
            <div aria-hidden="true" class="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--color-border-nav)]/50 via-[var(--color-border-nav)] to-transparent" />
            <div v-for="exp in experiences" :key="`${exp.company}-${exp.period}`" class="relative group">
                <div aria-hidden="true" class="absolute -left-[41px] top-0 w-6 h-6 rounded-full border-4 border-background-light dark:border-background-dark bg-[var(--color-primary)] shadow-lg" />
                
                <div class="mb-6">
                    <h3 class="text-xl sm:text-2xl font-bold text-[var(--color-text-nav-hover)]">{{ exp.role }}</h3>
                    <p class="text-xs font-semibold text-[var(--color-primary)] mt-1">{{ exp.company }}</p>
                    <p class="text-[10px] uppercase tracking-widest text-[var(--color-text-nav)] mt-0.5">{{ exp.period }}</p>
                </div>

                <div class="grid md:grid-cols-3 gap-4">
                    <div v-for="(h, hIndex) in exp.highlights" :key="hIndex" class="bg-[var(--color-bg-nav)] border border-[var(--color-border-nav)] p-4 rounded-2xl hover:-translate-y-1 hover:border-[var(--color-primary)]/30 transition-all duration-300">
                        <h4 class="text-[10px] font-bold uppercase tracking-widest text-[var(--color-primary)] mb-2">{{ h.title }}</h4>
                        <p class="text-xs text-[var(--color-text-nav)] leading-relaxed">{{ h.desc }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>