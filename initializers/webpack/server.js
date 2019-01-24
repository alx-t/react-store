const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./common');

const nodeExternals = require('webpack-node-externals');

module.exports = merge(common, {
  mode: 'production',

  target: 'node',

  entry: path.resolve(process.cwd(), 'initializers', 'server', 'index.js'),

  devtool: 'source-map',

  externals: [
    nodeExternals({
      whitelist: [/(.*).css$/]
    })
  ],

  output: {
    path: path.resolve(process.cwd(), 'build'),
    filename: 'server.js'
  },

  module: {
    exprContextCritical: false,
    rules: [
      { test: /\.css$/, use: 'ignore-loader' }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: 'production',
      __CLIENT__: false,
      __SERVER__: true
    })
  ]
});
