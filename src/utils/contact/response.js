export const normalizeResponse = async (response) => {
    let body = null;
    try {
        body = await response.json();
    } catch {
        body = null;
    }

    if (response.ok) {
        return { ok: true, data: body };
    }

    return {
        ok: false,
        status: response.status,
        message: body?.message ?? 'Request failed',
        errors: body?.errors ?? null,
    };
};