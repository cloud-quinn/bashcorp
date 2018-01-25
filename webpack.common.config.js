const path = require('path');
const LessHintPlugin = require('lesshint-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractLess = new ExtractTextPlugin({
  filename: '[name].css?[contenthash]'
});
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: './src/app/app.jsx',
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
      { test: /\.(woff|woff2|ttf|svg|eot)$/, loader: 'url-loader', options: { name: '[name].[ext]?[hash]', limit: 1024  } },
      { test: /server\.js/, loader: 'file-loader', options: { name: '[name].[ext]'  } },
      { test: /\.less$/, use: extractLess.extract({ use: [
        { loader: 'css-loader', options: { sourceMap: true, minimize: true } },
        { loader: 'less-loader', options: { sourceMap: true } }
      ] })}
    ]
  },
  plugins: [
    extractLess,
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
