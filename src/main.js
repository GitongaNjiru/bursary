import './assets/css/bootstrap.min.css';
import './assets/css/icons.min.css';
import './assets/css/app.min.css';
import './assets/css/custom.css';
import './assets/css/map.css';



import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router) // Register Vue Router
app.mount('#app')