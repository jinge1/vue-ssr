// server.js
const serverRenderer = require('vue-server-renderer')
const express = require('express')
const nodeApp = express()

// 注意这里的default
const createApp = require('../dist/server-bundle.js')['default']

const renderer = serverRenderer.createRenderer()

nodeApp.get('*', function(req, res) {
  const context = { url: req.url }
  createApp(context).then(app => {
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
                    <title>server端router的实现</title>
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
