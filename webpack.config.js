const path = require('path');

module.exports = {
  entry: './src/web.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: false, // Don't clean the dist folder completely
  },
  devServer: {
    static: {
      directory: path.join(__dirname),
    },
    compress: true,
    port: 8080,
    open: true,
    hot: true,
  },
};