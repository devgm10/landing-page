import { describe, it, expect, beforeEach } from 'vitest';
import { createI18n } from 'vue-i18n';
import { createApp } from 'vue';
import { useLanguage } from './useLanguage';

// Helper: ejecuta un composable dentro de un contexto de app real,
// necesario porque useLanguage llama a useI18n() (requiere inject).
function withI18nSetup(composable) {
    const i18n = createI18n({
        legacy: false,
        locale: 'es',
        messages: { es: {}, en: {} },
    });

    let result;
    const app = createApp({
        setup() {
            result = composable();
            return () => {};
        },
    });
    app.use(i18n);
    app.mount(document.createElement('div'));

    return { result, i18n };
}

describe('useLanguage', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it('expone el idioma actual', () => {
        const { result } = withI18nSetup(() => useLanguage());
        expect(result.language.value).toBe('es');
    });

    it('setLanguage cambia el locale y persiste', () => {
        const { result } = withI18nSetup(() => useLanguage());

        result.setLanguage('en');

        expect(result.language.value).toBe('en');
        expect(document.documentElement.lang).toBe('en');
        expect(localStorage.getItem('language')).toBe('en');
    });

    it('toggleLanguage alterna es ↔ en', () => {
        const { result } = withI18nSetup(() => useLanguage());

        // parte en 'es'
        result.toggleLanguage();
        expect(result.language.value).toBe('en');

        result.toggleLanguage();
        expect(result.language.value).toBe('es');
    });
});