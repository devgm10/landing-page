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
            <div class="flex items-center justify-center gap-2 mb-4">
                <span class="relative flex h-1.5 w-1.5">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                </span>
                <span class="text-[10px] font-medium tracking-wider uppercase text-emerald-600 dark:text-emerald-400/80">
                    {{ t('landing.section.experience.secondary_title') }}
                </span>
            </div>
            <h2 class="text-3xl sm:text-5xl font-swanky text-[var(--color-text-nav-hover)] dark:text-white">
                {{ t('landing.section.experience.main_title') }}
            </h2>
        </div>
        
        <div class="relative space-y-12 pl-8 border-l-2 border-[var(--color-border-nav)]">
            <div v-for="exp in experiences" :key="`${exp.company}-${exp.period}`" class="relative group">
                <div aria-hidden="true" class="absolute -left-[41px] top-0 w-6 h-6 rounded-full border-4 border-background-light dark:border-background-dark bg-[var(--color-primary)] shadow-lg" />
                
                <div class="mb-4">
                    <h3 class="text-xl font-bold text-[var(--color-text-nav-hover)]">{{ exp.role }}</h3>
                    <div class="text-[var(--color-primary)] font-bold uppercase tracking-widest text-[10px] mt-1">
                        {{ exp.company }} • {{ exp.period }}
                    </div>
                </div>

                <div class="grid md:grid-cols-3 gap-4 mt-4">
                    <div v-for="(h, hIndex) in exp.highlights" :key="hIndex" class="bg-[var(--color-bg-nav)] border border-[var(--color-border-nav)] p-4 rounded-xl hover:border-[var(--color-primary)]/50 transition-colors">
                        <h4 class="text-[10px] font-bold uppercase text-[var(--color-primary)] mb-2">{{ h.title }}</h4>
                        <p class="text-[12px] text-zinc-500 leading-relaxed">{{ h.desc }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>