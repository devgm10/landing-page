<script setup>
import { useI18n } from 'vue-i18n';
import {
    MessagesSquare,
    ScanSearch,
    ArrowBigDownDash,
} from '@lucide/vue';

const { t } = useI18n();

const scrollToContact = () => {
    const contactSection = document.getElementById('contact');

    if (contactSection) {
        contactSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
};

const downloadCV = () => {
    const link = document.createElement('a');

    link.href = '/path-to-your-cv.pdf';
    link.download = 'Gianmarco_Linares_CV.pdf';

    link.click();
};
</script>

<template>
    <div class="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

        <!-- Columna Izquierda (Contenido y Textos - Capa Superior) -->
        <div class="lg:col-span-7 flex flex-col gap-4 lg:gap-5 text-center lg:text-left items-center lg:items-start order-2 lg:order-1 relative z-30">

            <div class="flex flex-col gap-1.5 items-center lg:items-start w-full">

                <!-- Status idéntico al del Footer / Diseño original -->
                <div class="flex items-center gap-2 select-none h-full">
                            <span class="relative flex h-1.5 w-1.5">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
                                ></span>

                                <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"
                                ></span>
                            </span>

                            <span class="text-[10px] font-medium tracking-wider uppercase text-emerald-600 dark:text-emerald-400/80 leading-none"
                            >
                                {{ t('footer.status') }}
                            </span>
                        </div>

                <h1
                    class="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] animate-fade-in-up mt-1 text-[var(--color-primary)]"
                    style="filter: drop-shadow(2px 4px 8px rgba(0, 0, 0, 0.08))"
                >
                    <span class="block"> Full Stack Developer & DevOps Engineer </span>
                </h1>
            </div>

            <div class="h-[6px] w-40 bg-[var(--color-primary)] rounded-full mx-auto lg:mx-0 animate-fade-in-up [animation-delay:75ms]"/>

            <p class="text-xs sm:text-base text-[var(--color-text-nav-hover)]/80 font-medium leading-relaxed max-w-lg animate-fade-in-up [animation-delay:150ms]">
                {{ t('landing.section.hero.description') }}
            </p>

            <div class="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-2 animate-fade-in-up [animation-delay:300ms]">
                <button
                    @click="downloadCV"
                    type="button"
                    class="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-gray-300/80 dark:border-transparent bg-transparent dark:bg-white/10 px-7 py-3.5 text-xs font-bold tracking-wider uppercase text-[var(--color-primary)] dark:text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-gray-50 dark:hover:bg-white/20 active:scale-95 group shadow-sm dark:shadow-none"
                >
                    <span>Download CV</span>
                    <ArrowBigDownDash class="w-4 h-4 text-gray-400 dark:text-white transition-transform duration-300 group-hover:translate-y-0.5" />
                </button>

                <a
                    href="#projects"
                    class="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-gray-300/80 dark:border-transparent bg-transparent dark:bg-white/10 px-7 py-3.5 text-xs font-bold tracking-wider uppercase text-[var(--color-primary)] dark:text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-gray-50 dark:hover:bg-white/20 active:scale-95 group shadow-sm dark:shadow-none"
                >
                    <span>{{ t('landing.section.hero.button_view_projects') }}</span>
                    <ScanSearch class="w-4 h-4 text-gray-400 dark:text-white transition-transform duration-300 group-hover:scale-110" />
                </a>

                <button
                    @click="scrollToContact"
                    type="button"
                    class="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-gray-300/80 dark:border-transparent bg-transparent dark:bg-white/10 px-7 py-3.5 text-xs font-bold tracking-wider uppercase text-[var(--color-primary)] dark:text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-gray-50 dark:hover:bg-white/20 active:scale-95 group shadow-sm dark:shadow-none"
                >
                    <span class="relative z-10">{{ t('landing.section.hero.button_lets_talk') }}</span>
                    <MessagesSquare class="w-4 h-4 text-gray-400 dark:text-white relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
            </div>
        </div>

        <!-- Columna Derecha (Ilustración y Auras - Capa Inferior) -->
        <div class="lg:col-span-5 flex justify-center items-center order-1 lg:order-2 w-full animate-fade-in-right lg:-mt-4 relative z-10">

            <div class="relative w-full max-w-[240px] sm:max-w-md md:max-w-lg lg:max-w-xl aspect-[4/3] flex items-center justify-center group/hero pointer-events-none lg:pointer-events-auto">

                <!-- Auras recolocadas y contenidas para que no toquen el título -->
                <div class="absolute right-0 bottom-0 w-[80%] h-[80%] bg-[#DDD7F3] dark:bg-[#DDD7F3]/10 pointer-events-none translate-y-6 translate-x-6 blur-[50px] lg:blur-[90px] opacity-60 transition-all duration-1000 ease-out group-hover/hero:scale-105"/>

                <div class="absolute right-4 top-4 w-[75%] h-[75%] bg-[#EAE6F8] dark:bg-[#EAE6F8]/15 pointer-events-none blur-[60px] lg:blur-[120px] transition-all duration-1000 ease-out group-hover/hero:scale-105"/>

                <div class="w-full h-full flex items-center justify-center transition-transform duration-500 ease-out group-hover/hero:scale-[1.04] group-hover/hero:-translate-y-2 animate-float relative z-20">
                    <img
                        src="@/assets/img/hero/dev.png"
                        alt="Gianmarco Linares Full Stack & DevOps"
                        class="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(88,98,148,0.15)]"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.animate-fade-in-up {
    animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both !important;
}

.animate-fade-in-right {
    animation: fadeInRight 0.9s cubic-bezier(0.16, 1, 0.3, 1) both !important;
}

.animate-float {
    animation: float 4.5s ease-in-out infinite;
}

@keyframes float {
    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-12px);
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

@keyframes fadeInRight {
    from {
        opacity: 0;
        transform: translateX(24px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}
</style>