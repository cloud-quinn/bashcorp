const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ReplaceInFileWebpackPlugin = require('replace-in-file-webpack-plugin');

module.exports = merge(common, {
    devtool: 'source-map',
    watchOptions: {
      poll: 1000,
      ignored: /(node_modules|git)/
    },
    plugins: [
      new CopyWebpackPlugin([
        {from: 'src/assets', to: 'img'}
      ]),
      new ReplaceInFileWebpackPlugin([{
                dir: 'dist',
                test: /\.(jsx?|html?|less|css)$/,
                rules: [{
                    search: /BashCorpImgRoot/gi,
                    replace: 'img'
                }]
            }])
    ]
});