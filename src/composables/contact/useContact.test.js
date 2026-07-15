import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

vi.mock('@/services/contact/contact.service', () => ({
    sendContactMessage: vi.fn(),
}));

import { useContact } from './useContact';
import { sendContactMessage } from '@/services/contact/contact.service';
import { CONTACT_STATUS } from '@/constants/contact/contact.constants';

const fillValidForm = (form) => {
    form.name = 'Gianmarco';
    form.email = 'test@example.com';
    form.message = 'Este es un mensaje de prueba válido.';
};

describe('useContact', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('arranca en estado IDLE', () => {
        const { status, isLoading } = useContact();
        expect(status.value).toBe(CONTACT_STATUS.IDLE);
        expect(isLoading.value).toBe(false);
    });

    it('no envía si la validación de cliente falla', async () => {
        const { submit, status, errors } = useContact();

        await submit('token-ok');   // form vacío

        expect(sendContactMessage).not.toHaveBeenCalled();
        expect(status.value).toBe(CONTACT_STATUS.ERROR);
        expect(errors.value.name).toBe('required');
    });

    it('no envía si falta el token de Turnstile', async () => {
        const { form, submit, status } = useContact();
        fillValidForm(form);

        await submit(null);

        expect(sendContactMessage).not.toHaveBeenCalled();
        expect(status.value).toBe(CONTACT_STATUS.ERROR);
    });

    it('marca SUCCESS y limpia el form cuando el envío va bien', async () => {
        sendContactMessage.mockResolvedValue({ ok: true });

        const { form, submit, status, isSuccess } = useContact();
        fillValidForm(form);

        await submit('token-ok');

        expect(sendContactMessage).toHaveBeenCalledOnce();
        expect(status.value).toBe(CONTACT_STATUS.SUCCESS);
        expect(isSuccess.value).toBe(true);
        expect(form.name).toBe('');   // resetForm
    });

    it('mapea los errores de Zod del backend por campo', async () => {
        sendContactMessage.mockResolvedValue({
            ok: false,
            errors: [
                { path: ['message'], code: 'too_small' },
                { path: ['email'], code: 'invalid_string' },
            ],
        });

        const { form, submit, status, errors } = useContact();
        fillValidForm(form);

        await submit('token-ok');

        expect(status.value).toBe(CONTACT_STATUS.ERROR);
        expect(errors.value.message).toBe('min');
        expect(errors.value.email).toBe('invalid');
    });

    it('marca ERROR si el servicio lanza una excepción', async () => {
        sendContactMessage.mockRejectedValue(new Error('boom'));
        vi.spyOn(console, 'error').mockImplementation(() => {});

        const { form, submit, status } = useContact();
        fillValidForm(form);

        await submit('token-ok');

        expect(status.value).toBe(CONTACT_STATUS.ERROR);
    });

    it('reset() vuelve todo a IDLE', async () => {
        const { submit, reset, status, feedback } = useContact();
        await submit('token-ok');   // deja el estado en ERROR

        reset();

        expect(status.value).toBe(CONTACT_STATUS.IDLE);
        expect(feedback.value).toBe(null);
    });
});