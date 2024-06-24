import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'

const app = createApp(App)

// Gunakan plugin Quasar
app.use(Quasar)

// Pasang router
app.use(router)

// Mount aplikasi ke elemen dengan id 'app'
app.mount('#app')
