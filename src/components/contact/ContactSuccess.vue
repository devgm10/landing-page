<script setup>
import { useI18n } from 'vue-i18n';
import { CheckCircle2 } from '@lucide/vue';

defineEmits(['reset']);
const { t } = useI18n();
</script>

<template>
    <div class="success-box flex flex-col items-start gap-3 rounded-xl px-4 py-5">
        <div class="flex items-center gap-2 status-color">
            <CheckCircle2 class="w-5 h-5" />
            <span class="text-sm font-bold">{{ t('footer.success_title') }}</span>
        </div>
        <p class="text-xs text-[var(--color-text-nav)]/60 leading-relaxed">
            {{ t('footer.success_text') }}
        </p>
        <button
            type="button"
            @click="$emit('reset')"
            class="text-[11px] font-medium uppercase tracking-wide text-[var(--color-primary)] hover:underline cursor-pointer"
        >
            {{ t('footer.success_again') }}
        </button>
    </div>
</template>

<style scoped>
.success-box {
    border: 1px solid color-mix(in srgb, var(--color-status) 22%, transparent);
    background: color-mix(in srgb, var(--color-status) 6%, transparent);
}
.status-color {
    color: var(--color-status);
}
</style>