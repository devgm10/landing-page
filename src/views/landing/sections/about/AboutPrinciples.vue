<script setup>
import { computed } from 'vue';
import { Brain, WandSparkles, Hammer, Rocket } from '@lucide/vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const principles = computed(() => [
    {
        icon: Brain,
        title: t('landing.section.about.principles.analyze.title'),
        description: t('landing.section.about.principles.analyze.description'),
    },
    {
        icon: WandSparkles,
        title: t('landing.section.about.principles.design.title'),
        description: t('landing.section.about.principles.design.description'),
    },
    {
        icon: Hammer,
        title: t('landing.section.about.principles.build.title'),
        description: t('landing.section.about.principles.build.description'),
    },
    {
        icon: Rocket,
        title: t('landing.section.about.principles.deploy.title'),
        description: t('landing.section.about.principles.deploy.description'),
    },
]);
</script>

<template>
    <div
        class="
            grid
            grid-cols-1
            md:grid-cols-4
            gap-4
            mt-20
        "
    >
        <div
            v-for="item in principles"
            :key="item.title"
            class="
                group
                p-4
                rounded-2xl
                border
                border-[var(--color-border-nav)]
                bg-[var(--color-bg-nav)]/20
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[var(--color-primary)]/30
            "
        >
            <div
                class="
                    w-10
                    h-10
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    bg-[var(--color-primary)]/5
                    border
                    border-[var(--color-primary)]/10
                    mb-5
                "
            >
                <component
                    :is="item.icon"
                    class="
                        w-5
                        h-5
                        text-[var(--color-primary)]
                    "
                />
            </div>

            <h4
                class="
                    text-xs
                    uppercase
                    tracking-[0.2em]
                    font-bold
                    text-[var(--color-text-nav-hover)]
                    dark:text-white
                    mb-3
                "
            >
                {{ item.title }}
            </h4>

            <p
                class="
                    text-sm
                    leading-relaxed
                    text-[var(--color-text-nav)]
                    dark:text-zinc-400
                "
            >
                {{ item.description }}
            </p>
        </div>
    </div>
</template>