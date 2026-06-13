<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import { topbarItems } from './topbar.config'

const { t } = useI18n()

defineProps({
    onNavigate: {
        type: Function,
        required: true,
    },
})

const isOpen = ref(false)

const handleNavigation = (section, navigate) => {
    navigate(section)
    isOpen.value = false
}
</script>

<template>
    <div class="md:hidden">
        <button
            class="
                rounded-lg
                border
                border-slate-300
                px-3
                py-2
            "
            @click="isOpen = !isOpen"
        >
            ☰
        </button>

        <div
            v-if="isOpen"
            class="
                absolute
                top-16
                right-4
                z-[100]

                w-52

                rounded-xl
                border

                border-slate-200
                dark:border-slate-800

                bg-white
                dark:bg-background-dark

                shadow-lg
            "
        >
            <button
                v-for="item in topbarItems"
                :key="item.section"
                class="
                    block
                    w-full
                    px-4
                    py-3
                    text-left

                    hover:bg-slate-100
                    dark:hover:bg-slate-900
                "
                @click="handleNavigation(item.section, onNavigate)"
            >
                {{ t(item.key) }}
            </button>
        </div>
    </div>
</template>