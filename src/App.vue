<script setup>
import { ref, onMounted } from 'vue';

import BaseLoader from '@/components/ui/loading/BaseLoader.vue';

const LOADER_DELAY_MS = 1500;

const isLoading = ref(true);

onMounted(() => {
    setTimeout(() => {
        isLoading.value = false;
    }, LOADER_DELAY_MS);
});
</script>

<template>
    <BaseLoader :visible="isLoading" />

    <RouterView v-if="!isLoading" />
</template>
