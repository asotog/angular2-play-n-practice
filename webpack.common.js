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
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['main', 'vendor', 'polyfills']
        }),
        new BrowserSyncPlugin({
            server: ['./src/pages', './src']
        }),
        new ExtractTextPlugin('../css/[name].bundle.css') // path relative to entry js file which is loading the css
    ],
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    
    devtool: 'source-map', // enable sourcemaps on dev
    
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    'style', // The backup style loader
                    'css!sass!'
                )
            },
            { 
              test: /\.(html|css)$/, 
              loader: 'raw-loader'
            }
        ]
    },
    sassLoader: {
        includePaths: [ './src/static-assets/css', './node_modules' ]
    }
    
}
