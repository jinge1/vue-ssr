const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  //页面入口文件配置
  entry: {
    index: path.join(__dirname, '..', 'src/entry/entry-client.js')
  },
  target: 'web',
  mode: 'production',
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: 'bundle.client.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      }, {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      }, {
        test: /\.es6$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [
      '.js', '.vue', '.css'
    ],
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
