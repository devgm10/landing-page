<script setup>
import { useI18n } from 'vue-i18n';
import { nextTick } from 'vue';
import { useTurnstile } from '@/composables/turnstile/useTurnstile';
import { useContact } from '@/composables/contact/useContact';
import { CONTACT_FIELDS } from '@/constants/contact/contact.constants';
import ContactSuccess from '@/components/contact/ContactSuccess.vue';
import { Navigation as NavigationIcon } from '@lucide/vue';

const { t } = useI18n();
const { form, errors, isLoading, isSuccess, submit, reset } = useContact();
const F = CONTACT_FIELDS;

const SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY;

const {
    token: turnstileToken,
    turnstileEl,
    render: renderTurnstile,
    reset: resetTurnstile,
} = useTurnstile(SITE_KEY);

const handleSubmit = async () => {
    await submit(turnstileToken.value);

    if (!isSuccess.value) {
        resetTurnstile();
    }
};

const handleReset = async () => {
    reset();
    await nextTick();
    renderTurnstile();
};

const inputClass =
    'w-full rounded-xl border border-[var(--color-border-nav)]/60 bg-black/[0.01] dark:bg-white/[0.01] px-4 py-2.5 text-xs text-[var(--color-text-nav-hover)] placeholder:text-[var(--color-text-nav)]/30 focus:border-[var(--color-primary)] focus:bg-black/[0.03] dark:focus:bg-white/[0.03] focus:outline-none transition-all duration-300';

const fieldError = (field) =>
    errors.value[field]
        ? t(`footer.errors.${field}_${errors.value[field]}`)
        : '';
</script>

<template>
    <ContactSuccess v-if="isSuccess" @reset="handleReset" />
    <form v-else id="contact-form" @submit.prevent="handleSubmit" class="flex flex-col gap-3.5">
        <!-- Nombre + Email en fila en pantallas grandes -->
        <div class="flex flex-col sm:flex-row gap-3.5">
            <div class="flex flex-col gap-1 flex-1">
                <input
                    v-model="form[F.NAME]"
                    type="text"
                    :placeholder="t('footer.placeholder_name', 'Nombre *')"
                    :class="inputClass"
                />
                <span v-if="fieldError(F.NAME)" class="text-[10px] text-red-500/80 pl-1">{{ fieldError(F.NAME) }}</span>
            </div>
            <div class="flex flex-col gap-1 flex-1">
                <input
                    v-model="form[F.EMAIL]"
                    type="email"
                    :placeholder="t('footer.placeholder_email')"
                    :class="inputClass"
                />
                <span v-if="fieldError(F.EMAIL)" class="text-[10px] text-red-500/80 pl-1">{{ fieldError(F.EMAIL) }}</span>
            </div>
        </div>

        <!-- Empresa + Asunto (opcionales) -->
        <div class="flex flex-col sm:flex-row gap-3.5">
            <input
                v-model="form[F.COMPANY]"
                type="text"
                :placeholder="t('footer.placeholder_company', 'Empresa (opcional)')"
                :class="[inputClass, 'flex-1']"
            />
            <input
                v-model="form[F.SUBJECT]"
                type="text"
                :placeholder="t('footer.placeholder_subject', 'Asunto (opcional)')"
                :class="[inputClass, 'flex-1']"
            />
        </div>

        <!-- Mensaje -->
        <div class="flex flex-col gap-1">
            <textarea
                v-model="form[F.MESSAGE]"
                rows="3"
                :placeholder="t('footer.placeholder_message')"
                :class="[inputClass, 'resize-none']"
            />
            <span v-if="fieldError(F.MESSAGE)" class="text-[10px] text-red-500/80 pl-1">{{ fieldError(F.MESSAGE) }}</span>
        </div>

        <div ref="turnstileEl"></div>

        <button
            type="submit"
            :disabled="isLoading"
            class="w-full flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] disabled:opacity-60 disabled:cursor-not-allowed px-6 py-2.5 text-xs font-bold tracking-wide uppercase text-white shadow-md shadow-[var(--color-primary)]/20 cursor-pointer group/btn transition-all duration-300 active:scale-95"
        >
            <span>{{ isLoading ? t('footer.sending') : t('footer.send') }}</span>
            <NavigationIcon
                v-if="!isLoading"
                class="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:rotate-12"
            />
        </button>
    </form>
</template>