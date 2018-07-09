const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = {
	wwwroot: '../Gallery.Web/wwwroot',
	src: 'src',
	mode: 'production'
}

module.exports = {
	mode: config.mode,
	entry: './src/app.config.tsx',
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, config.wwwroot)
	},
	module: {
		rules: [
			{
				test: /\.(css|scss|sass)$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader',]
			},
			{
				test: /\.(ts|tsx)?$/,
				use: 'ts-loader'
			}
		]
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".json"],
		alias: {
			controls: path.resolve(__dirname, 'src', 'Controls'),
			pages: path.resolve(__dirname, 'src', 'Pages'),
			hubs: path.resolve(__dirname, 'src', 'Hubs'),
			models: path.resolve(__dirname, 'src', 'Models'),
		}
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css'
		})
	]
}