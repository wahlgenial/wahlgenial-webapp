const path = require('path')

module.exports = {
  module: {
    rules: [
      { test: /\.sass$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      { test: /\.(png|jpg|gif|svg)$/,
            use: [
              { loader: 'url-loader' }
            ]
      },
    ]
  }
}
