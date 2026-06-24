<script setup>
import profileImage from '@/assets/img/profile/profile.png';
import { Code2, Infinity, Cloud } from '@lucide/vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const skills = [
    { name: 'Full Stack', icon: Code2 },
    { name: 'DevOps', icon: Infinity },
    { name: 'Cloud', icon: Cloud }
];
</script>

<template>
    <div class="max-w-5xl mx-auto">
        <div
            class="
                flex
                flex-col
                lg:flex-row
                items-center
                gap-12
                lg:gap-16
            "
        >
            <!-- Foto -->
            <div
                class="
                    w-full
                    max-w-[260px]
                    mx-auto
                    lg:mx-0
                    shrink-0
                "
            >
                <div
                    class="
                        overflow-hidden
                        rounded-2xl
                        border
                        border-[var(--color-border-nav)]
                        bg-[var(--color-bg-nav)]/20
                        backdrop-blur-sm
                        shadow-lg
                    "
                >
                    <img
                        :src="profileImage"
                        alt="Gianmarco Linares"
                        class="w-full h-full object-cover"
                    />
                </div>
            </div>

            <!-- Contenido -->
            <div
                class="
                    flex-1
                    text-center
                    lg:text-left
                "
            >
                <!-- Badge -->
                <div
                    class="
                        flex
                        justify-center
                        lg:justify-start
                    "
                >
                    <div class="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
                        <div
                            v-for="skill in skills"
                            :key="skill.name"
                            class="
                                inline-flex
                                items-center
                                gap-2
                                px-4
                                py-2
                                rounded-full
                                border
                                border-[var(--color-primary)]/15
                                bg-[var(--color-primary)]/5
                                text-[10px]
                                font-mono
                                tracking-[0.25em]
                                text-[var(--color-primary)]
                                transition-all
                                hover:border-[var(--color-primary)]/30
                                hover:bg-[var(--color-primary)]/10
                            "
                        >
                            <component :is="skill.icon" class="w-3 h-3" />
                            {{ skill.name }}
                        </div>
                    </div>
                </div>

                <!-- Headline -->
                <h4
                    class="
                        text-xl
                        sm:text-2xl
                        font-semibold
                        leading-relaxed
                        text-[var(--color-primary)]
                    "
                >
                    {{ t('landing.section.about.story.slogan') }}
                </h4>

                <!-- Texto -->
                <div
                    class="
                        mt-6
                        space-y-5
                        text-sm
                        leading-relaxed
                        text-[var(--color-text-nav)]
                        dark:text-zinc-400
                    "
                >
                    <p>
                        {{ t('landing.section.about.story.paragraph.first') }}
                    </p>

                    <p>
                        {{ t('landing.section.about.story.paragraph.second') }}
                    </p>

                    <p>
                        {{ t('landing.section.about.story.paragraph.third') }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>