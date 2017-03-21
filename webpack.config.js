const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log(process.env.NODE_ENV);

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.jsx$/,
        exclude: /node_modules/,
        include: [
          path.resolve(__dirname, 'src'),
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
  ],
  devServer: {
    historyApiFallback: true,
    port: 7070,
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true,
      colors: {
        green: '\u001b[32m',
      },
    },
  }
};
