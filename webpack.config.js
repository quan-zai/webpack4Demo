const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html'
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
                    {
                        loader:  "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: "[name][local]_[hash:base64]",
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
        hmrPlugin
    ],
    devServer: {
        contentBase: './dist',
        hot: true,
    }
};