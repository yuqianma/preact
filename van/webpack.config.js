const path = require('path');

const config = {
	mode: 'development',
	devtool: 'cheap-module-eval-source-map',
	entry: {
		index: './src/index.js',
	},
	output: {
		filename: '[name].js',
		path: path.join(__dirname, 'dist')
	},
	resolve: {
		alias: {
			'preact$': path.resolve(__dirname, '../src'),
			'preact/compat$': path.resolve(__dirname, '../compat/src'),
			'preact/hooks$': path.resolve(__dirname, '../hooks/src'),
			'zrender': path.resolve(__dirname, '../../zrender/src'),
			// 'prop-types': path.resolve(__dirname, 'node_modules/prop-types')
		}
	},
	module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
		]
	},
	devServer: {
		disableHostCheck: true,
		host: '0.0.0.0',
	}
};

module.exports = config;
