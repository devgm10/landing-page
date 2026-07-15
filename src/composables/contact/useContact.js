import { reactive, ref, computed } from 'vue';
import {
    CONTACT_INITIAL_STATE,
    CONTACT_STATUS,
    CONTACT_MESSAGES,
} from '@/constants/contact/contact.constants';
import { validateContact } from '@/validators/contact/contact.validator';
import { sendContactMessage } from '@/services/contact/contact.service';

export const useContact = () => {
    const form = reactive({ ...CONTACT_INITIAL_STATE });
    const status = ref(CONTACT_STATUS.IDLE);
    const errors = ref({});
    const feedback = ref(null);

    const isLoading = computed(() => status.value === CONTACT_STATUS.LOADING);
    const isSuccess = computed(() => status.value === CONTACT_STATUS.SUCCESS);
    const isError = computed(() => status.value === CONTACT_STATUS.ERROR);

    const resetForm = () => {
        Object.assign(form, { ...CONTACT_INITIAL_STATE });
        errors.value = {};
    };

    const reset = () => {
        resetForm();
        status.value = CONTACT_STATUS.IDLE;
        feedback.value = null;
    };

    // Mapea los issues de Zod del backend (400) a errores por campo
    const mapBackendErrors = (issues) => {
        const mapped = {};
        for (const issue of issues) {
            const field = issue.path?.[0];
            if (!field) continue;
            if (issue.code === 'too_small') mapped[field] = 'min';
            else if (issue.code === 'too_big') mapped[field] = 'max';
            else mapped[field] = 'invalid';
        }
        return mapped;
    };

    const submit = async (turnstileToken) => {
        errors.value = {};
        feedback.value = null;

        // 1) Validación en cliente
        const { valid, errors: validationErrors } = validateContact(form);
        if (!valid) {
            errors.value = validationErrors;
            status.value = CONTACT_STATUS.ERROR;
            return;
        }

        // 1.5) Verificar que el usuario pasó Turnstile
        if (!turnstileToken) {
            status.value = CONTACT_STATUS.ERROR;
            feedback.value = CONTACT_MESSAGES.ERROR;
            return;
        }

        // 2) Envío
        status.value = CONTACT_STATUS.LOADING;
        try {
            const result = await sendContactMessage(
                { ...form },
                turnstileToken,
            );

            if (result.ok) {
                status.value = CONTACT_STATUS.SUCCESS;
                feedback.value = CONTACT_MESSAGES.SUCCESS;
                resetForm();
                return;
            }

            // Error del backend: si trae issues de Zod, los mostramos por campo
            if (Array.isArray(result.errors)) {
                errors.value = mapBackendErrors(result.errors);
            }
            status.value = CONTACT_STATUS.ERROR;
            feedback.value = CONTACT_MESSAGES.ERROR;
        } catch (err) {
            console.error('Contact submit error:', err);
            status.value = CONTACT_STATUS.ERROR;
            feedback.value = CONTACT_MESSAGES.ERROR;
        }
    };

    return { form, status, errors, feedback, isLoading, isSuccess, isError, submit, reset };
};