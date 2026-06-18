<script setup>
import { useI18n } from 'vue-i18n';
import {
    MessagesSquare,
    ScanSearch,
    BriefcaseBusiness,
    Cpu,
    Zap,
    ServerCrash,
    Rocket,
    ArrowBigDownDash,
} from '@lucide/vue';
import { FolderOpenDot } from '@lucide/vue';

const { t } = useI18n();

const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/path-to-your-cv.pdf'; // Modifica con la ruta real de tu archivo
    link.download = 'Gianmarco_Linares_CV.pdf';
    link.click();
};

const techStack = [
    { name: 'Vue.js', iconClass: 'devicon-vuejs-plain' },
    { name: 'Python', iconClass: 'devicon-python-plain' },
    { name: 'Django', iconClass: 'devicon-django-plain' },
    { name: 'TypeScript', iconClass: 'devicon-typescript-plain' },
    { name: 'Docker', iconClass: 'devicon-docker-plain' },
    { name: 'Kubernetes', iconClass: 'devicon-kubernetes-plain' },
    { name: 'AWS', iconClass: 'devicon-amazonwebservices-original' },
    { name: 'PostgreSQL', iconClass: 'devicon-postgresql-plain' },
    { name: 'Linux', iconClass: 'devicon-linux-plain' },
    { name: 'Git', iconClass: 'devicon-git-plain' },
];
</script>

