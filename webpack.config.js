const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { Template } = require('webpack');

module.exports = {
  mode: 'development',
  entry: './app/app.ts',
  module: {
    rules: [
      { test: /\.handlebars$/, 
        loader: "handlebars-loader"
      },
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ],
  },
  resolve: {
    extensions: ['.ts', '.js' ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devServer: {
    port: 8000,
    historyApiFallback: { 
      rewrites: [
        { from: /^\/$/, to: './dist/index.html'}
      ]
    }
  },
  plugins: [new HtmlWebpackPlugin({
    inject: false,
    template: './app/index.hbs'
  })],
}