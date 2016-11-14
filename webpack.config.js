var path = require('path');
var glob = require('glob');

module.exports = {
    entry: glob.sync("./js/*.js"),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "bundle.js",
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};