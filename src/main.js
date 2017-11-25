// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import store from './store/store'
import App from './App'

Vue.use(Vuetify, {
  theme: {
    primary: '#3f51b5',
    secondary: '#555555',
    accent: '#e91e63',
    warn: '#f44336'
  }
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  store: store,
  components: { App }
})
