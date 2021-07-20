const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
  },
  devServer: {
    contentBase: './dist',
  },
  mode: 'development',
};