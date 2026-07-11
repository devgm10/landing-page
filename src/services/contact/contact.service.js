import { normalizeResponse } from '@/utils/contact/response';

const ENDPOINT = import.meta.env.VITE_CONTACT_API_URL;

export const sendContactMessage = async (payload, turnstileToken) => {
    if (!ENDPOINT) {
        throw new Error('VITE_CONTACT_API_URL is not configured');
    }

    const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            ...payload,
            turnstileToken,
        }),
    });

    return normalizeResponse(response);
};