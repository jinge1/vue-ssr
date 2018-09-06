// server.js
const Vue = require('vue')
const serverRenderer = require('vue-server-renderer')
const express = require('express')

const nodeApp = express()

const renderer = serverRenderer.createRenderer()

nodeApp.get('*', function(req, res) {
  const context = {
    url: req.url
  }

  const app = new Vue({
    data: {
      url: context.url
    },
    template: '<div>访问的 URL 是： {{ url }}</div>'
  })

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
                    <title>vue服务端渲染demo</title>
                </head>
                <body>
                    ${html}
                </body>
            </html>
        `)
    }
  })

})

const server = nodeApp.listen(8080, function() {
  const host = server.address().address
  const port = server.address().port
  console.log('应用实例，访问地址为 http://%s:%s', host, port)
})
