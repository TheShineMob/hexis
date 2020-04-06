'use strict'
const path = require('path')

module.exports = {
  //表明配置一些webpack相关的设置
  configureWebpack: {
    //解决路径相关的问题
    resolve: {
      //配置别名
      alias: {
        '@': path.resolve('src'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@content': path.resolve(__dirname, 'src/components/content'),
        '@common': path.resolve(__dirname, 'src/components/common'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@network': path.resolve(__dirname, 'src/network'),
        '@views': path.resolve(__dirname, 'src/views')
      }
    }
  },
}