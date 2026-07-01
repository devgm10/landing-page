<script setup>
import { useI18n } from 'vue-i18n';
import { CheckCircle2 } from '@lucide/vue';

defineEmits(['reset']);
const { t } = useI18n();
</script>

<template>
    <div class="flex flex-col items-start gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-5">
        <div class="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 class="w-5 h-5" />
            <span class="text-sm font-bold">{{ t('footer.success_title', '¡Mensaje enviado!') }}</span>
        </div>
        <p class="text-xs text-[var(--color-text-nav)]/60 leading-relaxed">
            {{ t('footer.success_text', 'Gracias por escribirme. Te responderé lo antes posible.') }}
        </p>
        <button
            type="button"
            @click="$emit('reset')"
            class="text-[11px] font-medium uppercase tracking-wide text-[var(--color-primary)] hover:underline cursor-pointer"
        >
            {{ t('footer.success_again', 'Enviar otro mensaje') }}
        </button>
    </div>
</template>