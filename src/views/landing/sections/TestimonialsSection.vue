<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { ChevronLeft, ChevronRight } from '@lucide/vue';
import TestimonialCard from './testimonials/TestimonialCard.vue';

const { t, tm } = useI18n();

const testimonials = computed(() => tm('landing.section.testimonials.list'));
const note = computed(() => t('landing.section.testimonials.translated_note'));

const currentIndex = ref(0);
const total = computed(() => testimonials.value.length);
const current = computed(() => testimonials.value[currentIndex.value]);

const next = () => { currentIndex.value = (currentIndex.value + 1) % total.value; };
const prev = () => { currentIndex.value = (currentIndex.value - 1 + total.value) % total.value; };
const goTo = (i) => { currentIndex.value = i; };
</script>

<template>
    <section id="testimonials" class="relative max-w-4xl mx-auto px-6 py-24">
        <!-- Header -->
        <div class="text-center mb-14">
            <div class="inline-flex items-center gap-2 mb-4 select-none">
                <span class="font-mono text-xs tracking-[0.15em] text-[var(--color-text-nav)]/60">$ grep -r</span>
                <span class="font-mono text-xs tracking-[0.15em]" style="color: var(--color-primary);">"gianmarco"</span>
            </div>

            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter text-[var(--color-text-nav-hover)]">
                {{ t('landing.section.testimonials.main_title') }}
            </h2>
        </div>

        <!-- Carrusel -->
        <div class="flex items-center gap-4">
            <button
                @click="prev"
                type="button"
                aria-label="Anterior"
                class="arrow arrow-ghost hidden md:flex shrink-0 items-center justify-center w-11 h-11 rounded-full border border-[var(--color-border-nav)] bg-[var(--color-bg-nav)] text-[var(--color-text-nav-hover)] transition-all duration-300 active:scale-90"
            >
                <ChevronLeft class="w-5 h-5" />
            </button>

            <div class="flex-1 min-w-0">
                <Transition name="slide" mode="out-in">
                    <TestimonialCard
                        :key="currentIndex"
                        :testimonial="current"
                        :note="note"
                    />
                </Transition>
            </div>

            <button
                @click="next"
                type="button"
                aria-label="Siguiente"
                class="arrow arrow-solid hidden md:flex shrink-0 items-center justify-center w-11 h-11 rounded-full bg-[var(--color-primary)] text-[var(--color-on-primary)] transition-all duration-300 active:scale-90"
            >
                <ChevronRight class="w-5 h-5" />
            </button>
        </div>

        <!-- Controles móvil -->
        <div class="flex md:hidden items-center justify-center gap-4 mt-6">
            <button
                @click="prev"
                type="button"
                aria-label="Anterior"
                class="arrow arrow-ghost flex items-center justify-center w-11 h-11 rounded-full border border-[var(--color-border-nav)] bg-[var(--color-bg-nav)] text-[var(--color-text-nav-hover)] active:scale-90 transition-all duration-300"
            >
                <ChevronLeft class="w-5 h-5" />
            </button>
            <button
                @click="next"
                type="button"
                aria-label="Siguiente"
                class="arrow arrow-solid flex items-center justify-center w-11 h-11 rounded-full bg-[var(--color-primary)] text-[var(--color-on-primary)] active:scale-90 transition-all duration-300"
            >
                <ChevronRight class="w-5 h-5" />
            </button>
        </div>

        <!-- Dots -->
        <div class="flex justify-center gap-2 mt-8">
            <button
                v-for="(item, i) in testimonials"
                :key="i"
                @click="goTo(i)"
                type="button"
                :aria-label="`Ir al testimonio ${i + 1}`"
                class="dot h-1.5 rounded-full transition-all duration-300"
                :class="i === currentIndex ? 'dot-active w-6' : 'w-1.5'"
            />
        </div>
    </section>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-enter-from { opacity: 0; transform: translateX(30px); }
.slide-leave-to { opacity: 0; transform: translateX(-30px); }

.arrow-ghost:hover {
    color: var(--color-primary);
    border-color: color-mix(in srgb, var(--color-primary) 45%, transparent);
    background: color-mix(in srgb, var(--color-primary) 8%, transparent);
}

.arrow-solid {
    box-shadow: 0 8px 20px -8px color-mix(in srgb, var(--color-primary) 60%, transparent);
}
.arrow-solid:hover {
    background: var(--color-primary-hover);
    box-shadow: 0 12px 26px -8px color-mix(in srgb, var(--color-primary-hover) 70%, transparent);
}

.dot {
    background: var(--color-border-nav);
}
.dot:hover {
    background: color-mix(in srgb, var(--color-primary) 50%, transparent);
}
.dot-active {
    background: var(--color-primary);
}
</style>