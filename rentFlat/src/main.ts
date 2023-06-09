/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import vuetify from "@/plugins/vuetify";
import router from "@/router";
import {createPinia} from "pinia";
import {i18n} from "@/plugins/i18n";

const app = createApp(App)

registerPlugins(app)
app.use(router)
app.use(vuetify)
app.use(i18n)
app.use(createPinia)
app.mount('#app')
