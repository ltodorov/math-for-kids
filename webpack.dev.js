const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist")
    },
    open: true
  },
  module: {
    rules: [{
      test: /\.s[ac]ss$/i,
      exclude: /node_modules/,
      use: [
        "style-loader", {
          loader: "css-loader",
          options: {
            sourceMap: true
          }
        }, {
          loader: "postcss-loader",
          options: {
            sourceMap: true,
            postcssOptions: {
              plugins: ["postcss-preset-env"]
            }
          }
        }, {
          loader: "sass-loader",
          options: {
            sourceMap: true
          }
        }
      ]
    }]
  }
});