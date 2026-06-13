export const initializeTheme = () => {
    const theme =
        localStorage.getItem('theme') || 'light'

    document.documentElement.classList.toggle(
        'dark',
        theme === 'dark'
    )

    return theme
}