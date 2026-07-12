<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { MessagesSquare, ScanSearch } from '@lucide/vue';
import { SlotText } from 'slot-text/vue';
import 'slot-text/style.css';

const { t } = useI18n();

const ROLES = ['Full Stack Developer', 'DevOps Engineer'];
const TITLE_ROTATION_INTERVAL_MS = 4000;

const currentRole = ref(ROLES[0]);
let roleIndex = 0;
let rotationInterval = null;

const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

onMounted(() => {
    rotationInterval = setInterval(() => {
        roleIndex = (roleIndex + 1) % ROLES.length;
        currentRole.value = ROLES[roleIndex];
    }, TITLE_ROTATION_INTERVAL_MS);
});

onUnmounted(() => clearInterval(rotationInterval));
</script>

<template>
    <div class="w-full">
        <div class="flex flex-col gap-5 sm:gap-7 text-center lg:text-left items-center lg:items-start w-full relative z-30">

            <!-- Badge disponible -->
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--color-border-nav)] bg-[var(--color-bg-nav)] backdrop-blur-sm select-none animate-fade-in-up">
                <span class="relative flex h-1.5 w-1.5">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style="background-color: var(--color-status-ping);"></span>
                    <span class="relative inline-flex rounded-full h-1.5 w-1.5" style="background-color: var(--color-status);"></span>
                </span>
                <span class="text-[9px] sm:text-[10px] font-medium tracking-[0.15em] uppercase leading-none" style="color: var(--color-status);">
                    {{ t('status_personal') }}
                </span>
            </div>

            <div class="flex flex-col items-center lg:items-start gap-3 sm:gap-4 w-full">
                <span class="font-mono text-xs sm:text-sm text-[var(--color-text-nav)]/60 tracking-widest select-none">$ whoami</span>

                <!-- ROL PROTAGONISTA con rotación + < /> + ancho reservado -->
                <h1 class="flex items-center justify-center lg:justify-start gap-x-2 sm:gap-x-2.5 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter text-[var(--color-text-nav-hover)] select-none leading-[1.02]">
                    <span aria-hidden="true" class="font-mono font-normal text-[var(--color-text-nav)]/30 text-2xl sm:text-3xl lg:text-4xl flex-shrink-0">&lt;</span>
                    <span class="role-slot inline-flex justify-center">
                        <SlotText :text="currentRole" class="inline-block whitespace-nowrap" />
                    </span>
                    <span aria-hidden="true" class="font-mono font-normal text-[var(--color-text-nav)]/30 text-2xl sm:text-3xl lg:text-4xl flex-shrink-0">/&gt;</span>
                </h1>

                <!-- NOMBRE como firma (mono destacada) -->
                <div class="flex items-center gap-2 animate-fade-in-up [animation-delay:300ms] select-none">
                    <span class="h-px w-6 bg-[var(--color-primary)]/40"></span>
                    <span class="font-mono text-sm sm:text-base font-medium text-[var(--color-primary)] tracking-wide">
                        Gianmarco Linares
                    </span>
                </div>
            </div>

            <p class="text-sm sm:text-lg text-[var(--color-text-nav)] leading-relaxed max-w-xl animate-fade-in-up [animation-delay:450ms]">
                {{ t('landing.section.hero.description') }}
            </p>

            <div class="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 sm:gap-4 w-full animate-fade-in-up [animation-delay:600ms]">
                <button
                    @click="scrollToContact"
                    type="button"
                    class="cta group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-7 py-3.5 text-xs font-bold tracking-[0.1em] uppercase text-[var(--color-on-primary)] transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
                >
                    <span>{{ t('landing.section.hero.button_lets_talk') }}</span>
                    <MessagesSquare class="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                </button>

                <a
                    href="#projects"
                    class="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-text-nav)]/25 bg-transparent px-7 py-3.5 text-xs font-bold tracking-[0.1em] uppercase text-[var(--color-text-nav-hover)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-text-nav-hover)] active:scale-95"
                >
                    <span>{{ t('landing.section.hero.button_view_projects') }}</span>
                    <ScanSearch class="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.animate-fade-in-up {
    animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
}
@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(16px); }
    to { opacity: 1; transform: translateY(0); }
}
@media (prefers-reduced-motion: reduce) {
    .animate-fade-in-up { animation: none; }
}

.role-slot {
    min-width: 0;
}

@media (min-width: 640px) {
    .role-slot {
        min-width: 11ch;
    }
}

@media (min-width: 1024px) {
    .role-slot {
        min-width: 15.5ch;
    }
}

.cta {
    box-shadow: 0 10px 24px -8px color-mix(in srgb, var(--color-primary) 50%, transparent);
}
.cta:hover {
    background: var(--color-primary-hover);
    box-shadow: 0 14px 30px -8px color-mix(in srgb, var(--color-primary-hover) 60%, transparent);
}
</style>