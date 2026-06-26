<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import BaseLoader from '@/components/ui/loading/BaseLoader.vue';

const router = useRouter();
const isLoading = ref(true);

router.isReady().then(() => {
    isLoading.value = false;
});
</script>

<template>
    <BaseLoader :visible="isLoading" />

    <RouterView v-if="!isLoading" />
</template>
