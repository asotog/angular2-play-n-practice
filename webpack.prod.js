var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');

const jsFolderDist = './dist/static-assets/js/';

module.exports = webpackMerge(commonConfig, {
    output: {
        path: jsFolderDist,
        filename: '[name].[hash].js',
        chunkFilename: '[id].[hash].chunk.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            comments: false,
            mangle: {
                keep_fnames: true
            }
        })
    ]
});
