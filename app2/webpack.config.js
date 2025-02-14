const HtmlWebPackPlugin = require("html-webpack-plugin");
const {ModuleFederationPlugin} = require("webpack").container;
const path = require("path");

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./public/index.html",
    filename: "./index.html"
});
console.warn("inside webpack-config - app2")
console.warn("NODE_ENV:" + process.env.NODE_ENV);

module.exports = {
    mode: process.env.NODE_ENV || 'development',
    devServer: {
        static: path.join(__dirname, "dist"),
        port: 4002,
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }
        ]
    },
    plugins: [
        htmlPlugin,
        new ModuleFederationPlugin({
            name: "AnyName",
            filename: "remoteEntry.js",
            exposes: {
                "./Comp001": "./src/Comp001",
                "./CompZZZ": "./src/Comp001"
            },
            shared: {react: {singleton: true, eager: true}, "react-dom": {singleton: true, eager: true}},
        })
    ]
};