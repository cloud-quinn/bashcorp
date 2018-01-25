const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');
const Uglify = require("uglifyjs-webpack-plugin");

module.exports = merge(common, {
    devtool: 'none',
      output: {
        publicPath: 'https://bashcorp.azureedge.net/website/',
        path: path.resolve(path.join(__dirname, 'dist'))
      },
       plugins: [
        new Uglify({
            sourceMap: false,
            uglifyOptions: {
                output: {
                    beautify: false
                },
                ecma: 8
            },
        }),
    ]
});