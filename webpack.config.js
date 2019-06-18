const HtmlWebpackPlugin=require('html-webpack-plugin');
const CleanWebpackPlugin=require('clean-webpack-plugin');
const ExtractTextplugin=require('extract-text-webpack-plugin');
const PurifyCssWebpack=require('purifycss-webpack');
const glob=require('glob');
const path = require('path');
module.exports={
    entry: {
        app:'./src/index.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/[name]-[hash:7].js'
    },

    devServer:{
        contentBase: path.resolve(__dirname, './'),
        host:"127.0.0.1",
        port:"8060",
        open:true
    },

    plugins: [
        new ExtractTextplugin('css/style.css'),
        new CleanWebpackPlugin(),
        new PurifyCssWebpack({
            paths:glob.sync(path.join(__dirname,'src/*.html'))//路径
        }),
        new HtmlWebpackPlugin({
            title:'stophhc',
            //filename:'app.html',
            template:'./src/index.html',
            chunks:['app']
        })
    ],

    module: {
        rules: [
            {
                test:/\.css$/,
                use:ExtractTextplugin.extract({
                    fallback:'style-loader',
                    use:['css-loader','postcss-loader'],
                    publicPath:'../'//css背景图路径
                })
            },

            {
                test:/\.(png|jpg|gif)$/,
                use:[{
                    loader: "url-loader",
                    options: {
                        limit:5000,
                        outputPath:'images/'
                    }
                }]
            },
            {
                test: /\.(htm|html)$/i,
                loader:['html-withimg-loader','html-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },

        ]
    }
};