import { describe, it, expect, beforeEach } from 'vitest';
import { initializeTheme } from './theme';

describe('initializeTheme', () => {
    beforeEach(() => {
        localStorage.clear();
        document.documentElement.classList.remove('dark');
    });

    it('sin nada en storage → devuelve "light" y no añade la clase dark', () => {
        const theme = initializeTheme();

        expect(theme).toBe('light');
        expect(document.documentElement.classList.contains('dark')).toBe(false);
    });

    it('con "dark" en storage → devuelve "dark" y añade la clase', () => {
        localStorage.setItem('theme', 'dark');

        const theme = initializeTheme();

        expect(theme).toBe('dark');
        expect(document.documentElement.classList.contains('dark')).toBe(true);
    });

    it('con "light" en storage → quita la clase dark', () => {
        localStorage.setItem('theme', 'light');
        document.documentElement.classList.add('dark');   // simula estado previo

        initializeTheme();

        expect(document.documentElement.classList.contains('dark')).toBe(false);
    });
});