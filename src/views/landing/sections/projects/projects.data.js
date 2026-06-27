import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

export function useProjects() {
    const { tm } = useI18n();
    return computed(() => tm('landing.section.projects.list'));
}
