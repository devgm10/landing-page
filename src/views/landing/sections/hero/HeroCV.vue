<script setup>
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

const downloadCV = () => {
    const lang = locale.value
    const filename = `cv_${lang}_gianmarco_linares_becerra.pdf`;

    const link = document.createElement('a');
    link.href = `assets/cv/${filename}`;
    link.download = filename;
    link.click();
};
</script>

<template>
    <button
        @click="downloadCV"
        type="button"
        class="cv-doc group relative select-none cursor-pointer animate-fade-in-up [animation-delay:1050ms]"
        :aria-label="t('landing.section.hero.button_download')"
    >
        <svg
            width="300" height="375" viewBox="0 0 200 250"
            fill="none" xmlns="http://www.w3.org/2000/svg"
            class="w-[240px] h-[300px] sm:w-[300px] sm:h-[375px]"
        >
            <defs>
                <filter id="cvShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow
                        dx="0" dy="8" stdDeviation="16"
                        style="flood-color: var(--color-brand-700); flood-opacity: 0.22"
                    />
                </filter>
            </defs>

            <!-- Papel -->
            <rect
                x="20" y="10" width="160" height="215" rx="12"
                class="stroke-[var(--color-border-nav)]"
                style="fill: var(--color-surface);"
                stroke-width="1"
                filter="url(#cvShadow)"
            />

            <!-- Avatar con </> -->
            <circle cx="50" cy="45" r="14" style="fill: var(--color-primary)" />
            <text
                x="50" y="49"
                font-family="monospace" font-size="11"
                style="fill: var(--color-on-primary)"
                text-anchor="middle"
            >&lt;/&gt;</text>

            <!-- Nombre + subtítulo -->
            <rect x="74" y="38" width="80" height="7" rx="3.5" class="fill-[var(--color-neutral-700)] dark:fill-[var(--color-neutral-200)]" />
            <rect x="74" y="50" width="55" height="5" rx="2.5" class="fill-[var(--color-neutral-300)] dark:fill-[var(--color-neutral-600)]" />

            <!-- Sección 1 -->
            <rect x="40" y="78" width="30" height="5" rx="2.5" class="fill-[var(--color-brand-600)] dark:fill-[var(--color-brand-500)]" />
            <rect x="40" y="90" width="120" height="4" rx="2" class="fill-[var(--color-neutral-100)] dark:fill-[var(--color-neutral-700)]" />
            <rect x="40" y="99" width="110" height="4" rx="2" class="fill-[var(--color-neutral-100)] dark:fill-[var(--color-neutral-700)]" />
            <rect x="40" y="108" width="120" height="4" rx="2" class="fill-[var(--color-neutral-100)] dark:fill-[var(--color-neutral-700)]" />

            <!-- Sección 2 -->
            <rect x="40" y="130" width="30" height="5" rx="2.5" class="fill-[var(--color-brand-500)] dark:fill-[var(--color-brand-400)]" />
            <rect x="40" y="142" width="120" height="4" rx="2" class="fill-[var(--color-neutral-100)] dark:fill-[var(--color-neutral-700)]" />
            <rect x="40" y="151" width="95" height="4" rx="2" class="fill-[var(--color-neutral-100)] dark:fill-[var(--color-neutral-700)]" />

            <!-- Sección 3 -->
            <rect x="40" y="173" width="30" height="5" rx="2.5" class="fill-[var(--color-brand-400)] dark:fill-[var(--color-brand-300)]" />

            <!-- Skills tags -->
            <rect x="40" y="185" width="34" height="12" rx="6" stroke-width="0.75"
                style="fill: color-mix(in srgb, var(--color-brand-600) 14%, transparent);
                        stroke: color-mix(in srgb, var(--color-brand-600) 40%, transparent)" />
            <rect x="80" y="185" width="34" height="12" rx="6" stroke-width="0.75"
                style="fill: color-mix(in srgb, var(--color-brand-500) 14%, transparent);
                        stroke: color-mix(in srgb, var(--color-brand-500) 40%, transparent)" />
            <rect x="120" y="185" width="34" height="12" rx="6" stroke-width="0.75"
                style="fill: color-mix(in srgb, var(--color-brand-400) 16%, transparent);
                        stroke: color-mix(in srgb, var(--color-brand-400) 44%, transparent)" />
        </svg>

        <!-- Badge de descarga -->
        <span class="dl-badge absolute bottom-2 right-2 sm:bottom-3 sm:right-3 flex items-center justify-center w-14 h-14 rounded-full bg-[var(--color-primary)] transition-all duration-400">
            <svg
                class="w-6 h-6 text-[var(--color-on-primary)] transition-transform duration-300 group-hover:translate-y-0.5"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"
            >
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
            </svg>
        </span>

        <!-- Tooltip -->
        <span class="cv-tip absolute -bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300">
            $ download cv_{{ locale === 'es' ? 'es' : 'en' }}.pdf
        </span>
    </button>
</template>

<style scoped>
.cv-doc {
    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.cv-doc:hover {
    transform: translateY(-8px) rotate(-1deg);
}

.dl-badge {
    box-shadow: 0 8px 20px -6px color-mix(in srgb, var(--color-primary) 55%, transparent);
}
.cv-doc:hover .dl-badge {
    transform: scale(1.12);
    background: var(--color-primary-hover);
    box-shadow: 0 12px 28px -6px color-mix(in srgb, var(--color-primary-hover) 65%, transparent);
}

.cv-tip {
    color: color-mix(in srgb, var(--color-text-nav) 55%, transparent);
}
.cv-doc:hover .cv-tip {
    color: var(--color-primary);
}
</style>