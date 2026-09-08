const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");

module.exports = ({ locale = "bg" }) => merge(common({
    isProd: false,
}), {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist"),
        },
        open: [`/${locale}`],
    },
});