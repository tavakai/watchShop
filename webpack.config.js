const path = require('path');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

const config = {
  entry: {
    app: ['./src/components/index.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'public/js'),
    globalObject: 'this',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new NodePolyfillPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.wasm', '.mjs', '*'],
  },
  mode: 'development',
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,

        vendor: {
          chunks: 'all',
          name: 'vendor',
          test: /node_modules/,
        },
      },
    },
  },
};

module.exports = config;
