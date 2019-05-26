import Vue from 'vue'
import App from './App.vue'
import wsocket from './services/socket.js'
Vue.config.productionTip = false
Vue.use(wsocket);
new Vue({
  render: h => h(App),
}).$mount('#app')
