const path = require('path');
const clean = require('clean-webpack-plugin');
const html = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  plugins: [
    new clean(['dist']),
    new html({
      filename: path.resolve(__dirname, 'dist/index.html'),
      template: 'index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/env']
          }
        }
      }
    ]
  }
};
