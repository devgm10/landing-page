import { describe, it, expect, beforeEach } from 'vitest';
import { useTheme } from './useTheme';

describe('useTheme', () => {
    beforeEach(() => {
        localStorage.clear();
        document.documentElement.classList.remove('dark');
    });

    it('expone el theme actual', () => {
        const { theme } = useTheme();
        expect(['light', 'dark']).toContain(theme.value);
    });

    it('toggleTheme cambia de light a dark y aplica la clase', () => {
        const { theme, toggleTheme } = useTheme();

        // Forzamos un punto de partida conocido
        if (theme.value === 'dark') toggleTheme();
        expect(theme.value).toBe('light');

        toggleTheme();

        expect(theme.value).toBe('dark');
        expect(document.documentElement.classList.contains('dark')).toBe(true);
        expect(localStorage.getItem('theme')).toBe('dark');
    });

    it('toggleTheme de dark vuelve a light y quita la clase', () => {
        const { theme, toggleTheme } = useTheme();

        if (theme.value === 'light') toggleTheme();
        expect(theme.value).toBe('dark');

        toggleTheme();

        expect(theme.value).toBe('light');
        expect(document.documentElement.classList.contains('dark')).toBe(false);
        expect(localStorage.getItem('theme')).toBe('light');
    });
});