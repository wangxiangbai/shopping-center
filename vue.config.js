module.exports = {
    // 选项...
    devServer: {
        open: true, //是否自动弹出浏览器页面
        host: "localhost",
        port: "8080", //vue端口号
        https: false,
        hotOnly: false,  //热更新
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:3000', //API服务器的地址
                changeOrigin: true,//是否跨域
                pathRewrite: {//路径重写
                    '^/api': ''//vue文件里填的路径对标api服务器里的地址
                }
            }
        },
    }
};
