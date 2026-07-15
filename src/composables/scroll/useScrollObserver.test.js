import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { ref } from 'vue';
import { mount } from '@vue/test-utils';
import { useScrollObserver } from './useScrollObserver';

// Componente mínimo que ejerce el composable dentro de un ciclo de vida real
const TestComponent = {
    template: '<div></div>',
    setup() {
        const active = ref('');
        useScrollObserver(active, ['home', 'about']);
        return { active };
    },
};

describe('useScrollObserver', () => {
    beforeEach(() => {
        vi.stubGlobal('IntersectionObserver', class {
            observe() {}
            disconnect() {}
        });

        document.body.innerHTML = `
            <div id="home"></div>
            <div id="about"></div>
        `;
    });

    afterEach(() => {
        vi.unstubAllGlobals();
        document.body.innerHTML = '';
    });

    it('marca la primera sección como activa al montar', () => {
        document.getElementById('home').getBoundingClientRect = () => ({ top: 0 });
        document.getElementById('about').getBoundingClientRect = () => ({ top: 800 });

        const wrapper = mount(TestComponent);
        expect(wrapper.vm.active).toBe('home');
    });

    it('activa "about" cuando su top cruza el umbral', () => {
        // about queda por encima del umbral (150px)
        document.getElementById('about').getBoundingClientRect = () => ({ top: 100 });
        document.getElementById('home').getBoundingClientRect = () => ({ top: -500 });

        const wrapper = mount(TestComponent);
        window.dispatchEvent(new Event('scroll'));

        expect(wrapper.vm.active).toBe('about');
    });

    it('limpia el observer y el listener al desmontar', () => {
        const removeSpy = vi.spyOn(window, 'removeEventListener');
        const wrapper = mount(TestComponent);

        wrapper.unmount();

        expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
    });

    it('ignora IDs que no existen en el DOM sin romperse', () => {
        document.body.innerHTML = '<div id="home"></div>';   // falta "about"
        expect(() => mount(TestComponent)).not.toThrow();
    });
});