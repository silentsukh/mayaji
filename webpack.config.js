const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const SRC_DIR = path.resolve(__dirname, 'src');
const DIST_DIR = path.resolve(__dirname, 'dist');
const SASS_DIR = path.resolve(__dirname, 'sass');

module.exports = [{
  target: 'web',
  context: SRC_DIR,
  entry: {
    bundle: './index.js',
    vendors: ['react', 'react-dom', 'redux']
  },
  output: {
    path: DIST_DIR,
    filename: '[name].js',
    publicPath: '/dist/'
  },
  module: {
    preLoaders: [{
      test: /\.jsx?$/,
      loaders: ['eslint']
    }],
    loaders: [{
        test: /\.jsx?$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'react-hmre'],
          plugins: ["transform-object-rest-spread"]
        }
    }, {
      test: /\.scss$/,
      exclude: path.resolve(__dirname, 'node_modules'),
      loader: ExtractTextPlugin.extract('css!sass')
    }]
  },
  plugins: [
    new ExtractTextPlugin('styles.css', { allChunks: true }),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.bundle.js')
  ]
}];