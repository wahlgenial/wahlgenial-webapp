const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    application: [
      './app/javascript/application.js',
      './app/stylesheets/application.sass' ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      Popper: ['popper.js', 'default']
    }),
    new ExtractTextPlugin('[name]-[hash].css')
  ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css!sass')
      }
    ]
  }
}
