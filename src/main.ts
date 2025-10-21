import '@/assets/main.css'
import router from '@/router'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'

// Vuetify
import 'vuetify/lib/styles/main.css'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'

// I18n
import { createI18n } from 'vue-i18n'
const i18n = createI18n({ legacy: false, locale: 'en', fallbackLocale: 'en' })

// Components
import App from './App.vue'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const vuetify = createVuetify()

app.use(pinia)
app.use(router)
app.use(vuetify)
app.use(i18n)

app.mount('#app')
