const HtmlWebpackPlugin=require('html-webpack-plugin');//创建html页面
const CleanWebpackPlugin=require('clean-webpack-plugin');//删除
const ExtractTextplugin=require('extract-text-webpack-plugin');
const PurifyCssWebpack=require('purifycss-webpack');
const glob=require('glob');
const path = require('path');
module.exports={
    entry: {//页面入口文件
        app:'./src/main.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),//,出口文件夹位置
        //filename: 'js/[name]-[hash:7].js'//出口js文件
        filename: 'js/[name].[chunkhash:8].js'//出口js文件
    },

    devServer:{
        contentBase: path.resolve(__dirname, './src/'),//设置服务器访问的基本目录
        host:"127.0.0.1", //服务器ip地址
        port:"8060",//设置端口
        inline:true,
        hot:true,
        open:true//自动打开浏览器
    },
    plugins: [
        new ExtractTextplugin('css/[name].[chunkhash:8].css'),
        //new ExtractTextplugin('css/style.css'),
        new CleanWebpackPlugin(),//删除dist文件,2.0不需要传递参数['dist']
        new PurifyCssWebpack({
            paths:glob.sync(path.join(__dirname,'src/*.html'))//路径
        }),
        new HtmlWebpackPlugin({
            title:'stophhc',
            filename:'app.html',//生成文件地址
            template:'./src/index.html',//模板地址
            chunks:['app'],//多页面分别引入的js，和entry:向对应
            //hash:true,//缓存
            minify:{//压缩页面
                collapseWhitespace:true
            },
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
                    options:{//如果图片少于50kb，则转换为base64。否则使用普通路径
                        limit:5000,
                        outputPath:'images/',//图片打包出去的目录
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