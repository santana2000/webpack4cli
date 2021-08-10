const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//与官方文档不同的引入方式
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { resolve } = require('path');

const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
	mode: 'development',
	entry: {
		app: './src/index.js',
		main: './src/main.js'
	},
	output: {
		// filename: 'bundle.js',
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	devServer: {
		contentBase: './dist'
	},
	devtool: 'inline-source-map',

	// ---------------------------plugins--------------------------
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			// title: '构建项目',
			favicon: path.resolve(__dirname, 'src/index.ico')
		}),
		new VueLoaderPlugin()

	],

	// ---------------------------loader--------------------------
	module: {
		rules: [
			{
				// 使用css-loader后，无需再html里引入css文件，进而减少网络请求
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			},
			{
				test: /\.vue$/,
				use: ["vue-loader"],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
				//注意新版babel在package.json里的配置书写
				// "presets": ["@babel/preset-env"]

			}

		]
	},
	resolve: {
		alias: {
			vue$: "vue/dist/vue.esm.js",
		},
	},
};
