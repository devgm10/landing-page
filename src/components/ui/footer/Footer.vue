<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { topbarItems } from '@/components/ui/topbar/topbar.config';
import SocialLinks from '@/components/ui/social/SocialLinks.vue';
import { Navigation as NavigationIcon, MapPin } from '@lucide/vue';
import ContactForm from '@/components/contact/ContactForm.vue';

const { t } = useI18n();
const currentYear = new Date().getFullYear();

const email = ref('');
const message = ref('');

const handleContact = () => {
    console.log({ email: email.value, message: message.value });
    email.value = '';
    message.value = '';
};
</script>

<template>
    <footer
        id="contact"
        class="relative w-full border-t border-[var(--color-border-nav)]/40 bg-[var(--color-bg-nav)]/30 backdrop-blur-xl transition-colors duration-300 overflow-hidden"
    >
        <div
            class="absolute -right-20 -top-20 -z-10 h-72 w-72 rounded-full bg-[var(--color-primary)]/5 blur-[80px] pointer-events-none"
        />
        <div
            class="absolute -left-20 -bottom-20 -z-10 h-72 w-72 rounded-full bg-[var(--color-primary)]/3 blur-[100px] pointer-events-none"
        />

        <div class="mx-auto max-w-7xl px-6 pt-10 pb-28 nav:py-14">
            <div
                class="flex flex-col nav:flex-row nav:justify-between items-start gap-10 nav:gap-6 pb-10 border-b border-[var(--color-border-nav)]/20"
            >
                <div class="w-full nav:w-auto min-w-[160px] flex flex-col gap-5">
                    <div class="flex items-center gap-3 select-none group w-fit">
                        <i
                            class="devicon-devicon-plain text-[var(--color-primary)] text-2xl transition-transform duration-300 group-hover:scale-110"
                        />
                        <div class="text-sm font-bold text-[var(--color-primary)] tracking-tight">
                            GLB
                        </div>
                    </div>

                    <nav class="flex flex-col gap-3">
                        <a
                            v-for="item in topbarItems"
                            :key="item.section"
                            :href="`#${item.section}`"
                            class="text-xs font-medium tracking-wide uppercase text-[var(--color-text-nav)]/60 hover:text-[var(--color-primary)] hover:translate-x-1 transition-all duration-300 ease-out w-fit"
                        >
                            {{ t(item.key) }}
                        </a>
                    </nav>
                </div>

                <div
                    class="w-full nav:w-auto min-w-[160px] flex flex-col gap-3 nav:border-l nav:border-[var(--color-border-nav)]/20 nav:pl-8 justify-start"
                >
                    <div
                        class="flex flex-col gap-1 text-xs text-[var(--color-text-nav)]/40 tracking-wider font-bold uppercase"
                    >
                        <div class="flex items-center gap-2 text-[var(--color-primary)]">
                            <MapPin class="w-3.5 h-3.5" />
                            <span>{{ t('footer.location_title', 'Ubicación') }}</span>
                        </div>
                    </div>

                    <div
                        class="flex flex-col gap-0.5 text-xs font-medium tracking-wide text-[var(--color-text-nav-hover)] uppercase"
                    >
                        <span class="text-[var(--color-text-nav-hover)]">Trujillo</span>
                        <span class="text-[var(--color-text-nav)]/60 text-[11px]">La Libertad</span>
                        <span
                            class="text-[var(--color-text-nav)]/40 text-[10px] tracking-widest font-light"
                            >Perú</span
                        >
                    </div>
                </div>

                <div class="w-full nav:flex-1 max-w-xl flex flex-col gap-4">
                    <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                        <div class="flex flex-col gap-1.5 max-w-sm">
                            <div class="flex items-center gap-3 flex-wrap">
                                <h3
                                    class="text-xs font-bold tracking-wider uppercase text-[var(--color-primary)]"
                                >
                                    {{ t('footer.contact_title') }}
                                </h3>

                                <div class="flex items-center gap-2 select-none h-full">
                                    <span class="relative flex h-1.5 w-1.5">
                                        <span
                                            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
                                        ></span>
                                        <span
                                            class="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"
                                        ></span>
                                    </span>
                                    <span
                                        class="text-[10px] font-medium tracking-wider uppercase text-emerald-600 dark:text-emerald-400/80 leading-none"
                                    >
                                        {{ t('status_personal') }}
                                    </span>
                                </div>
                            </div>

                            <p
                                class="text-xs text-[var(--color-text-nav)]/50 normal-case leading-relaxed"
                            >
                                {{ t('footer.contact_sub_title') }}
                            </p>
                        </div>

                        <button
                            type="submit"
                            form="contact-form"
                            class="hidden nav:inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] px-5 py-2.5 text-xs font-bold tracking-wide uppercase text-white shadow-lg shadow-[var(--color-primary)]/20 hover:shadow-[var(--color-primary)]/35 cursor-pointer group/btn transition-all duration-300 active:scale-95 whitespace-nowrap"
                        >
                            <span>{{ t('footer.send') }}</span>
                            <NavigationIcon
                                class="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:rotate-12 group-hover/btn:translate-x-0.5"
                            />
                        </button>
                    </div>

                    <ContactForm />
                </div>
            </div>

            <div class="mt-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
                <p
                    class="text-[11px] tracking-wider uppercase text-[var(--color-text-nav)]/50 text-center sm:text-left"
                >
                    &copy; {{ currentYear }} &bull; Made with 🤍 by GIANMARCO LINARES B. &bull; Full
                    Stack Developer
                </p>

                <SocialLinks
                    :show-divider="false"
                    class="scale-90 opacity-80 hover:opacity-100 transition-opacity"
                />
            </div>
        </div>
    </footer>
</template>
