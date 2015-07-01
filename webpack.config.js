var autoprefixer = require('autoprefixer-core');
var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './views/index.jsx'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:3000/assets/'

  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: [
          'style-loader',
          'css-loader?localIdentName=[path][name]---[local]---[hash:base64:5]',
          'sass?sourceMap',
          'postcss-loader'
        ].join('!')
      },

      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'views')
      }    
    ]
  },

  // Provide the Local Scope plugin to postcss-loader:
  postcss: [
    autoprefixer({browsers: ['last 2 version']}),
    require('postcss-local-scope'),
  ],  

  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
}
