<script setup>
import { RouterView } from 'vue-router';
import Topbar from '@/components/ui/topbar/Topbar.vue';
import Footer from '@/components/ui/footer/Footer.vue';
</script>

<template>
    <div
        class="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300"
    >
        <Topbar />

        <RouterView />

        <Footer />
    </div>
</template>
