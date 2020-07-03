// webpack 基于 node 语法都应该是 node 的语法 不能用 export default 和 import
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin'); // 导入在内存中生成index页面的插件
// 创建一个插件实例
const htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname, './src/index.html'), // 源文件
    __filename:'index.html' // 生成的内存中首页的名称
})
// webpack 只能打包处理 .js 文件 像 .png .vue 无法主动处理 所以要配置第三方loader
module.exports = {
    mode: "development", // development 开发者模式 production 生产模式
    plugins: [
        htmlPlugin
    ],
    module: { // 所有第三方 模块的配置规则
        rules: [ // 第三方匹配规则
            { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ }, // 千万别忘记添加 exclude 排除项
            // { test: /\.css$/, use: ['style-loader', 'css-loader?modules'] }, // cssloader配置 
            { test: /\.css$/, use: [{loader: "style-loader"}, { loader: "css-loader"}] },
            { test: /\.scss$/, use: [{loader: "style-loader"}, { loader: "css-loader",
                options: {
                    modules: {
                        localIdentName: "[path][name]-[local]-[hash:5]"
                    }
                }
            }, { loader: "sass-loader"}] },
            // cssloader启用模块化 防止样式冲突 通过?追加参数 modules 普通样式表启用模块化
            // 启用模块化后的使用方式 import cssObj from 'css目录' 使用时 className={ cssObj.样式名 }
            { test: /\.ttf|woff|woff2|eot|svg$/, use: 'url-loader' }, // 字体loader
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'], // 省略写的后缀名
        alias: {
            '@': path.join(__dirname,'./src')
        } // 配置别名 在这里@符号这样就表示在src的路径上
    }
}