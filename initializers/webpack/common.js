const path = require('path');

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(process.cwd(), 'public', 'assets'),
    publicPath: '/assets/'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(process.cwd(), 'src')
        ],
        use: 'babel-loader'
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },

  resolve: {
    modules: [
      path.resolve(process.cwd(), 'src'),
      'node_modules'
    ]
  }
};
