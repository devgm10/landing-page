<script setup>
import { BriefcaseBusiness, Cpu, Zap, ServerCrash } from '@lucide/vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
    <div class="grid grid-cols-2 lg:grid-cols-4 items-stretch gap-3 sm:gap-6 w-full max-w-md lg:max-w-none mx-auto animate-fade-in-up [animation-delay:450ms] relative z-20">

        <!-- Card 1 -->
        <div class="group/metric relative flex items-center justify-between gap-2 p-3.5 sm:p-6 rounded-2xl bg-[var(--color-primary)]/[0.02] dark:bg-white/[0.01] backdrop-blur-md border border-[var(--color-primary)]/10 dark:border-white/5 transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--color-primary)]/40 hover:shadow-[0_12px_30px_-10px_rgba(59,130,246,0.15)] overflow-hidden">
            <div class="absolute -right-10 -bottom-10 w-24 h-24 bg-[var(--color-primary)]/5 rounded-full blur-2xl transition-all duration-500 group-hover/metric:scale-150" />
            <div class="flex flex-col items-start justify-between h-full relative z-10 min-w-0">
                <p class="text-xl sm:text-3xl lg:text-4xl font-black dark:text-white leading-none tracking-tight transition-transform duration-300 group-hover/metric:scale-[1.03]">+4</p>
                <p class="text-[9px] sm:text-xs uppercase tracking-widest text-[var(--color-primary)] font-bold mt-2 truncate w-full">{{ t('landing.section.hero.metrics.experiencie') }}</p>
            </div>
            <div class="flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[var(--color-primary)]/[0.05] dark:bg-white/[0.03] border border-[var(--color-primary)]/10 dark:border-white/10 text-gray-500 dark:text-gray-400 shadow-inner transition-all duration-500 group-hover/metric:bg-[var(--color-primary)] group-hover/metric:text-white group-hover/metric:-translate-y-1 flex-shrink-0">
                <BriefcaseBusiness class="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
            </div>
        </div>

        <!-- Card 2 -->
        <div
            class="group/metric relative flex items-center justify-between gap-2 p-3.5 sm:p-6 rounded-2xl bg-[var(--color-primary)]/[0.02] dark:bg-white/[0.01] backdrop-blur-md border border-[var(--color-primary)]/10 dark:border-white/5 transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--color-primary)]/40 hover:shadow-[0_12px_30px_-10px_rgba(59,130,246,0.15)] overflow-hidden"
        >
            <div class="absolute -right-10 -bottom-10 w-24 h-24 bg-[var(--color-primary)]/5 rounded-full blur-2xl transition-all duration-500 group-hover/metric:scale-150" />
            <div class="flex flex-col items-start justify-between h-full relative z-10 min-w-0">
                <p class="text-xl sm:text-3xl lg:text-4xl font-black dark:text-white leading-none tracking-tight transition-transform duration-300 group-hover/metric:scale-[1.03]">30%</p>
                <p class="text-[9px] sm:text-xs uppercase tracking-widest text-[var(--color-primary)] font-bold mt-2 truncate w-full">{{ t('landing.section.hero.metrics.efficiency') }}</p>
            </div>
            <div class="flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[var(--color-primary)]/[0.05] dark:bg-white/[0.03] border border-[var(--color-primary)]/10 dark:border-white/10 text-gray-500 dark:text-gray-400 shadow-inner transition-all duration-500 group-hover/metric:bg-[var(--color-primary)] group-hover/metric:text-white group-hover/metric:-translate-y-1 flex-shrink-0">
                <Cpu class="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
            </div>
        </div>

        <!-- Card 3 -->
        <div
            class="group/metric relative flex items-center justify-between gap-2 p-3.5 sm:p-6 rounded-2xl bg-[var(--color-primary)]/[0.02] dark:bg-white/[0.01] backdrop-blur-md border border-[var(--color-primary)]/10 dark:border-white/5 transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--color-primary)]/40 hover:shadow-[0_12px_30px_-10px_rgba(59,130,246,0.15)] overflow-hidden"
        >
            <div class="absolute -right-10 -bottom-10 w-24 h-24 bg-[var(--color-primary)]/5 rounded-full blur-2xl transition-all duration-500 group-hover/metric:scale-150" />
            <div class="flex flex-col items-start justify-between h-full relative z-10 min-w-0">
                <p class="text-xl sm:text-3xl lg:text-4xl font-black dark:text-white leading-none tracking-tight transition-transform duration-300 group-hover/metric:scale-[1.03]">85%</p>
                <p class="text-[9px] sm:text-xs uppercase tracking-widest text-[var(--color-primary)] font-bold mt-2 truncate w-full">{{ t('landing.section.hero.metrics.deployment') }}</p>
            </div>
            <div class="flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[var(--color-primary)]/[0.05] dark:bg-white/[0.03] border border-[var(--color-primary)]/10 dark:border-white/10 text-gray-500 dark:text-gray-400 shadow-inner transition-all duration-500 group-hover/metric:bg-[var(--color-primary)] group-hover/metric:text-white group-hover/metric:-translate-y-1 flex-shrink-0">
                <Zap class="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
            </div>
        </div>

        <!-- Card 4 -->
        <div
            class="group/metric relative flex items-center justify-between gap-2 p-3.5 sm:p-6 rounded-2xl bg-[var(--color-primary)]/[0.02] dark:bg-white/[0.01] backdrop-blur-md border border-[var(--color-primary)]/10 dark:border-white/5 transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--color-primary)]/40 hover:shadow-[0_12px_30px_-10px_rgba(59,130,246,0.15)] overflow-hidden"
        >
            <div class="absolute -right-10 -bottom-10 w-24 h-24 bg-[var(--color-primary)]/5 rounded-full blur-2xl transition-all duration-500 group-hover/metric:scale-150" />
            <div class="flex flex-col items-start justify-between h-full relative z-10 min-w-0">
                <p class="text-xl sm:text-3xl lg:text-4xl font-black dark:text-white leading-none tracking-tight transition-transform duration-300 group-hover/metric:scale-[1.03]">25%</p>
                <p class="text-[9px] sm:text-xs uppercase tracking-widest text-[var(--color-primary)] font-bold mt-2 truncate w-full">{{ t('landing.section.hero.metrics.cloud') }}</p>
            </div>
            <div class="flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[var(--color-primary)]/[0.05] dark:bg-white/[0.03] border border-[var(--color-primary)]/10 dark:border-white/10 text-gray-500 dark:text-gray-400 shadow-inner transition-all duration-500 group-hover/metric:bg-[var(--color-primary)] group-hover/metric:text-white group-hover/metric:-translate-y-1 flex-shrink-0">
                <ServerCrash class="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.animate-fade-in-up {
    animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both !important;
}

@media (prefers-reduced-motion: reduce) {
    .animate-fade-in-up {
        animation: none !important;
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(16px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>