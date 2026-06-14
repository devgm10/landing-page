import { computed, ref } from 'vue'

const theme = ref(
    localStorage.getItem('theme') || 'light'
)

const applyTheme = (value) => {
    document.documentElement.classList.toggle(
        'dark',
        value === 'dark'
    )
    localStorage.setItem('theme', value)
}

export function useTheme() {
    const toggleTheme = () => {
        theme.value =
            theme.value === 'light'
                ? 'dark'
                : 'light'

        applyTheme(theme.value)
    }

    return {
        theme: computed(() => theme.value),
        toggleTheme,
    }
}