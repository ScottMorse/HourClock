const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry: './src/app',
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/app'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(png|jpg)$/,
        include: path.join(__dirname, 'client'),
        loader: 'url-loader'
      },
      {
        test: /\.mp3$/,
        include: path.join(__dirname, 'client'),
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html",
      filename: "./index.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};