import { createApp } from 'vue';
import App from './App.vue';

// Style
import './scss/main.scss';

// Config Event Bus
import mitt from 'mitt';
const emitter = mitt();

// Package
import i18n from './i18n';


const app = createApp(App);
app.provide('emitter', emitter);
app.use(i18n);
app.mount('#app');
