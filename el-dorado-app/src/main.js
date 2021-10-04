import Vue from 'vue'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css"
import router from './router'

import VModal from 'vue-js-modal'

Vue.config.productionTip = false;

Vue.prototype.$test = 'Not Approved';

Vue.use(VModal, {})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
