import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

import planifly from '@/assets/img/projects/planifly/planifly.png';
import pcgagro from '@/assets/img/projects/pcgagro/pcgagro.png';
import harvest from '@/assets/img/projects/harvest/harvest.png';
import portfolio from '@/assets/img/projects/portfolio/portfolio.png';

export function useProjects() {
    const { tm } = useI18n();
    return computed(() => tm('landing.section.projects.list'));
}

export const PROJECT_IMAGES = {
    portfolio: portfolio,
    planifly: planifly,
    pcg: pcgagro,
    harvest: harvest,
    'scraping-agro': null,
};