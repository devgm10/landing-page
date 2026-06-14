import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import i18n from './i18n'

import '@fontsource/dm-mono'
import 'devicon/devicon.min.css'

import { initializeTheme } from '@/utils/theme'

import './style.css'

initializeTheme()

createApp(App)
    .use(router)
    .use(i18n)
    .mount('#app')