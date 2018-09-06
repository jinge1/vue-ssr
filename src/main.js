import Vue from 'vue'
import App from './App'
import createRouter from './router'
import createStore from './store'

// 导出一个工厂函数，用于创建新的
// 应用程序、router 和 store 实例
export default function createApp () {
  const router  = createRouter()
  const store = createStore()
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })
  return { app, router, store }
}
