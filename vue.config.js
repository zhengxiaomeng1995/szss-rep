let publicPath = '/'
module.exports = {
      publicPath, // 根据你的实际情况更改这里
    /* 关闭校验 */
    lintOnSave: false,
    chainWebpack: config => {
        config.resolve.symlinks(true);
        
       },
        lintOnSave: true,
           chainWebpack: config => {
           config.resolve.symlinks(true);
           },
           devServer: {
           publicPath // 和 publicPath 保持一致
           },
           css: {
           },
       
}