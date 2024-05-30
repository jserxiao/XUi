import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import xatom from './index'

const app = createApp(App);
app.use(xatom).mount('#app')
