const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtraxtPlugin = require('mini-css-extract-plugin');

const nodeEnv = process.env.NODE_ENV === 'development';
console.log(nodeEnv, 'DSDSDSDS');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[id].[chunkhash].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.(s*)css$/,
        exclude: /node_modules/,
        use: [{
          loader: MiniCssExtraxtPlugin.loader,
        },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: nodeEnv ? 'assets/[name].[ext]' : 'assets/[hash].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
      filename: './index.html',
    }),
    new MiniCssExtraxtPlugin({
      filename: nodeEnv ? 'assets/[name].css' : 'assets/[name].css',
    }),
  ],
  optimization: {
    runtimeChunk: 'multiple',
  },

};
