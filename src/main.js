import Vue from 'vue'
import App from './App.vue'
import Router from './router'
// import Registration from '.views/registration.Vue'

Vue.config.productionTip = false

new Vue({
  router: Router,
  render: h => h(App),
}).$mount('#app')
