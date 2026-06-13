<script setup>
import { ref, onMounted } from 'vue'

import BaseLoader from '@/components/ui/loading/BaseLoader.vue'

const isLoading = ref(true)

onMounted(() => {
    setTimeout(() => {
        isLoading.value = false
    }, 1500)
})
</script>

<template>
    <BaseLoader
        :visible="isLoading"
    />

    <RouterView v-if="!isLoading" />
</template>