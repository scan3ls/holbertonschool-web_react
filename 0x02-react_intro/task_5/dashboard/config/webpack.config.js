const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack Output',
        }),
        new CleanWebpackPlugin()
    ],
    entry: {
        main: path.resolve(__dirname, '../src/index.js')
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    devServer: {
        inline: false,
        contentBase: '../dist',
        open: true
    },
    module: {
        rules: [
          { 
            test: /\.css$/, 
            use: ["style-loader", "css-loader"] 
          },
        ]
      }
};
