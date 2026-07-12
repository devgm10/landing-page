import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

import planiflyArch from '@/assets/img/projects/planifly/planifly-arch.png';

export function useProjects() {
    const { tm } = useI18n();
    return computed(() => tm('landing.section.projects.list'));
}

export const PROJECT_IMAGES = {
    planifly: planiflyArch,
    pcg: null,
    harvest: null,
    'scraping-agro': null,
    portfolio: null,
};