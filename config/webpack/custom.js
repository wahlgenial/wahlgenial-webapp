const webpack = require('webpack')

module.exports = {
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      Popper: ['popper.js', 'default']
    })
  ]
}
