import Vue from 'vue';
import App from './App';
import router from './router';


Vue.prototype.$http = window.axios;


/* eslint-disable */
Vue.config.productionTip = false

/* eslint-disable */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
