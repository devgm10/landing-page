import { normalizeResponse } from '@/utils/contact/response';

const ENDPOINT = import.meta.env.VITE_CONTACT_API_URL;

export const sendContactMessage = async (payload) => {
    if (!ENDPOINT) {
        throw new Error('VITE_CONTACT_API_URL it is not configured');
    }

    const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });

    return normalizeResponse(response);
};