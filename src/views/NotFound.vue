<template>
    <div
        class="min-h-screen flex flex-col items-center justify-center gap-6 bg-background-light dark:bg-background-dark px-6 text-center"
    >
        <p class="text-8xl font-black text-[var(--color-primary)] select-none">404</p>

        <h1 class="text-2xl sm:text-3xl font-swanky text-[var(--color-text-nav-hover)] dark:text-white">
            Página no encontrada
        </h1>

        <p class="text-sm text-[var(--color-text-nav)] max-w-sm leading-relaxed">
            La URL que buscas no existe o fue movida.
        </p>

        <a
            href="/"
            class="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] px-6 py-3 text-xs font-bold tracking-wider uppercase text-white transition-all duration-300 active:scale-95"
        >
            Volver al inicio
        </a>
    </div>
</template>
