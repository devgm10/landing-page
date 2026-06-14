<script setup>
import { useI18n } from 'vue-i18n'
import * as LucideIcons from '@lucide/vue'
import { topbarItems } from './topbar.config'

const { t } = useI18n()

defineProps({
    activeSection: {
        type: String,
        required: true,
    },
    onNavigate: {
        type: Function,
        required: true,
    },
})
</script>

<template>
    <div 
        class="
            fixed 
            bottom-6 
            left-1/2 
            z-50 
            md:hidden
            
            flex 
            -translate-x-1/2 
            items-center 
            justify-around
            
            rounded-2xl 
            border 
            border-[var(--color-border-nav)]
            bg-[var(--color-bg-nav)]
            px-4
            py-2
            
            shadow-xl
            shadow-black/10
            dark:shadow-black/40
            backdrop-blur-lg
            
            w-[90vw]
            max-w-md
        "
    >
        <button
            v-for="item in topbarItems"
            :key="item.section"
            @click="onNavigate(item.section)"
            class="
                flex 
                flex-col 
                items-center 
                justify-center 
                rounded-xl 
                px-3
                py-1.5
                cursor-pointer
                transition-all 
                duration-200
                active:scale-90
            "
            :class="[
                activeSection === item.section
                    ? 'text-[var(--color-primary)]'
                    : 'text-[var(--color-text-nav)]'
            ]"
        >
            <component 
                :is="LucideIcons[item.iconName]" 
                class="w-5 h-5 transition-transform duration-200"
                :class="{ 'scale-110': activeSection === item.section }"
                :stroke-width="activeSection === item.section ? 2.5 : 2"
            />
            <span 
                class="mt-1 text-[10px] tracking-tight uppercase"
                :class="{ 'font-semibold': activeSection === item.section }"
            >
                {{ t(item.key).split('.')[1] || t(item.key) }}
            </span>
        </button>
    </div>
</template>