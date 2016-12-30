var path = require('path'),
    webpack = require('webpack');

module.exports = [{
    entry: {
        "react-infinite-scroll-lite": ['./index.js'],
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: "babel",
                query: {compact: false}
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "[name].js",
        libraryTarget: 'umd'
    },
    externals: 'react',
    plugins: [
        new webpack.BannerPlugin('author: yedaodao'),
        // new webpack.optimize.UglifyJsPlugin()
    ]
}, {
    entry: {
        "demo": ['./demo/index.js'],
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: "babel",
                query: {compact: false}
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, './demo'),
        filename: "[name].js",
        libraryTarget: 'umd'
    }
}];