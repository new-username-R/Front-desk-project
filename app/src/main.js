import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

// 三级联动--全局组件
// 定义全局组件，在入口文件注册一次后，在任何组件当中都可以使用
import TypeNav from '@/components/TypeNav'
// 第一个参数：全局组件的名字 第二个参数：哪一个组件
Vue.component(TypeNav.name,TypeNav)
// 
// 引入mockSever.js--mock数据
import '@/mock/mockSever'
// import {reqDetailList} from '@/api'
// console.log(reqDetailList(1));
// 引入weiper样式
import 'swiper/css/swiper.css'
// reqCategoryList()
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  // 全局事件总线
  beforeCreate(){
    Vue.prototype.$bus=this
  },
  // 注册router
  // 可以让全部的组件（非路由组件|路由组件）都可以获取到$route|$router属性
  // $route(路由)：可以获取到路由信息
  // $router:进行编程式导航push，replace
  router,
  store
}).$mount('#app')
