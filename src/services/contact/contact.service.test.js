import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

// Mockeamos normalizeResponse para aislar el servicio de su dependencia
vi.mock('@/utils/contact/response', () => ({
    normalizeResponse: vi.fn((res) => ({ ok: res.ok })),
}));

import { sendContactMessage } from './contact.service';
import { normalizeResponse } from '@/utils/contact/response';

describe('sendContactMessage', () => {
    beforeEach(() => {
        vi.stubGlobal('fetch', vi.fn());
        vi.clearAllMocks();
    });

    afterEach(() => {
        vi.unstubAllGlobals();
    });

    it('hace POST al endpoint con payload y token en el body', async () => {
        fetch.mockResolvedValue({ ok: true });

        await sendContactMessage({ name: 'Gianmarco' }, 'token-123');

        expect(fetch).toHaveBeenCalledOnce();
        const [, options] = fetch.mock.calls[0];

        expect(options.method).toBe('POST');
        expect(options.headers['Content-Type']).toBe('application/json');

        const body = JSON.parse(options.body);
        expect(body.name).toBe('Gianmarco');
        expect(body.turnstileToken).toBe('token-123');
    });

    it('delega la respuesta a normalizeResponse', async () => {
        const fakeResponse = { ok: true };
        fetch.mockResolvedValue(fakeResponse);

        const result = await sendContactMessage({}, 'tok');

        expect(normalizeResponse).toHaveBeenCalledWith(fakeResponse);
        expect(result).toEqual({ ok: true });
    });

    it('propaga el error si fetch falla', async () => {
        fetch.mockRejectedValue(new Error('Network down'));
        await expect(sendContactMessage({}, 'tok')).rejects.toThrow('Network down');
    });
});