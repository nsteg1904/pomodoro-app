import { createPinia } from 'pinia';
import { createApp } from 'vue';

import '@/assets/global.css';
import Aura from '@primeuix/themes/aura';
import 'primeicons/primeicons.css';
import PrimeVue from 'primevue/config';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.use(createPinia());
app.use(router);

app.mount('#app');
