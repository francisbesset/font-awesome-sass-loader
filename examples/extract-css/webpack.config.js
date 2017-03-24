const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    'font-awesome': 'font-awesome-sass!./font-awesome.config.js',
  },
  output: {
    path: './public/assets',
    publicPath: '/assets/',
    filename: '[name].js',
  },
  module: {
    loaders: [
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' },
    ],
  },
  plugins: [
    new ExtractTextPlugin("[name].css"),
  ],
};
