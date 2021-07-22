import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

import 'bootstrap/dist/js/bootstrap.bundle';

import './scss/main.scss';

createApp(App).use(router).mount('#app');
