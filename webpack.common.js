var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const jsFolder = './src/static-assets/js/';

module.exports = {
    entry: {
        polyfills: `${jsFolder}/polyfills.ts`,
        vendor: `${jsFolder}/vendor.ts`,
        main: `${jsFolder}/main.ts`
    },
    output: {
        path: jsFolder,
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['main', 'vendor', 'polyfills']
        }),
        new BrowserSyncPlugin({
            server: ['./src/pages', './src']
        }),
        new ExtractTextPlugin('../css/[name].css') // path relative to entry js file
    ],
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    
    devtool: 'source-map', // enable sourcemaps on dev
    
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader']
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    'style', // The backup style loader
                    'css!sass!'
                )
            }
        ]
    },
    sassLoader: {
        includePaths: [ './src/static-assets/css', './node_modules' ]
    }
    
}
