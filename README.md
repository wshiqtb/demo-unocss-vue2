# vue-cli@4 + vue2 接入 unocss

## 1. 安装依赖

```bash
yarn add unocss @unocss/webpack
```

## 2. 配置 webpack

```js
// vue.config.js

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
    extract: true,
  },
}
```
> `css.extract`配置和rules中的`cache-loader`删除配置是为了解决unocss样式不生效的问题，不可缺。

> 删除`cache-loader`会导致项目开发过程中热更新很慢。 推荐vue-cli + vue2的项目使用`vue add windicss`插件，该插件会自动配置好webpack，使项目支持`windicss`，在vscode中安装`windicss-intellisense`插件，即可享受windicss的开发体验。

## 3. 配置 unocss

```js
// unocss.config.js
import { defineConfig, presetAttributify, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno(),
  ],
})
```
> `presetUno` 是预置的unocss样式配置，`presetAttributify` 是预置的属性选择器配置，可根据需要自行配置。

## 4. 使用 unocss

```js
// main.js
import '@unocss/reset/tailwind.css'
import 'uno.css'
```
> `@unocss/reset/tailwind.css` 是unocss自带的覆写dom元素默认样式文件，非必要。
> `uno.css` 是unocss的样式文件，必要。

# PS
对于老项目如果有什么异常，可以删除一下项目下`node_modules/.cache`文件夹，然后重启项目即可。
