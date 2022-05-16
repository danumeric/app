import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import { io } from "socket.io-client"; .use(io)

import { Vue } from 'vue'
Vue.prototype.$hostname = 'https://safe-fjord-51597.herokuapp.com' //http://localhost:5000

createApp(App).use(store).use(router).mount('#app')
