<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import img1 from '@/assets/img/profile/profile.png';
import img2 from '@/assets/img/profile/profile2.png';

const { t } = useI18n();
const images = [img1, img2];
const currentIndex = ref(0);
</script>

<template>
    <div class="space-y-8">
        <div class="flex flex-col md:flex-row gap-8 items-start">
            <div class="w-full md:w-[260px] shrink-0 aspect-[4/5] rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-lg">
                <img :src="images[currentIndex]" class="w-full h-full object-cover" />
            </div>

            <div class="flex-1 font-mono text-zinc-700 dark:text-zinc-400 text-sm leading-relaxed space-y-6">
                <div class="border-l-2 border-[var(--color-primary)] pl-5 py-0.5">
                    <p class="text-base text-zinc-900 dark:text-zinc-200 leading-snug">
                        {{ t('landing.section.about.description.paragraph_one') }}
                    </p>
                </div>
                <p class="leading-relaxed">{{ t('landing.section.about.description.paragraph_two') }}</p>
            </div>
        </div>

        <div class="font-mono text-zinc-700 dark:text-zinc-400 text-sm leading-relaxed space-y-4">
            <p>{{ t('landing.section.about.description.paragraph_three') }}</p>
            <p>{{ t('landing.section.about.description.paragraph_four') }}</p>
        </div>
    </div>
</template>