const path = require("path");
const postcss = require("postcss");
const postcssPresetEnv = require("postcss-preset-env");
const sass = require("sass");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const bg = require("./src/languages/bg.json");
const en = require("./src/languages/en.json");

const sassCss = sass.compile(path.resolve(__dirname, "src", "styles", "index.scss"), {
    style: "compressed",
}).css;
const inlineCss = postcss([postcssPresetEnv()]).process(sassCss, {
    from: path.resolve(__dirname, "src", "styles", "index.scss"),
}).css;

const getTemplateParameters = (language) => (compilation) => {
    const backgroundAsset = compilation.getAssets().find(({ info }) =>
        info.sourceFilename?.endsWith("src/images/bg.webp"));
    const backgroundImage = backgroundAsset ? `../${backgroundAsset.name}` : "";

    return {
        ...language,
        backgroundImage,
        inlineCss: inlineCss.replace("__BACKGROUND_URL__", backgroundImage),
    };
};

const htmlWebpackPluginCommonOptions = (isProd) => ({
    template: path.resolve(__dirname, "src", "index.hbs"),
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
            test: /\.hbs$/i,
            exclude: /node_modules/,
            use: [{
                loader: "handlebars-loader",
                options: {
                    inlineRequires: "@images",
                },
            }],
        }, {
            test: /\.tsx?$/i,
            exclude: /node_modules/,
            use: [{
                loader: "esbuild-loader",
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
            templateParameters: getTemplateParameters(bg),
        }),
        new HtmlWebpackPlugin({
            ...htmlWebpackPluginCommonOptions(isProd),
            filename: "en/index.html",
            templateParameters: getTemplateParameters(en),
        }),
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