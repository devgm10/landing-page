<script setup>
import { computed } from 'vue';
import { Star, Quote } from '@lucide/vue';

const props = defineProps({
    testimonial: { type: Object, required: true },
    note: { type: String, default: '' },
});

const initials = computed(() =>
    props.testimonial.name
        .split(' ')
        .slice(0, 2)
        .map((w) => w[0])
        .join('')
        .toUpperCase()
);
</script>

<template>
    <article class="card relative flex flex-col rounded-2xl border border-[var(--color-border-nav)] bg-[var(--color-bg-nav)]/20 overflow-hidden transition-all duration-400 p-7 sm:p-9 min-h-[300px]">
        <!-- Comilla decorativa de fondo -->
        <Quote class="quote-mark absolute top-5 right-6 w-16 h-16 pointer-events-none" aria-hidden="true" />

        <!-- Estrellas -->
        <div class="flex items-center gap-0.5 mb-5">
            <Star
                v-for="n in 5"
                :key="n"
                class="w-3.5 h-3.5"
                :class="n <= testimonial.rating ? 'star-on' : 'star-off'"
                :fill="n <= testimonial.rating ? 'currentColor' : 'none'"
                stroke-width="1.5"
            />
        </div>

        <!-- Comentario -->
        <blockquote class="relative text-sm sm:text-base leading-relaxed text-[var(--color-text-nav)] flex-1">
            {{ testimonial.comment }}
        </blockquote>

        <!-- Autor -->
        <footer class="relative flex items-center gap-3.5 mt-7 pt-6 border-t border-[var(--color-border-nav)]">
            <span class="avatar flex items-center justify-center w-11 h-11 rounded-full font-display text-xs font-bold shrink-0">
                {{ initials }}
            </span>

            <div class="min-w-0">
                <p class="text-sm font-bold text-[var(--color-text-nav-hover)] truncate">
                    {{ testimonial.name }}
                </p>
                <p class="font-mono text-[11px] text-[var(--color-text-nav)] truncate">
                    {{ testimonial.role }} · {{ testimonial.company }}
                </p>
            </div>
        </footer>

        <!-- Nota de traducción (solo en EN) -->
        <p v-if="note" class="relative mt-3 font-mono text-[9px] text-[var(--color-text-nav)]/40 italic">
            {{ note }}
        </p>
    </article>
</template>

<style scoped>
.card:hover {
    border-color: color-mix(in srgb, var(--color-primary) 40%, transparent);
    box-shadow: 0 20px 44px -22px color-mix(in srgb, var(--color-primary) 45%, transparent);
}

.quote-mark {
    color: color-mix(in srgb, var(--color-primary) 8%, transparent);
}

.star-on {
    color: var(--color-brand-500);
}
.star-off {
    color: color-mix(in srgb, var(--color-text-nav) 25%, transparent);
}

.avatar {
    background: var(--color-primary);
    color: var(--color-on-primary);
    box-shadow: 0 6px 16px -6px color-mix(in srgb, var(--color-primary) 60%, transparent);
}
</style>