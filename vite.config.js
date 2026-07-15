import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
    plugins: [vue(), tailwindcss()],

    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },

    test: {
        environment: 'happy-dom',
        globals: true,

        coverage: {
            provider: 'v8',
            reporter: ['text', 'lcov'],   // 'lcov' es el que lee Sonar
            reportsDirectory: './coverage',

            // Solo medimos JS: los .vue están excluidos en Sonar
            include: ['src/**/*.js'],
            exclude: [
                'src/**/*.data.js',
                'src/**/*.config.js',
                'src/i18n/**',
                'src/main.js',
                'src/router/**',
                'src/**/*.test.js',
                'src/composables/turnstile/**'
            ],
        },
    },
});
