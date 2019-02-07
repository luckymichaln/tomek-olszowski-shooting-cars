// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)

Vue.config.productionTip = true

/* eslint-disable no-new */
setTimeout(() => {
  Vue.use(VueLazyload, {
    preLoad: 1.3,
    attempt: 1,
    throttleWait: 100
  })
}, 300)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
