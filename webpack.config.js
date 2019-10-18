const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin'); 
const MiniCssExtraxtPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry : './src/index.js',
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    resolve:{
        extensions: ['.js', '.jsx']
    },
    module:{
        rules:[
            {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
                }
            },
            {
                test:/\.html$/,
                use: {
                    loader: 'html-loader'
                    }
            },
            {
                test: /\.(s*)css$/,
                exclude: /node_modules/,
                use: [{
                    loader: MiniCssExtraxtPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
        ]
    },
    plugins:[
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtraxtPlugin({
            filename: 'assets/[name].css'
        }),
    ]

};