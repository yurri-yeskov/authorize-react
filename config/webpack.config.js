const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    module: {
    loaders: [
        {
        loader: "babel-loader",

        // Skip any files outside of your project's `src` directory
        include: [
            path.resolve(__dirname, "./../src"),
        ],

        // Only run `.js` and `.jsx` files through Babel
        test: /\.jsx?$/,

        // Options to configure babel with
        query: {
            plugins: ['transform-runtime'],
            presets: ['es2015', 'es2017', 'react'],
        }
        },
    ]
    },
    output: {
        path: path.resolve(__dirname, './../dist'),
        publicPath: '/publics',
        filename: '[name].bundle.js'
    },
    plugins: [new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './../src/index.html'),
        inject: 'body'
        }
    )],
    resolve: {
        modules: [
            'node_modules'
        ]
    },
    devServer: {
        contentBase: "./dist",
        inline: true,
        hot: true,
        port: 8000
    },
};