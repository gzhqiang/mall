import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'amfe-flexible'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
