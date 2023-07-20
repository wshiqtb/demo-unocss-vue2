const UnoCSS = require('@unocss/webpack').default

module.exports = {
  configureWebpack: {
    plugins: [UnoCSS()]
  },
  chainWebpack(config) {
    config.module.rule('vue').uses.delete('cache-loader')
    config.module.rule('tsx').uses.delete('cache-loader')
    config.merge({
      cache: false,
    })
  },
  css: {
    loaderOptions: {
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.sass` 这个文件
        // 注意：在 sass-loader v8 中，这个选项名是 "prependData"
        prependData: `@import "~@/styles/variables.scss";`
      },
    },
    extract: {
      filename: '[name].[hash:9].css',
    },
  },
}