/**
 * Created by itay on 21/07/16.
 */

var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {

  entry:{
    app: './src/index',
    vendors: ['angular']
  },
  output: {
    path: path.join(__dirname, '/build/'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    // Automatically generate the index.html file including all webpack generated assets
    new HtmlWebpackPlugin({
      title: 'map editor',
      template: './src/index.html',
      inject: 'body'
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/, loader: "babel", exclude: /node_modules/,
        query:
        {
          presets:['es2015','react','stage-1']
        }
      },
      {test: /\.css$/, loader: "style!css"}
    ],
  },
  devtool: 'eval'

}
