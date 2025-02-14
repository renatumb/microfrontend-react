const HtmlWebPackPlugin = require("html-webpack-plugin");
const {ModuleFederationPlugin} = require("webpack").container;
const path = require("path");

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./public/index.html",
    filename: "./index.html"
});
console.warn("inside webpack-config - shell")
console.warn("NODE_ENV:" + process.env.NODE_ENV);

module.exports = {
    mode: process.env.NODE_ENV || 'development',
    devServer: {
        static: path.join(__dirname, "dist"),
        port: 3000,
        historyApiFallback: {
            index: '/public/index.html'
        },
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
            name: "Host",
            filename: "remoteEntry.js",
            remotes: {
                MicroFrontend: "MicroFrontend@http://localhost:4001/remoteEntry.js",
                OtherName: "AnyName@http://localhost:4002/remoteEntry.js"
            }
        })
    ]
};
// Checkout: "Checkout@http://local
// host:3000/remoteEntry.js"