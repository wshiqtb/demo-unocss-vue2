import Vue from 'vue'
import App from './App.vue'

// reset默认的样式
import '@unocss/reset/tailwind.css'

// 加载unocss
import 'uno.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
