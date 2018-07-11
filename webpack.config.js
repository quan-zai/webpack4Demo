const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html'
})

const MCEPlugin = new MiniCssExtractPlugin( {
    filename: "[name].css",
    chunkFileNmae: "[id].css"
}) 

const hmrPlugin =  new webpack.HotModuleReplacementPlugin();

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].boundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            // {
            //     loader: "html-loader",
            //     options: { minimize: true }
            // },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // {
                    //     loader:  "style-loader"
                    // },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: "[name]_[local]_[hash:base64]",
                            sourceMap: true,
                            minimize: true
                        }
                        
                    }
                ]
            }
        ]
    },
    plugins: [
        htmlPlugin,
        MCEPlugin,
        hmrPlugin
    ],
    devServer: {
        contentBase: './dist',
        hot: true,
    }
};