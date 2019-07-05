/*
* <ul>
<li>config全局变量
<li>dist编译后的项目代码</li>
<li>src项目代码
<ul> <li> api api封装
<li>components Vue组件
<li>libs js工具类
<li>router 路由
<li>index.js 路由对象
<li>routes.js 路由配置
<li>store Vuex的store
<li>modules vuex模块
<li>types.js type管理
<li>styles css样式
<li>views 页面组件
<li>main.js vue入口文件</ul>

<li>webpack.config Webpack各种环境的配置文件
<li>package.json
</ul>*/


const HtmlWebpackPlugin=require('html-webpack-plugin');//创建html页面
const CleanWebpackPlugin=require('clean-webpack-plugin');//删除
const ExtractTextplugin=require('extract-text-webpack-plugin');
const PurifyCssWebpack=require('purifycss-webpack');
const glob=require('glob');
const path = require('path');
const webpack=require('webpack');
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
        contentBase: path.resolve(__dirname, ''),//设置服务器访问的基本目录
        host:"127.0.0.1", //服务器ip地址
        port:"8060",//设置端口
        inline:true,
        //historyApiFallback : true,//让所有404的页面定位到index.html
        hotOnly:true,
        open:true//自动打开浏览器
    },
    plugins: [
       // new webpack.NamedModulesPlugin(), //用于启动HMR时可以显示模块的相对路径
        //new webpack.HotModuleReplacementPlugin(),
        new ExtractTextplugin('./src/css/[name].[chunkhash:8].css'),
        //new ExtractTextplugin('css/style.css'),
        new CleanWebpackPlugin(),//删除dist文件,2.0不需要传递参数['dist']
        new PurifyCssWebpack({
            paths:glob.sync(path.join(__dirname,'./*.html'))//路径
        }),
        new HtmlWebpackPlugin({
            title:'stophhc',
            filename:'app.html',//生成文件地址
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