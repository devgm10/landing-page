<script setup>
defineProps({
    // Controla la visualización de la línea divisoria vertical
    showDivider: {
        type: Boolean,
        default: true,
    },
});

// Mapeo de redes usando las clases oficiales de Devicon
const socialItems = [
    {
        name: 'GitHub',
        url: 'https://github.com/devgm10',
        iconClass: 'devicon-github-original',
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/gianmarco-linares-becerra/',
        iconClass: 'devicon-linkedin-plain',
    },
];
</script>

<template>
    <div
        class="flex items-center gap-1"
        :class="{ 'pl-3 border-l border-[var(--color-border-nav)]/60': showDivider }"
    >
        <a
            v-for="social in socialItems"
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="social.name"
            class="flex h-9 w-9 items-center justify-center rounded-xl text-[var(--color-text-nav)]/60 hover:text-[var(--color-primary)] hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 ease-out active:scale-90 group"
        >
            <i
                :class="[social.iconClass]"
                class="text-lg transition-all duration-300 ease-out group-hover:scale-110"
            />
        </a>
    </div>
</template>
