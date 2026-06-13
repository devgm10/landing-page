<script setup>
import { RouterView } from 'vue-router'
import Topbar from '@/components/ui/topbar/Topbar.vue'
</script>

<template>
    <div
        class="
            min-h-screen

            bg-background-light
            dark:bg-background-dark

            transition-colors
            duration-300
        "
    >
        <Topbar />

        <RouterView />
    </div>
</template>