<script setup>
import { useI18n } from 'vue-i18n';
import {
    MessagesSquare,
    ScanSearch,
    Briefcase,
    Activity,
    FolderCode,
    Rocket,
    ArrowBigDownDash,
} from '@lucide/vue';

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
    <section
        id="home"
        class="relative w-full min-h-[calc(100vh-64px)] overflow-hidden flex items-center py-12 lg:py-0"
    >
        <!-- Fondos Difuminados (Inmutables) -->
        <div
            class="absolute left-1/4 top-1/4 -z-10 h-96 w-96 rounded-full bg-[var(--color-primary)]/10 blur-[120px] pointer-events-none animate-pulse duration-[6000ms]"
        />

        <div
            class="absolute right-1/4 bottom-1/4 -z-10 h-96 w-96 rounded-full bg-blue-500/5 blur-[140px] pointer-events-none"
        />

        <!-- Contenedor Principal Flex - Todo compactado hacia arriba -->
        <div class="mx-auto max-w-7xl px-6 w-full flex flex-col gap-10 lg:gap-12">
            <!-- Grid de Contenido principal -->
            <div class="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                <!-- Columna Izquierda (Contenido y Textos) -->
                <div
                    class="lg:col-span-7 flex flex-col gap-5 lg:gap-6 text-center lg:text-left items-center lg:items-start order-2 lg:order-1"
                >
                    <div class="flex flex-col gap-1.5 items-center lg:items-start w-full">
                        <div class="flex items-center gap-2 select-none h-full">
                            <span class="relative flex h-1.5 w-1.5">
                                <span
                                    class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
                                ></span>
                                <span
                                    class="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"
                                ></span>
                            </span>
                            <span
                                class="text-[10px] font-medium tracking-wider uppercase text-emerald-600 dark:text-emerald-400/80 leading-none"
                            >
                                {{ t('footer.status') }}
                            </span>
                        </div>

                        <h1
                            class="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] animate-fade-in-up mt-1"
                            style="
                                filter: drop-shadow(2px 4px 10px rgba(0, 0, 0, 0.12))
                                    drop-shadow(0px 0px 25px rgba(59, 130, 246, 0.15));
                            "
                        >
                            <span class="block text-[var(--color-primary)]">
                                Full Stack Developer & DevOps Engineer
                            </span>
                        </h1>
                    </div>

                    <div
                        class="h-[6px] w-40 bg-[var(--color-primary)] rounded-full -mt-1 mx-auto lg:mx-0 animate-fade-in-up [animation-delay:75ms]"
                    />

                    <p
                        class="text-xs sm:text-base text-[var(--color-text-nav-hover)]/80 font-medium leading-relaxed max-w-lg -mt-1 animate-fade-in-up [animation-delay:150ms]"
                    >
                        {{ t('landing.section.hero.description') }}
                    </p>

                    <div
                        class="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto mt-1 animate-fade-in-up [animation-delay:300ms]"
                    >
                        <button
                            @click="scrollToContact"
                            type="button"
                            class="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] px-6 py-3.5 text-xs font-bold tracking-wider uppercase text-white shadow-lg shadow-[var(--color-primary)]/20 hover:shadow-[var(--color-primary)]/35 transition-all duration-300 active:scale-95 cursor-pointer group"
                        >
                            <span>{{ t('landing.section.hero.button_lets_talk') }}</span>
                            <MessagesSquare
                                class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                        </button>

                        <a
                            href="#projects"
                            class="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--color-primary)]/60 bg-[var(--color-primary)]/[0.01] hover:bg-[var(--color-primary)]/[0.06] px-6 py-3.5 text-xs font-bold tracking-wider uppercase text-[var(--color-primary)] transition-all duration-300 active:scale-95 group"
                        >
                            <span>{{ t('landing.section.hero.button_view_projects') }}</span>
                            <ScanSearch
                                class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                        </a>

                        <button
                            @click="downloadCV"
                            type="button"
                            class="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--color-primary)]/60 bg-[var(--color-primary)]/[0.01] hover:bg-[var(--color-primary)]/[0.06] px-6 py-3.5 text-xs font-bold tracking-wider uppercase text-[var(--color-primary)] transition-all duration-300 active:scale-95 group"
                        >
                            <span>Download CV</span>

                            <ArrowBigDownDash
                                class="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5"
                            />
                        </button>
                    </div>
                </div>

                <!-- Columna Derecha (Imagen Ilustrativa) -->
                <div
                    class="lg:col-span-5 flex justify-center items-center order-1 lg:order-2 w-full animate-fade-in-right lg:-mt-8"
                >
                    <!-- Hero Image -->
                    <div
                        class="relative w-full max-w-[240px] sm:max-w-md md:max-w-lg lg:max-w-xl aspect-[4/3] flex items-center justify-center group/hero pointer-events-none lg:pointer-events-auto"
                    >
                        <div
                            class="absolute w-[85%] h-[85%] lg:w-[120%] lg:h-[120%] bg-[#DDD7F3] dark:bg-[#DDD7F3]/10 pointer-events-none translate-y-4 translate-x-2 lg:translate-y-10 lg:translate-x-5 blur-[40px] lg:blur-[110px] opacity-70 transition-all duration-1000 ease-out group-hover/hero:scale-110 group-hover/hero:translate-y-6 lg:group-hover/hero:translate-y-12 group-hover/hero:blur-[35px] lg:group-hover/hero:blur-[100px]"
                        />

                        <div
                            class="absolute w-[85%] h-[85%] lg:w-[120%] lg:h-[120%] bg-[#EAE6F8] dark:bg-[#EAE6F8]/15 pointer-events-none blur-[60px] lg:blur-[160px] transition-all duration-1000 ease-out group-hover/hero:scale-110 group-hover/hero:blur-[55px] lg:group-hover/hero:blur-[150px]"
                        />

                        <div
                            class="w-full h-full flex items-center justify-center transition-transform duration-500 ease-out group-hover/hero:scale-[1.04] group-hover/hero:-translate-y-2 animate-float relative z-20"
                        >
                            <img
                                src="@/assets/img/hero/dev.png"
                                alt="Gianmarco Linares Full Stack & DevOps"
                                class="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(88,98,148,0.15)]"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <!-- Sección de Métricas -->
            <div
                class="mt-8 grid grid-cols-2 lg:grid-cols-4 items-stretch gap-4 sm:gap-6 w-full max-w-md lg:max-w-none mx-auto animate-fade-in-up [animation-delay:450ms]"
            >
                <div
                    class="group/metric relative flex items-center justify-between gap-4 p-5 sm:p-6 rounded-2xl bg-[var(--color-primary)]/[0.02] dark:bg-white/[0.01] backdrop-blur-md border border-[var(--color-primary)]/10 dark:border-white/5 transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--color-primary)]/40 hover:shadow-[0_12px_30px_-10px_rgba(59,130,246,0.15)] overflow-hidden"
                >
                    <div
                        class="absolute -right-10 -bottom-10 w-24 h-24 bg-[var(--color-primary)]/5 rounded-full blur-2xl transition-all duration-500 group-hover/metric:scale-150 group-hover/metric:bg-[var(--color-primary)]/10"
                    />
                    <div class="flex flex-col items-start justify-between h-full relative z-10">
                        <p
                            class="text-2xl sm:text-3xl lg:text-4xl font-black text-[var(--color-primary)] leading-none tracking-tight transition-transform duration-300 group-hover/metric:scale-[1.03]"
                        >
                            +4
                        </p>
                        <p
                            class="text-[10px] sm:text-xs uppercase tracking-widest text-[var(--color-text-nav-hover)]/70 dark:text-white/60 font-bold mt-2.5 whitespace-nowrap"
                        >
                            Years Exp.
                        </p>
                    </div>
                    <div
                        class="flex items-center justify-center p-2.5 rounded-xl bg-[var(--color-primary)]/[0.05] dark:bg-white/[0.03] border border-[var(--color-primary)]/10 dark:border-white/10 shadow-inner transition-all duration-500 group-hover/metric:bg-[var(--color-primary)] group-hover/metric:text-white group-hover/metric:-translate-y-1 group-hover/metric:shadow-[0_4px_12px_rgba(59,130,246,0.3)] text-[var(--color-primary)]"
                    >
                        <Briefcase class="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                    </div>
                </div>

                <div
                    class="group/metric relative flex items-center justify-between gap-4 p-5 sm:p-6 rounded-2xl bg-[var(--color-primary)]/[0.02] dark:bg-white/[0.01] backdrop-blur-md border border-[var(--color-primary)]/10 dark:border-white/5 transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--color-primary)]/40 hover:shadow-[0_12px_30px_-10px_rgba(59,130,246,0.15)] overflow-hidden"
                >
                    <div
                        class="absolute -right-10 -bottom-10 w-24 h-24 bg-[var(--color-primary)]/5 rounded-full blur-2xl transition-all duration-500 group-hover/metric:scale-150 group-hover/metric:bg-[var(--color-primary)]/10"
                    />
                    <div class="flex flex-col items-start justify-between h-full relative z-10">
                        <p
                            class="text-2xl sm:text-3xl lg:text-4xl font-black text-[var(--color-primary)] leading-none tracking-tight transition-transform duration-300 group-hover/metric:scale-[1.03]"
                        >
                            99.9%
                        </p>
                        <p
                            class="text-[10px] sm:text-xs uppercase tracking-widest text-[var(--color-text-nav-hover)]/70 dark:text-white/60 font-bold mt-2.5 whitespace-nowrap"
                        >
                            Uptime Aim
                        </p>
                    </div>
                    <div
                        class="flex items-center justify-center p-2.5 rounded-xl bg-[var(--color-primary)]/[0.05] dark:bg-white/[0.03] border border-[var(--color-primary)]/10 dark:border-white/10 shadow-inner transition-all duration-500 group-hover/metric:bg-[var(--color-primary)] group-hover/metric:text-white group-hover/metric:-translate-y-1 group-hover/metric:shadow-[0_4px_12px_rgba(59,130,246,0.3)] text-[var(--color-primary)]"
                    >
                        <Activity class="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                    </div>
                </div>

                <div
                    class="group/metric relative flex items-center justify-between gap-4 p-5 sm:p-6 rounded-2xl bg-[var(--color-primary)]/[0.02] dark:bg-white/[0.01] backdrop-blur-md border border-[var(--color-primary)]/10 dark:border-white/5 transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--color-primary)]/40 hover:shadow-[0_12px_30px_-10px_rgba(59,130,246,0.15)] overflow-hidden"
                >
                    <div
                        class="absolute -right-10 -bottom-10 w-24 h-24 bg-[var(--color-primary)]/5 rounded-full blur-2xl transition-all duration-500 group-hover/metric:scale-150 group-hover/metric:bg-[var(--color-primary)]/10"
                    />
                    <div class="flex flex-col items-start justify-between h-full relative z-10">
                        <p
                            class="text-2xl sm:text-3xl lg:text-4xl font-black text-[var(--color-primary)] leading-none tracking-tight transition-transform duration-300 group-hover/metric:scale-[1.03]"
                        >
                            20+
                        </p>
                        <p
                            class="text-[10px] sm:text-xs uppercase tracking-widest text-[var(--color-text-nav-hover)]/70 dark:text-white/60 font-bold mt-2.5 whitespace-nowrap"
                        >
                            Projects
                        </p>
                    </div>
                    <div
                        class="flex items-center justify-center p-2.5 rounded-xl bg-[var(--color-primary)]/[0.05] dark:bg-white/[0.03] border border-[var(--color-primary)]/10 dark:border-white/10 shadow-inner transition-all duration-500 group-hover/metric:bg-[var(--color-primary)] group-hover/metric:text-white group-hover/metric:-translate-y-1 group-hover/metric:shadow-[0_4px_12px_rgba(59,130,246,0.3)] text-[var(--color-primary)]"
                    >
                        <FolderCode class="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                    </div>
                </div>

                <div
                    class="group/metric relative flex items-center justify-between gap-4 p-5 sm:p-6 rounded-2xl bg-[var(--color-primary)]/[0.02] dark:bg-white/[0.01] backdrop-blur-md border border-[var(--color-primary)]/10 dark:border-white/5 transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--color-primary)]/40 hover:shadow-[0_12px_30px_-10px_rgba(59,130,246,0.15)] overflow-hidden"
                >
                    <div
                        class="absolute -right-10 -bottom-10 w-24 h-24 bg-[var(--color-primary)]/5 rounded-full blur-2xl transition-all duration-500 group-hover/metric:scale-150 group-hover/metric:bg-[var(--color-primary)]/10"
                    />
                    <div class="flex flex-col items-start justify-between h-full relative z-10">
                        <p
                            class="text-2xl sm:text-3xl lg:text-4xl font-black text-[var(--color-primary)] leading-none tracking-tight transition-transform duration-300 group-hover/metric:scale-[1.03]"
                        >
                            0 a 1
                        </p>
                        <p
                            class="text-[10px] sm:text-xs uppercase tracking-widest text-[var(--color-text-nav-hover)]/70 dark:text-white/60 font-bold mt-2.5 whitespace-nowrap"
                        >
                            Scratch Imp.
                        </p>
                    </div>
                    <div
                        class="flex items-center justify-center p-2.5 rounded-xl bg-[var(--color-primary)]/[0.05] dark:bg-white/[0.03] border border-[var(--color-primary)]/10 dark:border-white/10 shadow-inner transition-all duration-500 group-hover/metric:bg-[var(--color-primary)] group-hover/metric:text-white group-hover/metric:-translate-y-1 group-hover/metric:shadow-[0_4px_12px_rgba(59,130,246,0.3)] text-[var(--color-primary)]"
                    >
                        <Rocket class="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                    </div>
                </div>
            </div>

            <!-- Marquee -->
            <div
                class="flex gap-6 sm:gap-12 items-center whitespace-nowrap animate-marquee hover:[animation-play-state:paused]"
            >
                <div
                    class="flex gap-12 items-center whitespace-nowrap animate-marquee hover:[animation-play-state:paused]"
                >
                    <div
                        v-for="(tech, index) in techStack"
                        :key="'tech-1-' + index"
                        class="flex items-center gap-2.5 opacity-50 hover:opacity-100 transition-opacity duration-300 group/item"
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
                    <div
                        v-for="(tech, index) in techStack"
                        :key="'tech-2-' + index"
                        class="flex items-center gap-2.5 opacity-50 hover:opacity-100 transition-opacity duration-300 group/item"
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
    mask-image: linear-gradient(to right, transparent, #000 15%, #000 85%, transparent);
    -webkit-mask-image: linear-gradient(to right, transparent, #000 15%, #000 85%, transparent);
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
    animation: marquee 45s linear infinite;
    width: max-content;
}

@keyframes marquee {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-40%);
    }
}

@keyframes float {
    0%,
    100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-15px);
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInRight {
    from {
        opacity: 0;
        transform: translateX(30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}
</style>
