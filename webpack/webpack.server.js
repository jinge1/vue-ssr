const path =require('path')

const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
  target: 'node',
  mode: 'production',
  entry: {
    index: path.join(__dirname, '..', 'src/entry/entry-server.js')
  },
  //入口文件输出配置
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: 'server-bundle.js',
    libraryTarget: 'commonjs2'
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
        use: ['css-loader']
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
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
