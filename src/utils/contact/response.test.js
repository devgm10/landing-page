import { describe, it, expect } from 'vitest';
import { normalizeResponse } from './response';

// Helper: finge un Response dell navegador.
// JSON() puede resolver un objeto, o lanzar (cuando no hay body válida)

const fakeResponse = ({ ok, status = 200, json}) => ({
    ok,
    status,
    json: json ?? (() => Promise.reject(new Error('no body'))),
});

describe('normalizeResponse', () => {
    it('respuesta OK con body → ok:true y los datos', async () => {
        const res = fakeResponse({ ok: true, json: () => Promise.resolve({ id: 1 }) });

        const result = await normalizeResponse(res);

        expect(result).toEqual({ ok: true, data: { id: 1 } });
    });

    it('respuesta OK sin body válido → ok:true con data null', async () => {
        // json() lanza → el catch deja body en null
        const res = fakeResponse({ ok: true });

        const result = await normalizeResponse(res);

        expect(result).toEqual({ ok: true, data: null });
    });

    it('respuesta de error con message y errors → los propaga', async () => {
        const res = fakeResponse({
            ok: false,
            status: 400,
            json: () => Promise.resolve({
                message: 'Validation failed',
                errors: [{ path: ['email'] }],
            }),
        });

        const result = await normalizeResponse(res);

        expect(result).toEqual({
            ok: false,
            status: 400,
            message: 'Validation failed',
            errors: [{ path: ['email'] }],
        });
    });

    it('respuesta de error sin body → usa el mensaje por defecto', async () => {
        const res = fakeResponse({ ok: false, status: 500 });

        const result = await normalizeResponse(res);

        expect(result).toEqual({
            ok: false,
            status: 500,
            message: 'Request failed',   // el fallback ?? 
            errors: null,
        });
    });
});