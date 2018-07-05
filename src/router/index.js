import Vue from 'vue';
import Router from 'vue-router';
import GetPeople from '@/components/GetPeople';
/* eslint-disable */
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GetPeople',
      component: GetPeople
    }
  ]
})
