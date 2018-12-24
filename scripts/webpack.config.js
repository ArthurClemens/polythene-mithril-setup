/* global process */
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const baseDir = process.cwd();

module.exports = {

  context: path.resolve(baseDir, "./src"),

  entry: {
    index: "../index.js",
  },

  output: {
    path: path.resolve(baseDir, "./dist"),
    filename: "js/[name].js"
  },

  resolve: {
    extensions: [".mjs", ".js"]
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
