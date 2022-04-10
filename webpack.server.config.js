const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const { merge } = require('webpack-merge');
const sharedConfig = require('./webpack.shared.config.js');

const config = {
  target: 'node',
  entry: './server/index.jsx',
  output: {
    path: path.join(__dirname, './build/server'),
    filename: 'bundle.js',
  },
  externals: [webpackNodeExternals()],
  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
        loader: 'css-loader',
        options: {
          modules: {
            exportOnlyLocals: true,
            exportLocalsConvention: 'camelCase',
            localIdentName: '[local]_[hash:base64:5]',
          },
        },
      }],
    }],
  },
};

module.exports = merge(sharedConfig, config);
