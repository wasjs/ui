import { createApp } from 'vue'
import App from './App.vue'
import was from './index'

const app = createApp(App)

app.use(was)
app.mount('#app')