const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = {
  wwwroot: '../Gallery.Web/wwwroot',
  src: 'src',
  mode: 'development'
}

module.exports = {
  mode: config.mode,
  entry: './app.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, config.wwwroot)
  },
  module: {
    rules: [
      { 
        test: /\.(scss|sass)$/, 
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', ]
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
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
}