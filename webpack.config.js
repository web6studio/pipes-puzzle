const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  devServer: {
    static: path.resolve(__dirname, 'build'),
    historyApiFallback: true,
    port: 3000,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'source-map-loader',
        enforce: 'pre',
      },
    ],
    rules: [
      {
        test: /\.bundle\.ts$/,
        use: {
          loader: 'bundle-loader',
          options: {
            name: '[name]',
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(svg|gif|png|jpe?g)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(ttf|eot|woff|svg|woff2)$/,
        loader: 'file-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
      favicon: './public/favicon.ico',
    }),
    new CleanWebpackPlugin({
      protectWebpackAssets: false,
      cleanAfterEveryBuildPatterns: ['*.LICENSE.txt'],
    }),
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
};
