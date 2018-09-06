# vue服务端渲染demo（vue-server-renderer）

## 服务端数据渲染（vuex）的实现

### step1
*配置store，如“src/store/index.js”*

### step2
### 组件接口请求方法serverRequest配置
```
// src/pages/Home.vue
serverRequest(store) {
  return store.dispatch('getHomeInfo')
}
```

### step3
*切换路由组件时，调用serverRequest方法请求数据*
// src/entry/entry-server.js
```
if (component.serverRequest) {
  return component.serverRequest(store)
}
```

### step4
*main.js文件中整合vuex代码*

### step5
*新增接口请求数据处理*
```
// src/server.js
// 模拟接口请求部分
nodeApp.get('/api/getHomeInfo', (req, res) => {
  res.send('getHomeInfo -- 来自接口')
})

nodeApp.get('/api/getOtherInfo', (req, res) => {
  res.send('getOtherInfo -- 来自接口')
})
```

### step6
*启动服务*
```
npm start
```
