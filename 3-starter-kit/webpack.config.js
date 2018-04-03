const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'app-bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
            }
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    }

}