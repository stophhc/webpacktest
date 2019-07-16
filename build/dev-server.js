const HtmlWebpackPlugin=require('html-webpack-plugin');//创建html页面
const CleanWebpackPlugin=require('clean-webpack-plugin');//删除
const MiniCssExtractPlugin =require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';
const PurifyCssWebpack=require('purifycss-webpack');
const glob=require('glob');
const path = require('path');
//const webpack=require('webpack');

const { VueLoaderPlugin } = require('vue-loader');
function resolve (dir) {
    return path.join(__dirname, '..', dir)
}
module.exports={
    entry: {//页面入口文件
        app:'./src/main.js'
    },
    output: {
        path: path.join(__dirname, './dist'),//,出口文件夹位置
        filename: 'js/[name]-[hash:7].js'//出口js文件
       //filename: 'js/[name].js',//出口js文件

    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': resolve('src'),
        }
    },

    devServer:{
        contentBase: path.resolve(__dirname, ''),//设置服务器访问的基本目录
        host:"127.0.0.1", //服务器ip地址
        port:"8060",//设置端口
        //inline:true,
       // historyApiFallback : true,//让所有404的页面定位到index.html
        //hotOnly:true,
        open:true//自动打开浏览器
    },
    plugins: [
        // new webpack.NamedModulesPlugin(), //用于启动HMR时可以显示模块的相对路径
        //new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name]-[hash:7].css',
            chunkFilename: '[id].css',
        }),
        //new ExtractTextplugin('src/style/style.css'),
        new CleanWebpackPlugin(),//删除dist文件,2.0不需要传递参数['dist']
        new PurifyCssWebpack({
            paths:glob.sync(path.join(__dirname,'./*.html'))//路径
        }),
        new HtmlWebpackPlugin({
            title:'stophhc',
            filename:'index.html',//生成文件地址
            template:'./index.html',//模板地址
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
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                     'css-loader',

                 ],

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
            },{
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: ['vue-loader']
            },

        ]
    }
};