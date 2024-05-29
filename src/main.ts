import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import XUi from './index'

const app = createApp(App);
app.use(XUi).mount('#app')
