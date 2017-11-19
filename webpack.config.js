
const fs = require('fs-extra');
const path = require('path');
const _ = require('underscore');

const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var entry = {};
var srcDirs = [];

var apps = fs.readdirSync(path.resolve(__dirname, 'apps'));
for (var i = 0; i < apps.length; ++i) {
  if (fs.existsSync(path.resolve(__dirname, 'apps', apps[i], 'src'))) {
    srcDirs.push(path.resolve(__dirname, 'apps', apps[i], 'src'));
  }
  if (fs.existsSync(path.resolve(__dirname, 'apps', apps[i], 'webpack.js'))) {
    entry = _.extend(entry, require(`./apps/${apps[i]}/webpack`).entry);
  }
}

if (fs.existsSync(path.resolve(__dirname, 'site', 'src'))) {
  srcDirs.push(path.resolve(__dirname, 'site', 'src'));
}
if (fs.existsSync(path.resolve(__dirname, 'site', 'webpack.js'))) {
  entry = _.extend(entry, require(`./site/webpack`).entry);
}

module.exports = {
  plugins: [
    new UglifyJsWebpackPlugin()
  ],
  entry: entry,
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, '.static')
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: srcDirs,
        loader: 'babel-loader'
      }
    ]
  }
};
