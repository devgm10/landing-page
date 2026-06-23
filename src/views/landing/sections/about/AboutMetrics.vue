<script setup>
import { Layers, Infinity, Database, Award, GraduationCap } from '@lucide/vue';

const metrics = [
    { title: 'Full Stack Core', icon: Layers, desc: 'Django, Nuxt 3, TypeScript, Vue.js 3, Tailwind.' },
    { title: 'DevOps & Cloud', icon: Infinity, desc: 'Docker, Terraform, AWS, Nginx, Gunicorn.' },
    { title: 'Data & Real-Time', icon: Database, desc: 'PostgreSQL, WebSockets, WhatsApp Bot API.' },
    { title: 'CI/CD Pipelines', icon: Award, desc: 'Automatización con GitHub Actions y Bitbucket.' },
    { title: 'Especialización', icon: GraduationCap, desc: 'Ing. Informático, Especialista DevOps (UNC/DMC).' }
];
</script>

<template>
    <div class="space-y-4">
        <div 
            v-for="(item, index) in metrics" 
            :key="item.title"
            class="metric-card border border-zinc-200 dark:border-zinc-800 p-5 rounded-xl bg-white dark:bg-zinc-900 shadow-sm hover:border-[var(--color-primary)]/30 transition-all duration-300"
            :style="{ animationDelay: `${index * 0.15}s` }"
        >
            <div class="flex items-center gap-3 mb-2">
                <div class="text-[var(--color-primary)]">
                    <component :is="item.icon" class="w-4 h-4" />
                </div>
                <h4 class="text-[10px] font-black uppercase tracking-widest text-zinc-900 dark:text-white">
                    {{ item.title }}
                </h4>
            </div>
            <p class="text-[11px] text-zinc-500 font-mono leading-relaxed pl-7">
                {{ item.desc }}
            </p>
        </div>
    </div>
</template>