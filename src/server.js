// server.js
const serverRenderer = require('vue-server-renderer')
const express = require('express')
const nodeApp = express()
const path = require('path')

// 注意这里的default
const createApp = require('../dist/server-bundle.js')['default']

const renderer = serverRenderer.createRenderer()

const distDir = path.join(__dirname, '..', 'dist')
nodeApp.use('/', express.static(distDir))

const clientBundleFileUrl = '/bundle.client.js'


// 模拟接口请求部分
nodeApp.get('/api/getHomeInfo', (req, res) => {
  res.send('getHomeInfo -- 来自接口')
})

nodeApp.get('/api/getOtherInfo', (req, res) => {
  res.send('getOtherInfo -- 来自接口')
})

nodeApp.get('*', function(req, res) {
  const context = { url: req.url }
  createApp(context).then(app => {
    let state = JSON.stringify(context.state)
    renderer.renderToString(app, (err, html) => {
      if (err) {
        if (err.code === 404) {
          res.status(404).end('Page not found')
        } else {
          res.status(500).end('Internal Server Error')
        }
      } else {
        res.end(`
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <title>服务端数据渲染（vuex）的实现</title>
                    <script>window.__INITIAL_STATE__ = ${state}</script>
                    <script src="${clientBundleFileUrl}"></script>
                </head>
                <body>
                    ${html}
                </body>
            </html>
        `)
      }
    })
  }).catch(reson=>{
    res.status(404).end('Page not found')
  })

})

const server = nodeApp.listen(8080, function() {

  const host = server.address().address
  const port = server.address().port

  console.log('应用实例，访问地址为 http://%s:%s', host, port)

})
