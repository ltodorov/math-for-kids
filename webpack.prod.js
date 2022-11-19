const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = () => merge(common({
  isProd: true,
}), {
  mode: "production",
  module: {
    rules: [{
      test: /\.s[ac]ss$/i,
      exclude: /node_modules/,
      use: [{
        loader: MiniCssExtractPlugin.loader,
      }, {
        loader: "css-loader",
        options: {
          sourceMap: true,
        },
      }, {
        loader: "postcss-loader",
        options: {
          sourceMap: true,
        },
      }, {
        loader: "sass-loader",
        options: {
          sourceMap: true,
        },
      }],
    }],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
});