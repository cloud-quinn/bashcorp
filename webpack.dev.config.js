const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');

module.exports = merge(common, {
    devtool: 'source-map',
    output: {
      publicPath: 'http://localhost:3001/'
    },
    devServer: {
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      port: 3001,
      host: '0.0.0.0',
      contentBase: path.join(__dirname, 'dist'),
      watchContentBase: true,
      historyApiFallback: {
        index: '/'
      }
    },
    watchOptions: {
      poll: 2000,
      ignored: /(node_modules|git)/
    }
});