const webpack = require('webpack');
const path = require('path');

const TEST_DIR = path.resolve(__dirname, 'test');
const SASS_DIR = path.resolve(__dirname, 'sass');

module.exports = [{
	context: TEST_DIR,
	devtool: 'inline-source-map',
	module: {
		loaders: [{
	        test: /\.jsx?$/,
	        exclude: path.resolve(__dirname, 'node_modules'),
	        loader: 'babel',
	        query: {
	          presets: ['es2015', 'react'],
	          plugins: ["transform-object-rest-spread"]
	        }
    	}, {
			test: /\.scss$/,
			exclude: path.resolve(__dirname, 'node_modules'),
			loader: 'css!sass'
		}]
	}
}];