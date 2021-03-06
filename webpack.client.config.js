const path = require('path');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const sharedConfig = require('./webpack.shared.config');

const clientPort = 8080;

const config = {
  target: 'web',
  entry: './client/index.jsx',
  output: {
    path: path.join(__dirname, './build/client'),
    filename: 'scripts/bundle.js',
    publicPath: `http://localhost:${clientPort}/`,
  },
  devServer: {
    port: clientPort,
    liveReload: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': '*',
    },
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                exportLocalsConvention: 'camelCase',
                localIdentName: '[local]_[hash:base64:5]',
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/bundle.css',
    }),
  ],
};

module.exports = merge(sharedConfig, config);
