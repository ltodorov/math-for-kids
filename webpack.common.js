const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const bg = require("./src/languages/bg.json");
const en = require("./src/languages/en.json");

const htmlWebpackPluginCommonOptions = {
  template: path.resolve(__dirname, "src", "index.hbs"),
  favicon: path.resolve(__dirname, "src", "favicon.ico"),
  publicPath: "..",
  hash: true
};

module.exports = {
  entry: {
    bundle: "./src/scripts/index.ts",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
    clean: true
  },
  module: {
    rules: [{
      test: /\.(png|jpe?g|gif|svg|webp)$/i,
      exclude: /node_modules/,
      type: "asset/resource"
    }, {
      test: /\.hbs$/i,
      exclude: /node_modules/,
      use: [{
        loader: "handlebars-loader",
        options: {
          inlineRequires: "@images"
        }
      }]
    }, {
      test: /\.tsx?$/i,
      exclude: /node_modules/,
      use: [{
        loader: "esbuild-loader",
        options: {
          loader: "ts"
        }
      }]
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
      filename: "bg/index.html",
      templateParameters: bg,
    }),
    new HtmlWebpackPlugin({
      ...htmlWebpackPluginCommonOptions,
      filename: "en/index.html",
      templateParameters: en
    }),
    new ForkTsCheckerWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        "src/index.php"
      ]
    })
  ]
};