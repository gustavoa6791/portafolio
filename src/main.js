import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
import "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"  

import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
