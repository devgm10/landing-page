<script setup>
import { useI18n } from 'vue-i18n';
import {
    ChevronDown,
    Building2,
    ShieldCheck,
    Layers3,
    Boxes,
    Workflow,
} from '@lucide/vue';

const { t } = useI18n();

defineProps({
    project: {
        type: Object,
        required: true,
    },

    isExpanded: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(['toggle']);
</script>

<template>
    <article
        :id="`project-${project.id}`"
        class="
            rounded-3xl
            border
            border-[var(--color-border-nav)]
            bg-[var(--color-bg-nav)]
            backdrop-blur-xl
            overflow-hidden
            transition-all
            duration-300
        "
    >
        <!-- HEADER -->

        <div class="p-8">
            <div class="flex flex-wrap gap-2 mb-5">
                <span
                    class="
                        px-3 py-1
                        rounded-full
                        bg-[var(--color-primary)]/10
                        text-[var(--color-primary)]
                        text-[10px]
                        uppercase
                        tracking-widest
                        font-bold
                    "
                >
                    {{ project.category }}
                </span>

                <span
                    class="
                        px-3 py-1
                        rounded-full
                        bg-zinc-500/10
                        text-zinc-500
                        text-[10px]
                        uppercase
                        tracking-widest
                        font-bold
                    "
                >
                    {{ project.type }}
                </span>
            </div>

            <h3
                class="
                    text-2xl
                    sm:text-3xl
                    font-swanky
                    text-[var(--color-text-nav-hover)]
                    dark:text-white
                    mb-3
                "
            >
                {{ project.title }}
            </h3>

            <div
                class="
                    flex
                    items-center
                    gap-2
                    text-xs
                    uppercase
                    tracking-widest
                    text-zinc-500
                    mb-5
                "
            >
                <Building2 class="w-4 h-4" />
                {{ project.company }}
            </div>

            <p
                class="
                    text-sm
                    text-zinc-500
                    leading-relaxed
                "
            >
                {{ project.shortDescription }}
            </p>

            <button
                @click="emit('toggle', project.id)"
                type="button"
                class="
                    mt-6
                    flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-[var(--color-primary)]
                    hover:opacity-80
                    transition-all
                    cursor-pointer
                "
            >
                {{
                    isExpanded
                        ? t('landing.section.projects.card.button_hide_details')
                        : t('landing.section.projects.card.button_show_details')
                }}

                <ChevronDown
                    class="
                        w-4
                        h-4
                        transition-transform
                        duration-300
                    "
                    :class="{
                        'rotate-180': isExpanded,
                    }"
                />
            </button>
        </div>

        <!-- DETALLES -->

        <Transition name="expand">
            <div
                v-if="isExpanded"
                class="
                    border-t
                    border-[var(--color-border-nav)]
                    p-8
                    animate-fade-in
                "
            >
                <div class="p-8 space-y-10">
                    <!-- Descripción -->

                    <div>
                        <h4
                            class="
                                text-xs
                                uppercase
                                tracking-[0.25em]
                                text-[var(--color-primary)]
                                font-bold
                                mb-4
                            "
                        >
                            {{ t('landing.section.projects.card.label_project') }}
                        </h4>

                        <p
                            class="
                                text-sm
                                text-zinc-500
                                leading-relaxed
                            "
                        >
                            {{ project.details.description }}
                        </p>
                    </div>

                    <!-- Grid -->

                    <div
                        class="
                            grid
                            lg:grid-cols-2
                            gap-10
                        "
                    >
                        <!-- Columna izquierda -->

                        <div class="space-y-8">
                            <div>
                                <div
                                    class="
                                        flex
                                        items-center
                                        gap-2
                                        mb-3
                                    "
                                >
                                    <Workflow
                                        class="
                                            w-4
                                            h-4
                                            text-[var(--color-primary)]
                                        "
                                    />

                                    <span
                                        class="
                                            text-xs
                                            uppercase
                                            font-bold
                                            tracking-widest
                                        "
                                    >
                                        {{ t('landing.section.projects.card.label_architecture') }}
                                    </span>
                                </div>

                                <p
                                    class="
                                        text-sm
                                        text-zinc-500
                                    "
                                >
                                    {{
                                        project.details
                                            .architecture
                                    }}
                                </p>
                            </div>

                            <div>
                                <h5
                                    class="
                                        text-xs
                                        uppercase
                                        tracking-widest
                                        text-[var(--color-primary)]
                                        font-bold
                                        mb-3
                                    "
                                >
                                    {{ t('landing.section.projects.card.label_methodology') }}
                                </h5>

                                <p
                                    class="
                                        text-sm
                                        text-zinc-500
                                    "
                                >
                                    {{
                                        project.details
                                            .methodology
                                    }}
                                </p>
                            </div>

                            <div>
                                <div
                                    class="
                                        flex
                                        items-center
                                        gap-2
                                        mb-3
                                    "
                                >
                                    <Boxes
                                        class="
                                            w-4
                                            h-4
                                            text-[var(--color-primary)]
                                        "
                                    />

                                    <span
                                        class="
                                            text-xs
                                            uppercase
                                            font-bold
                                            tracking-widest
                                        "
                                    >
                                        {{ t('landing.section.projects.card.label_modules') }}
                                    </span>
                                </div>

                                <ul
                                    class="
                                        grid
                                        gap-2
                                    "
                                >
                                    <li
                                        v-for="module in project.details.modules"
                                        :key="module"
                                        class="
                                            text-sm
                                            text-zinc-500
                                        "
                                    >
                                        • {{ module }}
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <!-- Columna derecha -->

                        <div class="space-y-8">
                            <div v-if="project.details.security?.length">
                                <div
                                    class="
                                        flex
                                        items-center
                                        gap-2
                                        mb-3
                                    "
                                >
                                    <ShieldCheck
                                        class="
                                            w-4
                                            h-4
                                            text-[var(--color-primary)]
                                        "
                                    />

                                    <span
                                        class="
                                            text-xs
                                            uppercase
                                            font-bold
                                            tracking-widest
                                        "
                                    >
                                        {{ t('landing.section.projects.card.label_security') }}
                                    </span>
                                </div>

                                <ul class="space-y-2">
                                    <li
                                        v-for="item in project.details.security"
                                        :key="item"
                                        class="
                                            text-sm
                                            text-zinc-500
                                        "
                                    >
                                        • {{ item }}
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <div
                                    class="
                                        flex
                                        items-center
                                        gap-2
                                        mb-4
                                    "
                                >
                                    <Layers3
                                        class="
                                            w-4
                                            h-4
                                            text-[var(--color-primary)]
                                        "
                                    />

                                    <span
                                        class="
                                            text-xs
                                            uppercase
                                            font-bold
                                            tracking-widest
                                        "
                                    >
                                        {{ t('landing.section.projects.card.label_stack') }}
                                    </span>
                                </div>

                                <div
                                    v-for="(items, category) in project.stack"
                                    :key="category"
                                    class="mb-4"
                                >
                                    <p
                                        class="
                                            text-xs
                                            uppercase
                                            font-bold
                                            text-[var(--color-primary)]
                                            mb-2
                                        "
                                    >
                                        {{ category }}
                                    </p>

                                    <div
                                        class="
                                            flex
                                            flex-wrap
                                            gap-2
                                        "
                                    >
                                        <span
                                            v-for="item in items"
                                            :key="item"
                                            class="
                                                px-2
                                                py-1
                                                rounded-md
                                                text-xs
                                                bg-zinc-500/10
                                                text-zinc-500
                                            "
                                        >
                                            {{ item }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </article>
</template>

<style scoped>
.expand-enter-active,
.expand-leave-active {
    transition:
        max-height 0.45s ease,
        opacity 0.35s ease,
        transform 0.35s ease;
    overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
    max-height: 0;
    opacity: 0;
    transform: translateY(-10px);
}

.expand-enter-to,
.expand-leave-from {
    max-height: 1200px;
    opacity: 1;
    transform: translateY(0);
}
</style>