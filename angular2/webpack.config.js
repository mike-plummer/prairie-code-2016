var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var Dashboard = require('webpack-dashboard');
var DashboardPlugin = require('webpack-dashboard/plugin');
var dashboard = new Dashboard();

module.exports = {
  entry: {
    vendor: './src/vendor.ts',
    polyfills: './src/polyfills.ts',
    app: './src/app.ts'
  },
  output: {
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },
  devtool: 'source-map',
  resolve: {
    alias: {
      assets: __dirname + "/assets",
      content: __dirname + "/content"
    },
    extensions: ['', '.ts', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts'
      }, {
        test: /\.html$/,
        excludes: ['./src/index.html'],
        loader: 'html'
      }, {
        test: /\.(pug|jade)$/,
        exclude: /node_modules/,
        loader: 'html!pug-html-loader'
      }, {
        test: /\.(scss|sass)$/,
        loaders: ['style', 'css', 'sass']
      }, {
        test: /\.css$/,
        loaders: ['style', 'css']
      }, {
        test: /\.(jpe?g|png)$/i,
        loader: 'file'
      }, {
        test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
        loader: 'url'
      }
    ]
  },
  htmlLoader: {
    minimize: true,
    removeAttributeQuotes: false,
    caseSensitive: true,
    // Teach html-minifier about Angular 2 syntax
    customAttrSurround: [ [/#/, /(?:)/], [/\*/, /(?:)/], [/\[?\(?/, /(?:)/] ],
    customAttrAssign: [ /\)?\]?=/ ],
    attrs: ['img:src', 'link:href']
  },
  plugins: [
    // Optimize IDs so that the resources that are most commonly referenced end up with the shortest Ids (reducing size)
    new webpack.optimize.OccurenceOrderPlugin(true),

    new webpack.optimize.UglifyJsPlugin({
      // Must disable mangle or else Angular is unhappy and no-worky
      mangle: false,
      comments: false,
      compress: {
        warnings: false
      }
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: ['polyfills', 'vendor'].reverse()
    }),

    new HtmlWebpackPlugin({
      title: 'theodolite',
      template: 'src/index.html',
      chunksSortMode: 'dependency'
    }),

    new DashboardPlugin(dashboard.setData)
  ],
  devServer: {
    port: 8000,
    host: 'localhost'
  }
};