const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	context: path.resolve(__dirname, '../'),
	entry: {
		main: "./src/main.js",
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: "[name].js"
	},
	module: {
		rules: [
			{ test: /\.(wav|mp3|ogg)$/i, use: "file-loader" }
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./src/index.html",
			filename: "index.html",
			chunks: ["main"],
		}),
		new copyWebpackPlugin({
			patterns: [
				{ from: 'assets/img', to: 'img' },
				{ from: 'assets/lib', to: 'lib' },
			],
		}),
	],
}