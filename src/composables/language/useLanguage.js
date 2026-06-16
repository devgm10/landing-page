import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

export function useLanguage() {
    const { locale } = useI18n();

    const setLanguage = (value) => {
        locale.value = value;

        document.documentElement.lang = value;

        localStorage.setItem('language', value);
    };

    const toggleLanguage = () => {
        setLanguage(locale.value === 'es' ? 'en' : 'es');
    };

    return {
        language: computed(() => locale.value),
        setLanguage,
        toggleLanguage,
    };
}
