// const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');

const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./common');

const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'production',

  devtool: 'source-map',

  output: {
    path: path.resolve(process.cwd(), 'public'),
    publicPath: '/',
    filename: 'assets/[name].[hash].js'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' }
        ]
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: 'production'
    }),
    new htmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].[hash].css'
    })
    // new BundleAnalyzerPlugin({
    //   analyzerMode: 'static'
    // })
  ]
});
