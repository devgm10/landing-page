<script setup>
import profileImage from '@/assets/img/profile/profile.png';
import { Code2, Infinity as InfinityIcon, Cloud } from '@lucide/vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const skills = [
    { name: 'Full Stack', icon: Code2, tone: 'var(--color-brand-600)' },
    { name: 'DevOps', icon: InfinityIcon, tone: 'var(--color-brand-500)' },
    { name: 'Cloud', icon: Cloud, tone: 'var(--color-brand-400)' },
];
</script>

<template>
    <div class="max-w-5xl mx-auto">
        <div class="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">

            <!-- Foto con tratamiento terminal -->
            <div class="w-full max-w-[280px] mx-auto lg:mx-0 shrink-0">
                <div class="photo group relative">
                    <!-- Barra superior tipo terminal (siempre oscura, como una terminal real) -->
                    <div class="absolute -top-3 left-0 right-0 z-20 flex items-center gap-1.5 px-4 py-2 rounded-t-2xl bg-[var(--color-neutral-950)] dark:bg-[var(--color-neutral-800)]">
                        <span class="w-2 h-2 rounded-full" style="background: var(--color-brand-600)"></span>
                        <span class="w-2 h-2 rounded-full" style="background: var(--color-brand-400)"></span>
                        <span class="w-2 h-2 rounded-full" style="background: var(--color-brand-300)"></span>
                        <span class="ml-2 font-mono text-[9px] text-[var(--color-neutral-400)] tracking-wider">profile.png</span>
                    </div>

                    <!-- Imagen -->
                    <div class="photo-frame relative overflow-hidden rounded-2xl border border-[var(--color-border-nav)] mt-6 transition-shadow duration-500">
                        <img
                            :src="profileImage"
                            alt="Gianmarco Linares"
                            loading="lazy"
                            decoding="async"
                            class="photo-img w-full h-full object-cover transition-all duration-700"
                        />
                        <!-- Duotono cálido: se disuelve en hover -->
                        <div class="photo-tint absolute inset-0 pointer-events-none transition-opacity duration-700" aria-hidden="true"></div>
                    </div>

                    <!-- Badge status flotante -->
                    <div class="absolute -bottom-3 -right-3 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--color-surface)] border border-[var(--color-border-nav)] shadow-lg">
                        <span class="relative flex h-1.5 w-1.5">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style="background-color: var(--color-status-ping);"></span>
                            <span class="relative inline-flex rounded-full h-1.5 w-1.5" style="background-color: var(--color-status);"></span>
                        </span>
                        <span class="font-mono text-[9px] tracking-wider" style="color: var(--color-status);">online</span>
                    </div>
                </div>
            </div>

            <!-- Contenido -->
            <div class="flex-1 text-center lg:text-left">
                <h3 class="text-2xl sm:text-3xl font-bold leading-snug tracking-tight text-[var(--color-text-nav-hover)] mb-5">
                    {{ t('landing.section.about.story.slogan') }}
                </h3>

                <!-- Skills badges -->
                <div class="flex flex-wrap justify-center lg:justify-start gap-2.5 mb-6">
                    <div
                        v-for="skill in skills"
                        :key="skill.name"
                        class="skill inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-mono tracking-[0.15em] uppercase transition-all duration-400"
                        :style="{ '--tone': skill.tone }"
                    >
                        <component :is="skill.icon" class="skill-icon w-3 h-3 transition-transform duration-400" />
                        {{ skill.name }}
                    </div>
                </div>

                <!-- Texto -->
                <div class="space-y-5 text-sm leading-relaxed text-[var(--color-text-nav)]">
                    <p>{{ t('landing.section.about.story.paragraph.first') }}</p>
                    <p>{{ t('landing.section.about.story.paragraph.second') }}</p>
                    <p>{{ t('landing.section.about.story.paragraph.third') }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Foto: sombra teñida con el acento, no negra neutra */
.photo-frame {
    box-shadow: 0 18px 40px -18px color-mix(in srgb, var(--color-brand-700) 55%, transparent);
}
.photo:hover .photo-frame {
    box-shadow: 0 24px 50px -18px color-mix(in srgb, var(--color-brand-600) 65%, transparent);
}

/* Skills: el color vive en el ícono y el borde; el texto se queda legible */
.skill {
    color: var(--color-text-nav-hover);
    background: color-mix(in srgb, var(--tone) 8%, transparent);
    border: 1px solid color-mix(in srgb, var(--tone) 30%, transparent);
}
.skill-icon {
    color: var(--tone);
}
.skill:hover {
    background: color-mix(in srgb, var(--tone) 15%, transparent);
    border-color: color-mix(in srgb, var(--tone) 55%, transparent);
    box-shadow: 0 6px 18px -8px color-mix(in srgb, var(--tone) 70%, transparent);
    transform: translateY(-2px);
}
.skill:hover .skill-icon {
    transform: scale(1.15) rotate(-6deg);
}

@media (prefers-reduced-motion: reduce) {
    .photo-img, .photo-tint, .photo-frame, .skill, .skill-icon {
        transition: none;
    }
}
</style>