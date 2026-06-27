<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

defineProps({
    project: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <article
        :id="`project-${project.id}`"
        class="
            flex flex-col
            rounded-2xl
            border border-[var(--color-border-nav)]
            bg-[var(--color-primary)]/[0.02]
            dark:bg-white/[0.01]
            overflow-hidden
            transition-all duration-300
            hover:-translate-y-1
            hover:border-[var(--color-primary)]/30
        "
    >
        <!-- Identity + description -->
        <div class="p-6 flex-1">
            <div class="flex flex-wrap gap-2 mb-5">
                <span class="
                    px-3 py-1 rounded-full
                    bg-[var(--color-primary)]/10 text-[var(--color-primary)]
                    text-[10px] uppercase tracking-widest font-bold
                ">
                    {{ project.category }}
                </span>
                <span class="
                    px-3 py-1 rounded-full
                    bg-zinc-500/10 text-zinc-500
                    text-[10px] uppercase tracking-widest font-bold
                ">
                    {{ project.type }}
                </span>
            </div>

            <h3 class="text-2xl sm:text-3xl font-bold text-[var(--color-text-nav-hover)] dark:text-white mb-1">
                {{ project.title }}
            </h3>

            <p class="text-xs font-semibold text-[var(--color-primary)] mb-4">
                {{ project.company }}
            </p>

            <p class="text-sm text-[var(--color-text-nav)] leading-relaxed">
                {{ project.shortDescription }}
            </p>
        </div>

        <!-- Divider -->
        <div class="h-px bg-gradient-to-r from-transparent via-[var(--color-border-nav)] to-transparent" />

        <!-- Technical details -->
        <div class="p-6 space-y-5">
            <!-- Architecture + Methodology -->
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <p class="text-[10px] font-bold uppercase tracking-widest text-[var(--color-primary)] mb-1.5">
                        {{ t('landing.section.projects.card.label_architecture') }}
                    </p>
                    <p class="text-xs text-[var(--color-text-nav)] leading-relaxed">
                        {{ project.details.architecture }}
                    </p>
                </div>
                <div>
                    <p class="text-[10px] font-bold uppercase tracking-widest text-[var(--color-primary)] mb-1.5">
                        {{ t('landing.section.projects.card.label_methodology') }}
                    </p>
                    <p class="text-xs text-[var(--color-text-nav)] leading-relaxed">
                        {{ project.details.methodology }}
                    </p>
                </div>
            </div>

            <!-- Modules -->
            <div>
                <p class="text-[10px] font-bold uppercase tracking-widest text-[var(--color-primary)] mb-2">
                    {{ t('landing.section.projects.card.label_modules') }}
                </p>
                <div class="flex flex-wrap gap-1.5">
                    <span
                        v-for="module in project.details.modules"
                        :key="module"
                        class="
                            px-2.5 py-1 rounded-md
                            text-[10px] font-medium
                            bg-[var(--color-primary)]/5 text-[var(--color-primary)]
                            border border-[var(--color-primary)]/10
                        "
                    >
                        {{ module }}
                    </span>
                </div>
            </div>

            <!-- Stack -->
            <div>
                <p class="text-[10px] font-bold uppercase tracking-widest text-[var(--color-primary)] mb-2">
                    {{ t('landing.section.projects.card.label_stack') }}
                </p>
                <div class="flex flex-wrap gap-1.5">
                    <template v-for="(items, category) in project.stack" :key="category">
                        <span
                            v-for="item in items"
                            :key="item"
                            class="px-2.5 py-1 rounded-md text-xs bg-zinc-500/10 text-zinc-500"
                        >
                            {{ item }}
                        </span>
                    </template>
                </div>
            </div>
        </div>
    </article>
</template>
