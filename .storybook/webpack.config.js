module.exports = {
  module: {
    rules: [
      { test: /\.sass$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'] }
    ]
  }
}
