const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const lang = require("./languages/bg.json");

module.exports = {
  entry: "./src/scripts/main.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  module: {
    rules: [{
      test: /\.(png|jpe?g|gif|svg|webp)$/i,
      type: "asset/resource"
    }, {
      test: /\.hbs$/i,
      use: [{
        loader: "handlebars-loader",
        options: {
          inlineRequires: "@images"
        }
      }]
    }, {
      test: /\.tsx?$/i,
      use: "ts-loader"
    }]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      "@scripts": path.resolve(__dirname, "src/scripts/"),
      "@styles": path.resolve(__dirname, "src/styles/"),
      "@images": path.resolve(__dirname, "src/images/"),
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.hbs",
      templateParameters: lang
    })
  ]
};