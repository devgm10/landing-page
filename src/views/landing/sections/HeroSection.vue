<script setup>
import { useI18n } from 'vue-i18n';
import {
    MessagesSquare,
    ScanSearch,
    Briefcase,
    Activity,
    FolderCode,
    Users,
    Rocket,
} from '@lucide/vue';
import { BriefcaseBusiness } from '@lucide/vue';

const { t } = useI18n();

const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};
</script>

<template>
    <section
        id="home"
        class="relative w-full min-h-[calc(100vh-4rem)] flex items-start justify-center overflow-hidden pt-6 sm:pt-12 md:pt-16 pb-12"
    >
        <!-- Luces de fondo difuminadas -->
        <div
            class="absolute left-1/4 top-1/4 -z-10 h-96 w-96 rounded-full bg-[var(--color-primary)]/10 blur-[120px] pointer-events-none animate-pulse duration-[6000ms]"
        />
        <div
            class="absolute right-1/4 bottom-1/4 -z-10 h-96 w-96 rounded-full bg-blue-500/5 blur-[140px] pointer-events-none"
        />

        <div class="mx-auto max-w-7xl px-6 w-full flex flex-col gap-12 sm:gap-16 justify-center">
            <!-- Bloque Superior Principal: Grid de 12 Columnas -->
            <div class="w-full grid grid-cols-1 nav:grid-cols-12 gap-8 nav:gap-12 items-center">
                <!-- Columna Izquierda (Contenido Principal) -->
                <div
                    class="nav:col-span-7 flex flex-col gap-4 sm:gap-5 text-center nav:text-left items-center nav:items-start order-2 nav:order-1"
                >
                    <!-- Tu Rol como Título Principal Impactante -->
                    <h1
                        class="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] animate-fade-in-up"
                        style="
                            filter: drop-shadow(2px 4px 10px rgba(0, 0, 0, 0.12))
                                drop-shadow(0px 0px 25px rgba(59, 130, 246, 0.15));
                        "
                    >
                        <span class="block text-[var(--color-primary)]">
                            Full Stack Developer & DevOps Engineer
                        </span>
                    </h1>

                    <!-- ➖ Línea Separadora Sólida y Responsiva (Bajo el Título) -->
                    <div
                        class="h-[6px] w-40 bg-[var(--color-primary)] rounded-full my-1 mx-auto nav:mx-0 animate-fade-in-up [animation-delay:75ms]"
                    />

                    <!-- Descripción refinada con el espaciado mt-6 perfecto -->
                    <p
                        class="text-xs sm:text-base text-[var(--color-text-nav-hover)]/80 font-medium leading-relaxed max-w-xl mt-6 animate-fade-in-up [animation-delay:150ms]"
                    >
                        {{ t('landing.section.hero.description') }}
                    </p>

                    <!-- Botones de Acción -->
                    <div
                        class="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto mt-2 animate-fade-in-up [animation-delay:300ms]"
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
                    </div>
                </div>

                <!-- Columna Derecha (Ilustración Tech Optimizada) -->
                <div
                    class="nav:col-span-5 flex justify-center items-center order-1 nav:order-2 w-full animate-fade-in-right"
                >
                    <div
                        class="relative w-full max-w-sm sm:max-w-md md:max-w-xl aspect-[4/3] flex items-center justify-center group pointer-events-none nav:pointer-events-auto"
                    >
                        <!-- Contenedor animado con efecto de flotación constante -->
                        <div
                            class="w-full h-full flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-[1.03] group-hover:-translate-y-1 animate-float"
                        >
                            <img
                                src="@/assets/img/hero/dev.png"
                                alt="Gianmarco Linares Full Stack & DevOps"
                                class="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(88,98,148,0.12)]"
                            />
                        </div>

                        <!-- El destello azul de fondo acompaña la silueta -->
                        <div
                            class="absolute inset-x-10 inset-y-16 -z-10 bg-[var(--color-primary)]/10 blur-[80px] pointer-events-none rounded-full transform scale-90"
                        />
                    </div>
                </div>
            </div>

            <!-- Bloque de 5 Micro-Métricas: Centrado simétrico en móvil y extendido en Desktop -->
            <div
                class="grid grid-cols-2 nav:flex nav:flex-nowrap items-stretch justify-items-center nav:justify-between gap-y-8 gap-x-4 w-full max-w-md mx-auto nav:max-w-none animate-fade-in-up [animation-delay:450ms] mt-4"
            >
                <!-- Métrica 1: Experiencia -->
                <div
                    class="flex items-center justify-center nav:justify-start gap-2.5 w-full nav:w-auto"
                >
                    <div class="flex flex-col items-center nav:items-start justify-between h-full">
                        <p
                            class="text-xl sm:text-2xl lg:text-3xl font-black text-[var(--color-primary)] leading-none tracking-tight"
                        >
                            +4
                        </p>
                        <p
                            class="text-[9px] sm:text-xs uppercase tracking-widest text-[var(--color-text-nav-hover)]/60 font-bold mt-1.5 text-center nav:text-left whitespace-nowrap"
                        >
                            Years Exp.
                        </p>
                    </div>
                    <Briefcase
                        class="h-7 sm:h-8 w-auto text-[var(--color-primary)]/40 self-center hidden sm:block"
                    />
                </div>

                <!-- Separador 1 -->
                <div class="h-8 w-px bg-[var(--color-primary)]/20 self-center hidden nav:block" />

                <!-- Métrica 2: Uptime -->
                <div
                    class="flex items-center justify-center nav:justify-start gap-2.5 w-full nav:w-auto"
                >
                    <div class="flex flex-col items-center nav:items-start justify-between h-full">
                        <p
                            class="text-xl sm:text-2xl lg:text-3xl font-black text-[var(--color-primary)] leading-none tracking-tight"
                        >
                            99.9%
                        </p>
                        <p
                            class="text-[9px] sm:text-xs uppercase tracking-widest text-[var(--color-text-nav-hover)]/60 font-bold mt-1.5 text-center nav:text-left whitespace-nowrap"
                        >
                            Uptime Aim
                        </p>
                    </div>
                    <Activity
                        class="h-7 sm:h-8 w-auto text-[var(--color-primary)]/40 self-center hidden sm:block"
                    />
                </div>

                <!-- Separador 2 -->
                <div class="h-8 w-px bg-[var(--color-primary)]/20 self-center hidden nav:block" />

                <!-- Métrica 3: Proyectos -->
                <div
                    class="flex items-center justify-center nav:justify-start gap-2.5 w-full nav:w-auto"
                >
                    <div class="flex flex-col items-center nav:items-start justify-between h-full">
                        <p
                            class="text-xl sm:text-2xl lg:text-3xl font-black text-[var(--color-primary)] leading-none tracking-tight"
                        >
                            20+
                        </p>
                        <p
                            class="text-[9px] sm:text-xs uppercase tracking-widest text-[var(--color-text-nav-hover)]/60 font-bold mt-1.5 text-center nav:text-left whitespace-nowrap"
                        >
                            Projects
                        </p>
                    </div>
                    <FolderCode
                        class="h-7 sm:h-8 w-auto text-[var(--color-primary)]/40 self-center hidden sm:block"
                    />
                </div>

                <!-- Separador 3 -->
                <div class="h-8 w-px bg-[var(--color-primary)]/20 self-center hidden nav:block" />

                <!-- Métrica 4: Áreas -->
                <div
                    class="flex items-center justify-center nav:justify-start gap-2.5 w-full nav:w-auto"
                >
                    <div class="flex flex-col items-center nav:items-start justify-between h-full">
                        <p
                            class="text-xl sm:text-2xl lg:text-3xl font-black text-[var(--color-primary)] leading-none tracking-tight"
                        >
                            +10
                        </p>
                        <p
                            class="text-[9px] sm:text-xs uppercase tracking-widest text-[var(--color-text-nav-hover)]/60 font-bold mt-1.5 text-center nav:text-left whitespace-nowrap"
                        >
                            Areas Coll.
                        </p>
                    </div>
                    <Users
                        class="h-7 sm:h-8 w-auto text-[var(--color-primary)]/40 self-center hidden sm:block"
                    />
                </div>

                <!-- Separador 4 -->
                <div class="h-8 w-px bg-[var(--color-primary)]/20 self-center hidden nav:block" />

                <!-- Métrica 5: Implementación desde cero (Ocupa 2 columnas en móvil para centrarse por completo) -->
                <div
                    class="col-span-2 nav:col-span-1 flex items-center justify-center gap-2.5 w-full nav:w-auto mt-2 nav:mt-0"
                >
                    <div class="flex flex-col items-center justify-between h-full">
                        <p
                            class="text-xl sm:text-2xl lg:text-3xl font-black text-[var(--color-primary)] leading-none tracking-tight"
                        >
                            0 a 1
                        </p>
                        <p
                            class="text-[9px] sm:text-xs uppercase tracking-widest text-[var(--color-text-nav-hover)]/60 font-bold mt-1.5 text-center whitespace-nowrap"
                        >
                            Scratch Imp.
                        </p>
                    </div>
                    <Rocket
                        class="h-7 sm:h-8 w-auto text-[var(--color-primary)]/40 self-center hidden sm:block"
                    />
                </div>
            </div>
        </div>
    </section>
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
