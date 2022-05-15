const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const bg = require("./src/languages/bg.json");
const en = require("./src/languages/en.json");

const htmlWebpackPluginCommonOptions = (isProd) => ({
    template: path.resolve(__dirname, "src", "index.ejs"),
    favicon: path.resolve(__dirname, "src", "favicon.ico"),
    publicPath: "..",
    hash: true,
    minify: isProd ? {
        collapseWhitespace: true,
        keepClosingSlash: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
        minifyJS: true,
    } : false,
});

module.exports = ({ isProd }) => ({
    entry: {
        bundle: "./src/scripts/index.ts",
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "",
        clean: true,
    },
    module: {
        rules: [{
            test: /\.(png|jpe?g|gif|svg|webp)$/i,
            exclude: /node_modules/,
            type: "asset/resource",
        }, {
            test: /\.tsx?$/i,
            exclude: /node_modules/,
            use: [{
                loader: "esbuild-loader",
                options: {
                    loader: "ts",
                },
            }],
        }],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            "@scripts": path.resolve(__dirname, "src/scripts/"),
            "@styles": path.resolve(__dirname, "src/styles/"),
            "@images": path.resolve(__dirname, "src/images/"),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            ...htmlWebpackPluginCommonOptions(isProd),
            filename: "bg/index.html",
            templateParameters: bg,
        }),
        new HtmlWebpackPlugin({
            ...htmlWebpackPluginCommonOptions(isProd),
            filename: "en/index.html",
            templateParameters: en,
        }),
        new ForkTsCheckerWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "**/*",
                    context: path.resolve(__dirname, "src", "public"),
                },
            ],
        }),
    ],
});