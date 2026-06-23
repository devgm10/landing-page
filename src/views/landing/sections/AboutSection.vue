<script setup>
import { onMounted } from 'vue';
import { ref } from 'vue';
import {
    Layers,
    Infinity,
    Database,
    GraduationCap,
    Award,
    ChevronLeft,
    ChevronRight
} from '@lucide/vue';

import img1 from '@/assets/img/profile/profile.png';
import img2 from '@/assets/img/profile/profile2.png';

const images = [img1, img2];
const currentIndex = ref(0);

const next = () => {
    currentIndex.value = (currentIndex.value + 1) % images.length;
};

const prev = () => {
    currentIndex.value = (currentIndex.value - 1 + images.length) % images.length;
};

onMounted(() => {
    images.forEach((src) => {
        const img = new Image();
        img.src = src;
    });
});
</script>

<template>
    <!-- SECCIÓN: About Me (Envoltorio unificado con el max-w general de tu portfolio) -->
    <section id="about" class="relative w-full max-w-5xl mx-auto px-6 sm:px-4 py-20 sm:py-28 overflow-hidden">
        
        <!-- Efectos de Iluminación Ambiental Blandos -->
        <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-[var(--color-primary)]/[0.03] rounded-full blur-3xl pointer-events-none" />
        <div class="absolute bottom-1/4 left-1/4 w-80 h-80 bg-emerald-500/[0.02] rounded-full blur-3xl pointer-events-none" />

        <!-- Encabezado de Sección Sincronizado -->
        <div class="text-center mb-16 flex flex-col items-center gap-3 relative z-10 select-none">
            <div class="flex items-center gap-2">
                <span class="relative flex h-1.5 w-1.5">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                <span class="text-[10px] font-medium tracking-wider uppercase text-emerald-600 dark:text-emerald-400/80 leading-none">
                    About me
                </span>
            </div>

            <h2 class="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] text-[var(--color-text-nav-hover)] dark:text-white">
                <span class="inline-block text-gray-400/40 dark:text-zinc-500/40 font-mono text-xl sm:text-3xl lg:text-4xl mr-2">&lt;</span>
                <span>Detrás del <span class="text-[var(--color-primary)]">Código</span></span>
                <span class="inline-block text-gray-400/40 dark:text-zinc-500/40 font-mono text-xl sm:text-3xl lg:text-4xl ml-2">/&gt;</span>
            </h2>
            <div class="h-[4px] w-16 bg-[var(--color-primary)] rounded-full mt-2" />
        </div>

        <!-- 1. BLOQUE SUPERIOR: Grid de Contenido Reajustado (Distribución 4/8 con gaps premium) -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-x-12 items-center relative z-10 mb-16">
            
            <!-- COLUMNA IZQUIERDA: Carrusel de Fotos corregido -->
            <div class="lg:col-span-4 flex justify-center w-full">
                <div class="w-full max-w-[300px] aspect-[4/5] rounded-2xl overflow-hidden border border-gray-200/80 dark:border-zinc-800 relative bg-zinc-100 dark:bg-zinc-900 shadow-md group/card">
                    
                    <!-- CORRECCIÓN: Agregamos la clase transition-wrapper aquí -->
                    <div class="transition-wrapper">
                        <transition name="fade">
                            <img 
                                :key="images[currentIndex]"
                                :src="images[currentIndex]" 
                                alt="Gianmarco Linares" 
                                class="w-full h-full object-cover"
                            />
                        </transition>
                    </div>

                    <!-- Botones de Navegación -->
                    <button 
                        @click="prev" 
                        class="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/20 backdrop-blur-md text-white opacity-0 group-hover/card:opacity-100 transition-opacity hover:bg-black/40 z-20"
                    >
                        <ChevronLeft class="w-5 h-5" />
                    </button>

                    <button 
                        @click="next" 
                        class="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/20 backdrop-blur-md text-white opacity-0 group-hover/card:opacity-100 transition-opacity hover:bg-black/40 z-20"
                    >
                        <ChevronRight class="w-5 h-5" />
                    </button>

                    <!-- Gradiente y Badge (se mantienen igual) -->
                    <div class="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent opacity-90 pointer-events-none" />
                    
                    <div class="absolute bottom-4 left-4 right-4 p-3 rounded-xl border border-white/10 bg-zinc-950/60 backdrop-blur-md">
                        <p class="text-[9px] uppercase tracking-widest text-zinc-400 font-bold leading-none">CURRENT STATUS</p>
                        <p class="text-xs font-black text-white uppercase mt-1 tracking-wide leading-none">DevOps & Full Stack Specialist</p>
                    </div>
                </div>
            </div>

            <!-- COLUMNA DERECHA: Resumen completo basado en tu CV (8 Columnas) -->
            <div class="lg:col-span-8 flex flex-col gap-5 text-gray-500 dark:text-zinc-400 font-normal text-xs sm:text-sm leading-relaxed tracking-normal">
                
                <!-- Párrafo Destacado Principal -->
                <p class="text-sm sm:text-base font-black tracking-tight leading-snug text-[var(--color-text-nav-hover)] dark:text-white">
                    Ingeniero informático con más de 4 años de experiencia profesional especializándome en el desarrollo Full Stack & DevOps Engineer. Diseño soluciones de software de alta densidad que transforman lógica compleja en arquitecturas modulares, escalables y automatizadas en la nube.
                </p>
                
                <!-- Cuerpo de Experiencia Industrial (Corregido a "end-to-end") -->
                <p>
                    Mi experiencia técnica se consolidó liderando <strong>end-to-end</strong> el ciclo de vida de ecosistemas críticos en el sector agroindustrial, destacando el desarrollo del ERP <span class="font-bold text-[var(--color-text-nav-hover)] dark:text-zinc-200 underline decoration-[var(--color-primary)]/30 decoration-2 underline-offset-4">PCG-AGRO</span> y la plataforma geoespacial de cosecha <span class="font-bold text-[var(--color-text-nav-hover)] dark:text-zinc-200 underline decoration-[var(--color-primary)]/30 decoration-2 underline-offset-4">Harvest</span>. Implemento código bajo un estándar riguroso basado en principios SOLID y DRY, construyendo arquitecturas robustas y asíncronas con <span class="font-bold text-[var(--color-text-nav-hover)] dark:text-zinc-200">Python (Django/DRF)</span>, <span class="font-bold text-[var(--color-text-nav-hover)] dark:text-zinc-200">PostgreSQL</span>, WebSockets y automatizaciones en tiempo real mediante Webhooks. En el lado del cliente, garantizo interfaces reactivas y de alto rendimiento utilizando <span class="font-medium text-zinc-700 dark:text-zinc-300">TypeScript, Vue.js 3 (Composition API), Nuxt 3 (SSR)</span> y Tailwind CSS.
                </p>

                <!-- Cultura DevOps e Infraestructura -->
                <p>
                    Promuevo una <span class="font-bold text-[var(--color-primary)]">cultura DevOps activa</span> orientada a la Infraestructura como Código (IaC) y la alta disponibilidad. Domino la contenedorización y estandarización de entornos portables con <span class="font-bold text-[var(--color-text-nav-hover)] dark:text-zinc-200">Docker y Docker Compose</span>, la optimización de servidores con proxy inverso en <span class="font-medium text-zinc-700 dark:text-zinc-300">Nginx / Gunicorn</span>, y el aprovisionamiento automatizado en <span class="font-bold text-[var(--color-text-nav-hover)] dark:text-zinc-200">AWS</span> mediante <span class="font-medium text-zinc-700 dark:text-zinc-300">Terraform</span>. Además, diseño y despliego workflows y pipelines CI/CD eficientes utilizando <span class="font-bold text-[var(--color-text-nav-hover)] dark:text-zinc-200">GitHub Actions y Bitbucket Pipelines</span>, reduciendo errores manuales y garantizando entregas continuas estables.
                </p>
            </div>
        </div>

        <!-- 2. BLOQUE INFERIOR: Bento Widgets Fuera de la Grilla Superior -->
        <div class="relative z-10 pt-8 border-t border-gray-200 dark:border-zinc-800/60">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                
                <!-- Box 1: Core Stack (Frontend & Backend) -->
                <div class="p-4 rounded-xl border border-gray-200 dark:border-zinc-800/60 bg-gray-50/[0.3] dark:bg-zinc-900/[0.1] backdrop-blur-sm space-y-3 flex flex-col justify-between">
                    <div class="space-y-3">
                        <div class="w-8 h-8 rounded-lg bg-[var(--color-primary)]/[0.06] flex items-center justify-center border border-[var(--color-primary)]/10 text-[var(--color-primary)]">
                            <Layers class="w-4 h-4" />
                        </div>
                        <h4 class="text-xs font-black uppercase tracking-wider text-[var(--color-text-nav-hover)] dark:text-white">Full Stack Core</h4>
                    </div>
                    <p class="text-[11px] text-gray-500 dark:text-zinc-500 leading-normal">Django REST Framework, Nuxt 3 (SSR), TypeScript, Vue.js 3 y Tailwind CSS.</p>
                </div>

                <!-- Box 2: DevOps & Cloud (Infraestructura) -->
                <div class="p-4 rounded-xl border border-gray-200 dark:border-zinc-800/60 bg-gray-50/[0.3] dark:bg-zinc-900/[0.1] backdrop-blur-sm space-y-3 flex flex-col justify-between">
                    <div class="space-y-3">
                        <div class="w-8 h-8 rounded-lg bg-emerald-500/[0.06] flex items-center justify-center border border-emerald-500/10 text-emerald-500 dark:text-emerald-400">
                            <Infinity class="w-4 h-4" />
                        </div>
                        <h4 class="text-xs font-black uppercase tracking-wider text-[var(--color-text-nav-hover)] dark:text-white">DevOps & Cloud</h4>
                    </div>
                    <p class="text-[11px] text-gray-500 dark:text-zinc-500 leading-normal">Docker, Docker Compose, Terraform (IaC), AWS, Nginx y Gunicorn.</p>
                </div>

                <!-- Box 3: Data & Integrations (Ecosistema) -->
                <div class="p-4 rounded-xl border border-gray-200 dark:border-zinc-800/60 bg-gray-50/[0.3] dark:bg-zinc-900/[0.1] backdrop-blur-sm space-y-3 flex flex-col justify-between">
                    <div class="space-y-3">
                        <div class="w-8 h-8 rounded-lg bg-indigo-500/[0.06] flex items-center justify-center border border-indigo-500/10 text-indigo-500 dark:text-indigo-400">
                            <Database class="w-4 h-4" />
                        </div>
                        <h4 class="text-xs font-black uppercase tracking-wider text-[var(--color-text-nav-hover)] dark:text-white">Data & Real-Time</h4>
                    </div>
                    <p class="text-[11px] text-gray-500 dark:text-zinc-500 leading-normal">PostgreSQL, WebSockets, Webhooks y WhatsApp Business Bot API.</p>
                </div>

                <!-- Box 4: Automations (CI/CD) -->
                <div class="p-4 rounded-xl border border-gray-200 dark:border-zinc-800/60 bg-gray-50/[0.3] dark:bg-zinc-900/[0.1] backdrop-blur-sm space-y-3 flex flex-col justify-between">
                    <div class="space-y-3">
                        <div class="w-8 h-8 rounded-lg bg-amber-500/[0.06] flex items-center justify-center border border-amber-500/10 text-amber-500 dark:text-amber-400">
                            <Award class="w-4 h-4" />
                        </div>
                        <h4 class="text-xs font-black uppercase tracking-wider text-[var(--color-text-nav-hover)] dark:text-white">CI/CD Pipelines</h4>
                    </div>
                    <p class="text-[11px] text-gray-500 dark:text-zinc-500 leading-normal">Automatización absoluta de despliegues y testing mediante GitHub Actions y Bitbucket Pipelines.</p>
                </div>

                <!-- Box 5: Academic & Focus (Perfil) -->
                <div class="p-4 rounded-xl border border-gray-200 dark:border-zinc-800/60 bg-gray-50/[0.3] dark:bg-zinc-900/[0.1] backdrop-blur-sm space-y-3 flex flex-col justify-between">
                    <div class="space-y-3">
                        <div class="w-8 h-8 rounded-lg bg-blue-500/[0.06] flex items-center justify-center border border-blue-500/10 text-blue-500 dark:text-blue-400">
                            <GraduationCap class="w-4 h-4" />
                        </div>
                        <h4 class="text-xs font-black uppercase tracking-wider text-[var(--color-text-nav-hover)] dark:text-white">Especialización</h4>
                    </div>
                    <p class="text-[11px] text-gray-500 dark:text-zinc-500 leading-normal">Ingeniero Informático especializado en metodologías DevOps de la Universidad Nacional de Córdoba y DMC.</p>
                </div>

            </div>
        </div>
    </section>
</template>


<style scoped>
/* Cambiamos a posición absoluta dentro del contenedor */
.transition-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease-in-out;
    position: absolute; /* Esto evita que el contenedor "salte" */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.fade-enter-from, .fade-leave-to {
    opacity: 0;
}
</style>