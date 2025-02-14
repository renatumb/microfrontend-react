const HtmlWebPackPlugin = require("html-webpack-plugin");
const {ModuleFederationPlugin} = require("webpack").container;
const path = require("path");

console.warn("inside webpack-config - micro-app1")
console.warn("NODE_ENV:" + process.env.NODE_ENV);



module.exports = {
    mode: process.env.NODE_ENV || 'development',
    devServer: {
        static: path.join(__dirname, "dist"),
        port: 4001,
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
        
        new ModuleFederationPlugin({
            name: "MicroFrontend",
            filename: "remoteEntry.js",
            exposes: {
                "./ButtonOne": "./src/Button1",
                "./ButtonZZ": "./src/Button2",
            },
            shared: {react: {singleton: true, eager: true}, "react-dom": {singleton: true, eager: true}},
        })
    ]
};