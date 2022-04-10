module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.js|.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg|otf)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          publicPath: 'http://localhost:8080/',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
  },
};
