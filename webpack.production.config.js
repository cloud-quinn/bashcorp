const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ReplaceInFileWebpackPlugin = require('replace-in-file-webpack-plugin');

module.exports = merge(common, {
    devtool: 'none',
     plugins: [
      new CopyWebpackPlugin([
        {from: 'src/assets', to: 'img'}
      ]),
      new ReplaceInFileWebpackPlugin([{
                dir: 'dist',
                test: /\.(jsx?|html?|less|css)$/,
                rules: [{
                    // Put the carousel into its own folder
                    search: /\/BashCorpImgRoot\/carousel\//gi,
                    replace: 'https://bashcorp.azureedge.net/carousel/'
                },
                {
                    // Put everything else into a website assets folder
                    search: /\/BashCorpImgRoot/gi,
                    replace: 'https://bashcorp.azureedge.net/website'
                }]
            }])
    ]
});