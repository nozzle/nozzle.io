var path = require('path')
var nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: ['babel-regenerator-runtime', './tools/index.js'],
  output: {
    path: path.resolve('./tools'),
    filename: 'lib.js',
    libraryTarget: 'commonjs2',
  },
  externals: [nodeExternals()],
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
}
