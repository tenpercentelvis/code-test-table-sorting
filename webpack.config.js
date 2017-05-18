
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const bourbon = require('node-bourbon').includePaths;
const normalize = require('node-normalize-scss').includePaths;

const config = {
  entry: './app/index.js',
  output: {
    path: path.join(__dirname, "app-public"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "app-public"),
    port: 5001,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './app/index.html'
    })
  ],
  module: {
    rules: [
      // linting
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        use: ["eslint-loader"],
        exclude: /(node_modules)/,
      },
      // loader to use sass modules
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader?modules&sourceMap&localIdentName=[local]___[hash:base64:5]!sass-loader?includePaths[]=" + bourbon + "&includePaths[]=" + normalize
      },
      // loader to use html
      {
        test: /\.html$/,
        use: "html-loader",
      },
      // loader to use babel
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      // loader to use fonts and images
      {
        test: /\.(png|woff|woff2|eot|ttf)$/,
        use: 'file-loader?limit=100000'
      },
      {
        test: /\.(svg)$/,
        use: 'url-loader?limit=100000'
      }
    ]
  }
};

module.exports = config;
