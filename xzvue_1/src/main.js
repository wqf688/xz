import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import myHeader from './components/myHeader'
Vue.component("my-header",myHeader)
// node_modules中安装的axios模块
import axios from 'axios'
// 设置axios对象的基础路径属性
axios.defaults.baseURL="http://xzserver.applinzi.com"
// 将axios对象放入Vue的原型对象中
Vue.prototype.axios=axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
