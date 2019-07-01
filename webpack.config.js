const path = require('path')

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  mode: 'development',
  devtool: 'source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
    contentBase: './public'
  }
}
