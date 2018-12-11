
const config = require("./webpack.config.js");
const UglifyWebpackPlugin = require("uglifyjs-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

config.mode = "production";

config.plugins.push(new UglifyWebpackPlugin({
  sourceMap: true
}));

config.plugins.push(new CompressionPlugin({
  filename: "[path].gz[query]",
  algorithm: "gzip",
  test: /\.js$|\.css$|\.html$/,
  threshold: 10240,
  minRatio: 0
}));

module.exports = config;
