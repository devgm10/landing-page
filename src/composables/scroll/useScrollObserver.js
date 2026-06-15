import {
    onMounted,
    onUnmounted,
} from 'vue'

export function useScrollObserver(
    activeSectionRef,
    sectionIds,
    options = {}
) {
    let observer = null

    const {
        rootMargin = '-20% 0px -60% 0px',
        threshold = 0,
    } = options

    const handleIntersect = (entries) => {
        entries.forEach((entry) => {
            if (
                entry.isIntersecting &&
                entry.intersectionRatio > 0
            ) {
                activeSectionRef.value =
                    entry.target.id
            }
        })
    }

    onMounted(() => {
        observer = new IntersectionObserver(
            handleIntersect,
            {
                rootMargin,
                threshold,
            }
        )

        sectionIds.forEach((id) => {
            const element =
                document.getElementById(id)

            if (element) {
                observer.observe(element)
            }
        })
    })

    onUnmounted(() => {
        observer?.disconnect()
    })
}