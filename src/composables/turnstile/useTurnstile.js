import { ref, onMounted, onUnmounted } from 'vue';

export const useTurnstile = (siteKey) => {
    const turnstileEl = ref(null);
    const token = ref('');

    let widgetId = null;
    let intervalId = null;

    const render = () => {
        if (!window.turnstile || !turnstileEl.value) return;

        if (widgetId !== null) {
            window.turnstile.remove(widgetId);
            widgetId = null;
        }

        widgetId = window.turnstile.render(turnstileEl.value, {
            sitekey: siteKey,
            theme: 'auto',

            callback(value) {
                token.value = value;
            },

            'expired-callback'() {
                token.value = '';
            },

            'error-callback'() {
                token.value = '';
            },
        });
    };

    const reset = () => {
        if (widgetId === null) return;

        window.turnstile.reset(widgetId);
        token.value = '';
    };

    onMounted(() => {
        if (window.turnstile) {
            render();
            return;
        }

        intervalId = setInterval(() => {
            if (!window.turnstile) return;

            clearInterval(intervalId);
            intervalId = null;

            render();
        }, 200);
    });

    onUnmounted(() => {
        if (intervalId) {
            clearInterval(intervalId);
        }

        if (widgetId !== null && window.turnstile) {
            window.turnstile.remove(widgetId);
            widgetId = null;
        }
    });

    return {
        token,
        turnstileEl,
        render,
        reset,
    };
};