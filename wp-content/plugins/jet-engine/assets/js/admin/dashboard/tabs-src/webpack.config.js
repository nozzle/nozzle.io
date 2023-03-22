const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require( 'vue-loader' );

module.exports = {
	name: 'js_bundle',
	context: path.resolve(__dirname, 'src'),
	entry: {
		'tab-manager': './main.js',
	},
	output: {
		path: path.resolve( __dirname + '/..' ),
		filename: '[name].bundle.js'
	},
	devtool: 'inline-cheap-module-source-map',
	resolve: {
		modules: [
			path.resolve(__dirname, 'src'),
			'node_modules'
		],
		extensions: [ '.js', '.vue' ],
		alias: {
		}
	},
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
		new VueLoaderPlugin()
	],
	optimization: {
		splitChunks: {
			chunks: 'all'
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
		]
	},
}