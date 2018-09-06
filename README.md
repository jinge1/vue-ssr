# vue服务端渲染demo（vue-server-renderer）

## 服务端router的实现

### step1
#### webpack配置
*服务端引入webpack，主要是方便后续客户端与服务端可共用同一套代码*
*注意服务端webpack配置：*
* target: 'node'
* output: {libraryTarget: commonjs2}


### step2
* 设置路由模式mode为 history
* 根据访问url切换到对应路由
```
// src/entry/entry-server.js
router.push(context.url)
```

### step3
* server文件中引入createApp
```
// src/server.js
// 注意这里的default
const createApp = require('../dist/server-bundle.js')['default']
```

### step4
* webpack打包server
```
npm run server
```

### step5
* server启动（包含step4的动作）
```
npm start
```
