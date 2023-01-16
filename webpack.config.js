const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "bundle"),
        filename: "bundle.js",
    },

    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: { loader: "babel-loader" }
            },

            {
                test: /\.(css|scss)$/,
                use: [ "style-loader", "css-loader", "sass-loader" ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i, 
                loader: 'file-loader',
                options: {
                  name: '/public/files/images/[name].[ext]'
                }
            }
        ]
    },

    plugins: [ new HtmlWebpackPlugin({ template: "./src/index.html" }) ]
}