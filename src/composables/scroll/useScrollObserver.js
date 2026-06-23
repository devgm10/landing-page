import { onMounted, onUnmounted } from 'vue';

export function useScrollObserver(activeSectionRef, sectionIds) {
    let observer = null;

    const handleIntersect = () => {
        const sections = sectionIds
            .map((id) => document.getElementById(id))
            .filter(Boolean);

        let currentSection = sections[0];

        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();

            if (rect.top <= 150) {
                currentSection = section;
            }
        });

        activeSectionRef.value = currentSection.id;
    };

    onMounted(() => {
        observer = new IntersectionObserver(handleIntersect, {
            threshold: 0,
        });

        sectionIds.forEach((id) => {
            const element = document.getElementById(id);

            if (element) {
                observer.observe(element);
            }
        });

        window.addEventListener('scroll', handleIntersect, {
            passive: true,
        });

        handleIntersect();
    });

    onUnmounted(() => {
        observer?.disconnect();
        window.removeEventListener('scroll', handleIntersect);
    });
}