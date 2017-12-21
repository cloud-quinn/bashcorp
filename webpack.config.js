const path = require('path');
const LessHintPlugin = require('lesshint-webpack-plugin');

const publishRoot = 'dist/public'

const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractLess = new ExtractTextPlugin({
  filename: '[name].css?[contenthash]'
})

module.exports = {
  entry: './src/app/app.jsx',
  output: {
    path: path.resolve(publishRoot),
    filename: 'bashcorp.js'
  },
  watchOptions: {
    poll: 1000,
    ignored: /(node_modules|git)/
  },
  devtool: 'source-map',
  module: {
    rules: [
      { test: /\.jsx?$/, enforce: 'pre', exclude: /node_modules/, loader: 'eslint-loader', options:{
          configFile: path.resolve(path.join(__dirname, 'build', 'eslint.config')),
          options: {
              outputReport: {
                  filePath: './dist/public/reports/EsLint.html',
                  formatter: require('eslint/lib/formatters/html')
              }
          }
      } },
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /static\/[^\/]{1,}\.(html?)$/, loader: 'file-loader', options: { name: 'static/[name].[ext]?[hash]'  } },
      { test: /src\/[^\/]{1,}\.(html?)$/, loader: 'file-loader', options: { name: '[name].[ext]?[hash]'  } },
      { test: /\.(woff|woff2|ttf|svg|eot)$/, loader: 'file-loader', options: { name: 'font/[name].[ext]?[hash]'  } },
      { test: /\.(png|jpg|gif|ico)$/, loader: 'file-loader', options: { name: 'img/[name].[ext]?[hash]'  } },
      { test: /server\.js/, loader: 'file-loader', options: { name: '../[name].[ext]'  } },
      { test: /\.less$/, use: extractLess.extract({ use: [
        { loader: 'css-loader', options: { sourceMap: true } },
        { loader: 'less-loader', options: { sourceMap: true } }
      ] })}
    ]
  },
  plugins: [
    extractLess,
    new LessHintPlugin({
      reporter: require('./build/lesshintReporter'),
      files: [ './src/**/*.less' ],
      configFile: path.resolve(path.join(__dirname, 'build', 'lesshint.json'))
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
