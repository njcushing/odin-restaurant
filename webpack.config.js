const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: "asset/resource",
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin({ title: "Development" })],
    devtool: "inline-source-map",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
};