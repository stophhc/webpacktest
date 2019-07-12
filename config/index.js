const HtmlWebpackPlugin=require('html-webpack-plugin');//创建html页面
const CleanWebpackPlugin=require('clean-webpack-plugin');//删除
const ExtractTextplugin=require('extract-text-webpack-plugin');
const PurifyCssWebpack=require('purifycss-webpack');
const glob=require('glob');
const path = require('path');
const webpack=require('webpack');