module.exports = {
  entry: {
    bundle: './index.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel'
      }
    ]
  }
}
