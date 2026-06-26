<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { MessagesSquare, ScanSearch, ArrowBigDownDash } from '@lucide/vue';
import { SlotText } from 'slot-text/vue';
import "slot-text/style.css";

const { t } = useI18n();

const TITLE_ROTATION_INTERVAL_MS = 4000;

const currentTitle = ref("Full Stack Developer");
let interval = null;
let isDeveloper = true;

const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/path-to-your-cv.pdf';
    link.download = 'Gianmarco_Linares_CV.pdf';
    link.click();
};

onMounted(() => {
    interval = setInterval(() => {
        isDeveloper = !isDeveloper;
        currentTitle.value = isDeveloper ? "Full Stack Developer" : "DevOps Engineer";
    }, TITLE_ROTATION_INTERVAL_MS);
});

onUnmounted(() => {
    clearInterval(interval);
});
</script>

<template>
    <div class="w-full flex justify-center items-center">

        <div class="flex flex-col gap-6 text-center items-center max-w-4xl w-full px-4 relative z-30">

            <div class="flex items-center gap-2 select-none">
                <span class="relative flex h-1.5 w-1.5">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                <span class="text-[10px] font-medium tracking-wider uppercase text-emerald-600 dark:text-emerald-400/80 leading-none">
                    {{ t('status_personal') }}
                </span>
            </div>

            <h1 class="text-2xl sm:text-5xl lg:text-6xl font-black tracking-tight animate-fade-in-up text-[var(--color-text-nav-hover)] dark:text-white select-none whitespace-nowrap"
                style="filter: drop-shadow(2px 4px 8px rgba(0, 0, 0, 0.08))">
                
                <span class="flex flex-row items-center justify-center">
                    <span aria-hidden="true" class="text-xl sm:text-4xl font-medium font-mono text-gray-400/60 dark:text-zinc-500/50 mr-1.5 sm:mr-3 select-none">&lt;</span>
                    <SlotText :text="currentTitle" class="inline-block" />
                    <span aria-hidden="true" class="text-xl sm:text-4xl font-medium font-mono text-gray-400/60 dark:text-zinc-500/50 ml-1.5 sm:ml-3 select-none">/&gt;</span>
                </span>
            </h1>

            <h2 class="text-2xl sm:text-4xl font-swanky font-extrabold text-[var(--color-primary)] mt-2">
                Gianmarco Linares Becerra
            </h2>

            <p class="text-sm sm:text-lg text-[var(--color-text-nav-hover)]/60 font-medium leading-relaxed max-w-2xl animate-fade-in-up [animation-delay:150ms]">
                {{ t('landing.section.hero.description') }}
            </p>

            <div class="flex flex-col sm:flex-row items-center justify-center gap-4 w-full animate-fade-in-up [animation-delay:300ms]">
                <button @click="downloadCV" type="button" class="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300/80 dark:border-transparent bg-transparent dark:bg-white/10 px-7 py-3.5 text-xs font-extrabold tracking-wider uppercase text-[var(--color-primary)] dark:text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-50 dark:hover:bg-white/20 active:scale-95 shadow-sm">
                    <span>{{ t('landing.section.hero.button_download') }}</span>
                    <ArrowBigDownDash class="w-4 h-4" />
                </button>

                <a href="#projects" class="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300/80 dark:border-transparent bg-transparent dark:bg-white/10 px-7 py-3.5 text-xs font-extrabold tracking-wider uppercase text-[var(--color-primary)] dark:text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-50 dark:hover:bg-white/20 active:scale-95 shadow-sm">
                    <span>{{ t('landing.section.hero.button_view_projects') }}</span>
                    <ScanSearch class="w-4 h-4" />
                </a>

                <button @click="scrollToContact" type="button" class="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300/80 dark:border-transparent bg-transparent dark:bg-white/10 px-7 py-3.5 text-xs font-extrabold tracking-wider uppercase text-[var(--color-primary)] dark:text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-50 dark:hover:bg-white/20 active:scale-95 shadow-sm">
                    <span>{{ t('landing.section.hero.button_lets_talk') }}</span>
                    <MessagesSquare class="w-4 h-4" />
                </button>
            </div>
        </div>
    </div>
</template>