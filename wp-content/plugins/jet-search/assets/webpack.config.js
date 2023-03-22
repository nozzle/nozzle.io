var path = require('path');
var webpack = require('webpack');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
	entry: {
		'jet-search-block': './src/index.js',
	},
	output: {
		path: __dirname,
		filename: './js/[name].js',
	},
	watch: true,
	module: {
		rules: [{
				test: /\.(js|jsx|mjs)$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
				},
			}
		],
	},
	resolve: {
		modules: [
			path.resolve(__dirname, 'src'),
			'node_modules'
		],
	},
	externals: {
		'react': 'React',
		'react-dom': 'ReactDOM',
	},
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin()],
	},
};

if (process.env.NODE_ENV === 'production') {
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		// new webpack.optimize.UglifyJsPlugin({
		// 	sourceMap: false,
		// 	compress: {
		// 		warnings: false
		// 	}
		// }),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		})
	])
}
