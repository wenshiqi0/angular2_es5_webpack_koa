var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    entry: "./app/main.js"
  },
  output: {
    path: "lib",
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['','.js'],
    modulesDirectories: ['node_modules']
  }
}
