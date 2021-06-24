const path = require('path');
// "html-webpack-plugin", "clean-webpack-plugin" "inline-source-map" "all"
module.exports = {
    mode: 'development',
    entry: [
        './modules/header/header.js',
        './modules/body/body.js',
        './modules/footer/footer.js'
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    devServer: {
        contentBase: './public',
        open: true,
        port: 8564
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            { 
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                          bypassOnDebug: true, // webpack@1.x
                          disable: true, // webpack@2.x and newer
                        }
                    }
                ]
            }
        ]
    }
};
