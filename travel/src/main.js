// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入fastclick模块，解决移动端的click300ms延时问题
import fastClick from 'fastclick'
import 'styles/reset.css'
// 引入一像素边框的解决文件（一像素边框是可能1像素的css对应的二倍屏下不止1像素）
import 'styles/border.css'
import 'styles/iconfont.css'


Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  // 挂载到id为#app这个div中，是在index.html中的
  el: '#app',
  router,
  // 在es6中如果键值和值一样的话，可以简写键值就可以 
  components: { App },
  // 渲染APP局部组件
  template: '<App/>'
})
