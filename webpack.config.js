const path = require('path');

const publishRoot = 'dist/public'

const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractLess = new ExtractTextPlugin({
  filename: '[name].css?[contenthash]'
})

module.exports = {
  entry: './src/app/app.js',
  output: {
    path: path.resolve(publishRoot),
    filename: 'bashcorp.js'
  },
  module: {
    rules: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /static\/[^\/]{1,}\.(html?)$/, loader: 'file-loader', options: { name: 'static/[name].[ext]?[hash]'  } },
      { test: /src\/[^\/]{1,}\.(html?)$/, loader: 'file-loader', options: { name: '[name].[ext]?[hash]'  } },
      { test: /\.(png|jpg|gif|ico)$/, loader: 'file-loader', options: { name: 'img/[name].[ext]?[hash]'  } },
      { test: /server\.js/, loader: 'file-loader', options: { name: '../[name].[ext]'  } },
      { test: /\.less$/, use: extractLess.extract({ use: [
        { loader: 'css-loader', options: { sourceMap: true } },
        { loader: 'less-loader', options: { sourceMap: true } }
      ] })}
    ]
  },
  plugins: [
    extractLess
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
