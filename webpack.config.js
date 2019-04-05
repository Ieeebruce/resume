const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader",]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        limit: 80, 
                        name: 'image/[name].[ext]',
                        outputPath:'./',
                    },
                  },
                ],
              },
              {
                test: /\.(pdf)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        name: '/[name].[ext]',
                        outputPath:'./',
                    },
                  },
                ],
              },
        ]
    },
};