import { createPinia } from 'pinia';
import { createApp } from 'vue';

import '@/assets/global.css';
import 'primeicons/primeicons.css';
import PrimeVue from 'primevue/config';
import App from './App.vue';
import router from './router';
import { theme } from './theme';

const app = createApp(App);

app.use(PrimeVue, theme);

app.use(createPinia());
app.use(router);

app.mount('#app');
