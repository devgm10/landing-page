<script setup>
import { RouterView } from 'vue-router';
import Topbar from '@/components/ui/topbar/Topbar.vue';
import Footer from '@/components/ui/footer/Footer.vue';
</script>

<template>
    <div class="relative min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300">

        <div class="fixed inset-0 -z-0 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

        <Topbar />

        <RouterView />

        <Footer />
    </div>
</template>