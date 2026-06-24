<script setup>
import profileImage from '@/assets/img/profile/profile.png';
import { Code2, Infinity, Cloud } from '@lucide/vue';

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
                    Construyo soluciones tecnológicas que nacen de entender
                    problemas reales, no únicamente de escribir código.
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
                        Durante más de 4 años he diseñado plataformas
                        empresariales, sistemas de automatización y soluciones
                        cloud enfocadas en mejorar procesos y generar impacto
                        tangible.
                    </p>

                    <p>
                        Me interesa comprender cómo funciona un negocio antes de
                        diseñar la arquitectura que lo soportará. Porque detrás
                        de cada aplicación existen personas, operaciones y
                        decisiones que dependen de que la tecnología funcione de
                        manera confiable.
                    </p>

                    <p>
                        Desde la experiencia del usuario hasta la
                        infraestructura, busco construir productos escalables,
                        mantenibles y preparados para evolucionar.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>