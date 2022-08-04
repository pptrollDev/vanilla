const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const { resolve } = require('path');

module.exports = {
  devServer: {
    historyApiFallback: true,
    port: 3000,
  },
  entry: {
    app: './src/app.js'
  },
  output: {
    path: resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'pages/404.html',
      template: 'pages/404.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'pages/about.html',
      template: 'pages/about.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'pages/index.html',
      template: 'pages/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'pages/lorem.html',
      template: 'pages/lorem.html'
    }),
    new MiniCssExtractPlugin({ filename: 'app.css' }),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist']
    })
  ],
  module: {
    rules: [
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader'
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  }
};
