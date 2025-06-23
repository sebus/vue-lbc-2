import './assets/main.css'

import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

const userToken = ref('')

const changeToken = (token) => {
  userToken.value = token
}
app.provide('GlobalStore', {
  userToken: userToken,
  changeToken: changeToken,
})

app.mount('#app')
