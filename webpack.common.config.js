const path = require('path');
const LessHintPlugin = require('lesshint-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractText = new ExtractTextPlugin('main.css');
const extractTextIE = new ExtractTextPlugin('ie.css');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', path.resolve(__dirname, './src/app/app.jsx')],
  output: {
    filename: 'bashcorp.js'
  },
  module: {
    rules: [
      { test: /\.jsx?$/, enforce: 'pre', exclude: /node_modules/, loader: 'eslint-loader', options:{
          configFile: path.resolve(path.join(__dirname, 'build', 'eslint.config'))
      } },
      { test: /\.(jpg|jpeg|gif|png)/, loader: 'url-loader', exclude: /node_modules/, options: { name: '[name].[ext]', limit: 1024 } },
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /src\/[^\/]{1,}\.(html?|xml)$/, loader: 'file-loader', options: { name: '[name].[ext]?[hash]'  } },
      { test: /\.(woff|woff2|ttf|svg|eot)$/, loader: 'url-loader', options: { name: '[name].[ext]?[hash]', limit: 1024, publicPath: ''  } },
      { test: /(server\.js|manifest\.json)/, loader: 'file-loader', options: { name: '[name].[ext]'  } },
      { test: /\.less$/, use: [
        { loader: "style-loader" },
        { loader: 'css-loader', options: { minimize: true } },
        { loader: 'less-loader', options: { } }
      ]},
      { test: /\.css$/, use: extractTextIE.extract({ use: [
        { loader: 'css-loader', options: { sourceMap: true, minimize: true }}
      ] })}
    ]
  },
  plugins: [
    extractText,
    new LessHintPlugin({
      files: [ './src/**/*.less' ],
      configFile: path.resolve(path.join(__dirname, 'build', 'lesshint.json'))
    }),
    new OptimizeCssAssetsPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
