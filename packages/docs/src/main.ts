import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import was from '@wasjs/vue'


const app = createApp(App)

app.use(was).use(router)
app.mount('#app')