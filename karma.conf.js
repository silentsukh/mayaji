var webpackConfig = require('./webpack.test.js');

module.exports = function(config) {
	config.set({
		browsers: ['Chrome', 'Firefox', 'Safari'],
		singleRun: true,
		frameworks: ['mocha', 'chai'],
		files: [
			'./test/**/*.spec.js'
		],
		preprocessors: {
			'./test/**/*.spec.js' : ['webpack', 'sourcemap']
		},
		reporters: ['mocha'],
		webpack: webpackConfig,
		webpackServer: {
			noInfo: true
		}
	});
};