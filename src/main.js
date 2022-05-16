import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import { io } from "socket.io-client"; .use(io)


const appVue = createApp(App).use(store).use(router).mount('#app')
appVue.config.globalProperties.$hostname = 'https://safe-fjord-51597.herokuapp.com'
