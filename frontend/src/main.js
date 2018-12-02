import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VueYoutube from 'vue-youtube'
import VueSocketIO from 'vue-socket.io'
import './assets/css/main.scss'

const SOCKET_URL = process.env.NODE_ENV !== 'development'
    ? ''
    : '//localhost:3000'

Vue.use(new VueSocketIO({
    debug: true,
    connection: SOCKET_URL,
    vuex: {
        store,
        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_'
    }
}))

Vue.use(VueYoutube)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
