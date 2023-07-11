import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './rem.js'
import './assets/sass/style.sass'
import router from './router';

createApp(App).use(router).use(VueAxios, axios).mount('#app')
