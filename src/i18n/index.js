import { createI18n } from "vue-i18n";

import es from './locales/es';
import en from './locales/en';

const locale =
    localStorage.getItem('language') || 'es'

const i18n = createI18n({
    legacy: false,
    locale,
    fallbackLocale: 'en',
    messages: {
        es,
        en,
    },
})

export default i18n