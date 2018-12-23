/* global __dirname */
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {

  context: path.resolve(__dirname, "../src"),

  entry: {
    index: "../index.js",
  },

  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "js/[name].js"
  },

  resolve: {
    extensions: ["*", ".mjs", ".js"]
  },

  module: {
    rules: [
      {
        test: /\.mjs$/,
        type: "javascript/auto",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader"
        }]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: true,
              localIdentName: "[local]"
            }
          },
        ]
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/app.css"
    }),
  ],

  devtool: "source-map"

};
