const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const package = require('../package');

module.exports = {
    entry: './app.js' ,
    context: path.resolve(__dirname, '../src'),
    output: {
        filename: 'bundle-main.js',
        path: path.resolve(__dirname, '../public')
    },
    mode: 'development',

    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
    },

    plugins: [new HtmlWebpackPlugin({
        template: './index.html',
        title: package.name
    })],

    optimization: {
        splitChunks: {
          chunks: 'all'
        },
    },
       
}
