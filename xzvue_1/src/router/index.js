import Vue from 'vue'
import VueRouter from 'vue-router'
//因为路由字典中需要用到Index和Details组件的内容
//所以用import 变量名 from "组件的路径"句式，
//从硬盘上查找组件所在的文件，将组件内容引入当前文件中，保存在指定变量里。
//结果: 使用变量，等于使用import from引入的文件内容
import Index from "../views/Index.vue"
// import Details from "../views/Details.vue"

Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
    {path:"/",
    component: Index,
    meta:{
      keepAlive:true
    }
  },
    {path:"/details/:lid",
    props:true,
    //懒加载
    // 如果不需要就不加载，什么时候需要，才加载！
    // 避免首屏加载东西过多，导致首屏加载慢,今后只要对首屏加载速度要求很高的平台，都要用懒加载方式
    //不好的地方: 不是真正的懒加载，即使用户不想看详情页，也在后台悄悄下载，浪费流量！
      //在项目根目录，src文件夹外平级，新建: 
      // vue.config.js：
      // module.exports = {
      //   chainWebpack: config => {
      //     config.plugins.delete("prefetch")
      //   }
      // }

    component:()=>import(/*
      webpackChunkName:"details"*/
      '../views/Details.vue')
  
    }
  ]
})

export default router
