const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');
const ReplaceInFileWebpackPlugin = require('replace-in-file-webpack-plugin');

module.exports = merge(common, {
    devtool: 'none',
    output: {
        publicPath: 'https://bashcorp.azureedge.net/website/',
        path: path.resolve(path.join(__dirname, 'dist'))
    },
    plugins: [
        new ReplaceInFileWebpackPlugin([{
                dir: 'dist',
                test: /\.(html?|css)$/,
                rules: [{
                    search: /http\:\/\/localhost\:3001/gi,
                    replace: ''
                }]
            }]),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
});