<template>
    <section id="home" class="relative w-full h-auto lg:h-[calc(100vh-64px)] overflow-hidden flex items-center pt-4 pb-8 lg:py-0">
        <!-- Fondos Ambientales Posteriores -->
        <div class="absolute left-1/4 top-1/4 z-0 h-96 w-96 rounded-full bg-[var(--color-primary)]/10 blur-[120px] pointer-events-none animate-pulse duration-[6000ms]"/>

        <!-- Contenedor Principal Flex -->
        <div class="mx-auto max-w-7xl px-6 w-full flex flex-col gap-6 lg:gap-10 relative z-10">

            <!-- Grid de Contenido principal -->
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

            <!-- Sección de Métricas Optimizada para Mobile Flawless -->
            <div class="grid grid-cols-2 lg:grid-cols-4 items-stretch gap-3 sm:gap-6 w-full max-w-md lg:max-w-none mx-auto animate-fade-in-up [animation-delay:450ms] relative z-20">

                <!-- Card 1 -->
                <div class="group/metric relative flex items-center justify-between gap-2 p-3.5 sm:p-6 rounded-2xl bg-[var(--color-primary)]/[0.02] dark:bg-white/[0.01] backdrop-blur-md border border-[var(--color-primary)]/10 dark:border-white/5 transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--color-primary)]/40 hover:shadow-[0_12px_30px_-10px_rgba(59,130,246,0.15)] overflow-hidden">
                    <div class="absolute -right-10 -bottom-10 w-24 h-24 bg-[var(--color-primary)]/5 rounded-full blur-2xl transition-all duration-500 group-hover/metric:scale-150" />
                    <div class="flex flex-col items-start justify-between h-full relative z-10 min-w-0">
                        <p class="text-xl sm:text-3xl lg:text-4xl font-black text-[var(--color-primary)] leading-none tracking-tight transition-transform duration-300 group-hover/metric:scale-[1.03]">+4</p>
                        <p class="text-[9px] sm:text-xs uppercase tracking-widest text-[var(--color-text-nav-hover)]/70 dark:text-white/60 font-bold mt-2 truncate w-full">Años Exp.</p>
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
                        <p class="text-xl sm:text-3xl lg:text-4xl font-black text-[var(--color-primary)] leading-none tracking-tight transition-transform duration-300 group-hover/metric:scale-[1.03]">-30%</p>
                        <p class="text-[9px] sm:text-xs uppercase tracking-widest text-[var(--color-text-nav-hover)]/70 dark:text-white/60 font-bold mt-2 truncate w-full">Tiempo Admin.</p>
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
                        <p class="text-xl sm:text-3xl lg:text-4xl font-black text-[var(--color-primary)] leading-none tracking-tight transition-transform duration-300 group-hover/metric:scale-[1.03]">-85%</p>
                        <p class="text-[9px] sm:text-xs uppercase tracking-widest text-[var(--color-text-nav-hover)]/70 dark:text-white/60 font-bold mt-2 truncate w-full">Tiempo Deploy</p>
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
                        <p class="text-xl sm:text-3xl lg:text-4xl font-black text-[var(--color-primary)] leading-none tracking-tight transition-transform duration-300 group-hover/metric:scale-[1.03]">-25%</p>
                        <p class="text-[9px] sm:text-xs uppercase tracking-widest text-[var(--color-text-nav-hover)]/70 dark:text-white/60 font-bold mt-2 truncate w-full">Costos Cloud</p>
                    </div>
                    <div class="flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[var(--color-primary)]/[0.05] dark:bg-white/[0.03] border border-[var(--color-primary)]/10 dark:border-white/10 text-gray-500 dark:text-gray-400 shadow-inner transition-all duration-500 group-hover/metric:bg-[var(--color-primary)] group-hover/metric:text-white group-hover/metric:-translate-y-1 flex-shrink-0">
                        <ServerCrash class="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                    </div>
                </div>
            </div>

            <!-- Separador Horizontal Unificado con el Navbar -->
            <div class="w-full flex items-center justify-center my-4">
                <div class="h-[1px] w-full max-w-3xl bg-[var(--color-border-nav)]/60"></div>
            </div>

            <!-- Carrusel Auténticamente Infinito -->
            <div class="w-full overflow-hidden pb-2 mt-2 select-none animate-fade-in-up [animation-delay:600ms] tech-marquee-mask relative z-20">
                <div class="flex gap-12 items-center whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">

                    <!-- Bloque Original -->
                    <div
                        v-for="(tech, index) in techStack"
                        :key="'tech-1-' + index"
                        class="inline-flex items-center gap-2.5 opacity-50 hover:opacity-100 transition-opacity duration-300 group/item"
                    >
                        <i
                            :class="[
                                tech.iconClass,
                                'text-2xl sm:text-3xl transition-transform duration-300 group-hover/item:scale-110 text-[var(--color-text-nav-hover)] hover:text-[var(--color-primary)]',
                            ]"
                        ></i>
                        <span
                            class="text-xs font-bold uppercase tracking-wider text-[var(--color-text-nav-hover)]"
                            >{{ tech.name }}</span
                        >
                    </div>
                    <!-- Bloque Espejo -->
                    <div
                        v-for="(tech, index) in techStack"
                        :key="'tech-2-' + index"
                        class="inline-flex items-center gap-2.5 opacity-50 hover:opacity-100 transition-opacity duration-300 group/item"
                        aria-hidden="true"
                    >
                        <i
                            :class="[
                                tech.iconClass,
                                'text-2xl sm:text-3xl transition-transform duration-300 group-hover/item:scale-110 text-[var(--color-text-nav-hover)] hover:text-[var(--color-primary)]',
                            ]"
                        ></i>
                        <span
                            class="text-xs font-bold uppercase tracking-wider text-[var(--color-text-nav-hover)]"
                            >{{ tech.name }}</span
                        >
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.tech-marquee-mask {
    mask-image: linear-gradient(to right, transparent, #000 12%, #000 88%, transparent);
    -webkit-mask-image: linear-gradient(to right, transparent, #000 12%, #000 88%, transparent);
}

.animate-fade-in-up {
    animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both !important;
}

.animate-fade-in-right {
    animation: fadeInRight 0.9s cubic-bezier(0.16, 1, 0.3, 1) both !important;
}

.animate-float {
    animation: float 4.5s ease-in-out infinite;
}

.animate-marquee {
    display: inline-flex;
    animation: marquee 30s linear infinite;
    width: max-content;
}

@keyframes marquee {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-50%);
    }
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
