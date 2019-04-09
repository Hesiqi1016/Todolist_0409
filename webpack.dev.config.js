const path = require('path');

module.exports = {
 
    /*入口*/
    entry: path.join(__dirname, 'src/index.js'),
    
    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    resolve:{
        extensions: ['jsx','.js','.json','.less'],
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'src'),
            // test: /\.css$/,
            // use: ['style-loader', 'css-loader'],
        }]
    },
    devServer: {
        // contentBase: path.join(__dirname, './dist')
        port: 8080,
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        host: '0.0.0.0'
    }
};