<script setup>
defineProps({
    visible: {
        type: Boolean,
        default: false,
    },
})
</script>

<template>
    <Transition name="loader">
        <div
            v-if="visible"
            class="
                fixed
                inset-0
                z-[9999]

                flex
                items-center
                justify-center

                bg-background-light
                dark:bg-background-dark

                transition-colors
                duration-300
            "
        >
            <div class="flex flex-col items-center gap-6">
                <div
                    class="
                        flex
                        h-20
                        w-20
                        items-center
                        justify-center

                        rounded-full

                        border-4
                        border-primary/20
                        border-t-primary

                        animate-spin
                    "
                />

                <span
                    class="
                        text-primary
                        text-sm
                        font-semibold
                        tracking-[0.3em]
                        uppercase
                    "
                >
                    Loading
                </span>
            </div>
        </div>
    </Transition>
</template>

<style scoped>
    .loader-enter-active,
    .loader-leave-active {
        transition: opacity 0.4s ease;
    }

    .loader-enter-from,
    .loader-leave-to {
        opacity: 0;
    }
</style>