var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: __dirname + '/../githubpage/me',
    filename: "index.js"
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        include: __dirname + '/src/css',
        loaders: ['style', 'css', 'postcss', 'sass']
      },
      {
        test: /\.jsx?$/,
        include: __dirname + '/src/js',
        loader: 'babel'
      },
      {
        test: /\.json$/,
        include: __dirname + '/src',
        loader: 'json'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  postcss: [
    autoprefixer
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Starter',
      inject: true,
      hash: true,
      showErrors: true,
      template: 'src/index.html'
    })
  ],
  devServer: {
    inline: true,
    historyApiFallback: true,
    port: 4170,
    stats: {
      colors: true
    }
  },
  resolve: {
    root: __dirname + '/src/js',
    extensions: ['', '.json', '.js', '.jsx']
  }
};
