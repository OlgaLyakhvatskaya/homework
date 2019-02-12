const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const package = require('../package');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const args = process.argv;
const isFileCss = args.includes('--styles');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

const images = ['jpeg', 'png', 'svg', 'gif', 'jpg'];

const plugins = [
  new webpack.ProvidePlugin({
    React: 'react',
    Component: ['react', 'Component']
  }),
  new CopyWebpackPlugin(
    images.map(el=>({
      from: `**/*/*${el}`,
      to: 'images/[name].[ext]'
    }))
  ),
  new HtmlWebpackPlugin ({
    template: './index.html',
    title: package.name,
    varsion: package.version
  }),
  new webpack.HotModuleReplacementPlugin(),
]
if (isFileCss) {
  plugins.push(new MiniCssExtractPlugin({ 
    filename: `style.css`,
  }));
}

module.exports = {
    entry: './app.js' ,
    context: path.resolve(__dirname, '../src'),
    output: {
      filename: 'bundle-main.js',
      path: path.resolve(__dirname, '../public'),
      publicPath: '/',
    },
    mode: 'development',
    resolve: {
      alias: {
        services: path.resolve(__dirname, '../src/services'),
        components: path.resolve(__dirname, '../src/components'),
        store: path.resolve(__dirname, '../src/store')
      }
    },
    module: {
        rules: [
          // {
          //   enforce: 'pre',
          //   test: /\.js$/,
          //   exclude: /node_modules/,
          //   loader: 'eslint-loader',
          // },           
          {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: [
                  '@babel/plugin-proposal-class-properties',
                  '@babel/plugin-transform-regenerator',
                ]
              }
            }
          },
          {
            test: /\.(png|jpe?g|gif|svg)$/i,              
              loader: 'file-loader',
              options: {
                name: 'images/[name].[ext]'
              }
          },
          {
            test: /\.s?css$/,
            use: [ 
              isFileCss ? MiniCssExtractPlugin.loader : 'style-loader',
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
    devServer: {
      contentBase: path.resolve(__dirname, '../dist'),
      publicPath: '/',
      port: 9000,
      hot: true,
      historyApiFallback: true,
    }    
}
