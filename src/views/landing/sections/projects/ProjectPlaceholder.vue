<script setup>
defineProps({
    projectId: { type: String, default: '' },
    tone: { type: String, default: 'var(--color-primary)' },
    onTone: { type: String, default: 'var(--color-on-primary)' },
});
</script>

<template>
    <div
        class="ph relative w-full h-full flex flex-col items-center justify-center overflow-hidden"
        :style="{ '--tone': tone, '--on-tone': onTone }"
    >
        <span class="absolute top-3 left-3 font-mono text-[9px] text-[var(--color-text-nav)]/40">architecture.svg</span>

        <svg width="140" height="140" viewBox="0 0 140 140" fill="none" class="opacity-90">
            <rect x="50" y="12" width="40" height="22" rx="5" style="fill: var(--tone)" />
            <text x="70" y="27" font-family="monospace" font-size="9" style="fill: var(--on-tone)" text-anchor="middle">API</text>

            <line x1="70" y1="34" x2="70" y2="54" class="stroke-[var(--color-neutral-300)] dark:stroke-[var(--color-neutral-700)]" stroke-width="1.5" />
            <rect x="22" y="54" width="40" height="20" rx="5" style="fill: color-mix(in srgb, var(--tone) 55%, transparent)" />
            <rect x="78" y="54" width="40" height="20" rx="5" style="fill: color-mix(in srgb, var(--tone) 55%, transparent)" />
            <line x1="50" y1="45" x2="42" y2="54" class="stroke-[var(--color-neutral-300)] dark:stroke-[var(--color-neutral-700)]" stroke-width="1.5" />
            <line x1="90" y1="45" x2="98" y2="54" class="stroke-[var(--color-neutral-300)] dark:stroke-[var(--color-neutral-700)]" stroke-width="1.5" />

            <rect x="22" y="98" width="40" height="20" rx="5" style="fill: color-mix(in srgb, var(--tone) 25%, transparent)" />
            <rect x="78" y="98" width="40" height="20" rx="5" style="fill: color-mix(in srgb, var(--tone) 25%, transparent)" />
            <line x1="42" y1="74" x2="42" y2="98" class="stroke-[var(--color-neutral-300)] dark:stroke-[var(--color-neutral-700)]" stroke-width="1.5" />
            <line x1="98" y1="74" x2="98" y2="98" class="stroke-[var(--color-neutral-300)] dark:stroke-[var(--color-neutral-700)]" stroke-width="1.5" />
        </svg>

        <span class="mt-3 font-mono text-[10px] text-[var(--color-text-nav)]/50 tracking-wider">diagrama próximamente</span>
    </div>
</template>

<style scoped>
.ph {
    background: linear-gradient(
        135deg,
        color-mix(in srgb, var(--tone) 5%, var(--color-neutral-50)),
        color-mix(in srgb, var(--tone) 12%, var(--color-neutral-100))
    );
}
:global(.dark) .ph {
    background: linear-gradient(
        135deg,
        color-mix(in srgb, var(--tone) 8%, var(--color-neutral-900)),
        color-mix(in srgb, var(--tone) 16%, var(--color-neutral-800))
    );
}
</style>