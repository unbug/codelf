'use strict'

const path = require('path');
const merge = require('webpack-merge');

const common = {
  entry: ['@babel/polyfill', './src/App.js'],
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'app/js'),
    publicPath: '/app/js'
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules')
        ],
        loader: 'babel-loader'
      }
    ]
  }
};

exports.dev = merge(common, {
  mode: 'development',
  devtool: 'source-map'
});

exports.prod = merge(common, {
  mode: 'production'
});
