const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (_, argv) => ({
    entry: './main.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test:/\.m?js$/,
                exclude: /node_modules/,
                type: 'javascript/auto',
                resolve: {
                    fullySpecified: false
                },
            },
            {
                test:/\.(ts|tsx|js|mjs|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']

            },
            {
                test:/\.(css|s[ac]ss)$/i,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    "css-loader", 
                    "sass-loader"
                ]
            },
            {
                test:/\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|mp3|wav|mp4|webm)$/,
                exclude: /node_modules/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[name][ext]'
                }
            },
            {
                test:/\.html$/,
                exclude: /node_modules/,
                use: ['html-loader'],
            },
            {
                test:/\.(json)$/,
                exclude: /node_modules/,
                type: 'asset/resource',
                generator: {
                    filename: './[name][ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './index.html',
            filename: './index.html',
            scriptLoading: 'module'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new CopyPlugin ({
            patterns: [
                { from: "./src/images/screenshots", to: "assets"},
                { from: "./sw.js", to: "./"},

            ],
        }),
    ]
});