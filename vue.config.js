// 引入等比适配插件
// 配置基本大小
const px2rem = require('postcss-px2rem')({
  remUnit: 80,
});
module.exports = {
  publicPath: '/echart-test/',
  lintOnSave: false,    //后加，解决启动报错问题
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          px2rem,
        ],
      },
    }
  }
}
