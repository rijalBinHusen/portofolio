import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Axios from 'axios'

const app = createApp(App)

app.config.globalProperties.http = Axios;
app.mount('#app')
