/* global __dirname */
const path = require("path");

module.exports = {

  context: path.resolve(__dirname, "../src"),

  entry: {
    index: "../index.js"
  },

  externals: {
    mithril: "m"
  },

  output: {
    path: path.resolve(__dirname, "../dist/"),
    filename: "js/[name].js"
  },

  module: {
    rules: [
      {
        test: /\.js$/, // Check for all js files
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader",
          options: {  
            presets: [ 
              [ "es2015", { modules: false } ] 
            ]         
          }
        }]
      }
    ]
  },

  plugins: [],

  devtool: "source-map"

};
