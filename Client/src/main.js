import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './router/routes'
import { store } from './store/store'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import VueClipboard from 'vue-clipboard2'


Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(Routes)
Vue.use(VueClipboard)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: Routes
})

new Vue({
  el: '#app',
  store : store,
  render: h => h(App),
  router : router
})
