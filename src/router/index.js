import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/home',
        component: () => import('../views/Home')
      }, {
        path: '/other',
        component: () => import('../views/Other')
      }, {
        path: '/',
        redirect: '/home'
      }
    ]
  })
}
