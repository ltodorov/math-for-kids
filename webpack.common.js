const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const bg = require("./src/languages/bg.json");
const en = require("./src/languages/en.json");

const htmlWebpackPluginCommonOptions = {
  template: path.resolve(__dirname, "src", "index.hbs")
};

module.exports = {
  entry: "./src/scripts/main.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
    clean: true
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
    new HtmlWebpackPlugin({
      ...htmlWebpackPluginCommonOptions,
      filename: "index.html",
      templateParameters: bg,
    }),
    new HtmlWebpackPlugin({
      ...htmlWebpackPluginCommonOptions,
      filename: "index-en.html",
      templateParameters: en
    })
  ]
};