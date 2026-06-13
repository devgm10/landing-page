<script setup>
import { useI18n } from 'vue-i18n'
import { topbarItems } from './topbar.config'

const { t } = useI18n()

defineProps({
    onNavigate: {
        type: Function,
        required: true,
    },
})
</script>

<template>
    <nav class="hidden md:flex items-center gap-8">
        <button
            v-for="item in topbarItems"
            :key="item.section"
            @click="onNavigate(item.section)"
        >
            {{ t(item.key) }}
        </button>
    </nav>
</template>