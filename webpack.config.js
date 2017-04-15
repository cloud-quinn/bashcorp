module.exports = {
    context: __dirname + "/src",
    entry: "./server",
    output: {
        path: __dirname + "/dist",
        filename: "app.js"
    },
    devtool: "#source-map",
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                   presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }
        ]
    }
}