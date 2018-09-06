import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/home',
        component: () => import('../pages/Home')
      }, {
        path: '/other',
        component: () => import('../pages/Other')
      }, {
        path: '/',
        redirect: '/home'
      }
    ]
  })
}
