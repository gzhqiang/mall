import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router'
import store from './store'
import 'amfe-flexible'


Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

FastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
