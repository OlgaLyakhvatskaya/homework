const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const package = require('../package');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const args = process.argv;
const isFileCss = args.includes('--styles');

const plugins = [
  new HtmlWebpackPlugin ({
    template: './index.html',
    title: package.name,
    varsion: package.version
  })
]
if (isFileCss) {
  plugins.push(new MiniCssExtractPlugin({ filename: 'style.css' }));
}

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
          },
          {
            test: /\.s?css$/,
            use: [ 
              isFileCss ? MiniCssExtractPlugin : 'style-loader',
              'css-loader',
              'sass-loader'
            ]
          } 
        ]
    },
    plugins,
    optimization: {
        splitChunks: {
          chunks: 'all'
        },
    },
       
}
