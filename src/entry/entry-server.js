import createApp from '../main'

export default context => {
  return new Promise((resolve, reject) => {
    const {app, router, store} = createApp()
    router.push(context.url)

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      // 匹配不到的路由，执行 reject 函数，并返回 404
      if (!matchedComponents.length) {
        return reject({code: 404})
      }

      // 遍历路由下所以的组件，如果有需要服务端渲染的请求，则进行请求
      Promise.all(matchedComponents.map(component => {
        if (component.serverRequest) {
          return component.serverRequest(store)
        }
      })).then(() => {
        context.state = store.state
        resolve(app)
      }).catch(reject)
    }, reject)
  })

}
