const path = require('path');

module.exports = {
    entry: './app.js' ,
    context: path.resolve(__dirname, '../src'),
    output: {
        filename: 'bundle-[name].js',
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
                'style-loader',
                'css-loader', 
                'sass-loader'
            ]
          } 
        ]
    }  
}
