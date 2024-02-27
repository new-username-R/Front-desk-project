import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";

// 三级联动--全局组件
// 定义全局组件，在入口文件注册一次后，在任何组件当中都可以使用
import TypeNav from "@/components/TypeNav";
// 第一个参数：全局组件的名字 第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav);
import Pagination from "@/components/Pagination";
Vue.component(Pagination.name, Pagination);
//按需引入
import { Button, Row, Col, MessageBox, Message, Input } from "element-ui";
//element-ui大多数组件，注册为全局组件Vue.component|Vue.use
Vue.use(Button);
Vue.use(Row);
Vue.use(Col);
Vue.use(Input);
//按需引入写法不同的:MessageBox、Message、Loading、Notification
Vue.prototype.$msgbox = MessageBox;
//消息提示框
Vue.prototype.$alert = MessageBox.alert;

Vue.prototype.$message = Message;
// 引入mockSever.js--mock数据
import "@/mock/mockSever";
// import {reqDetailList} from '@/api'
// console.log(reqDetailList(1));
// 引入weiper样式
import "swiper/css/swiper.css";
// 统一接口API文件夹里的全部请求函数
import * as API from "@/api";
Vue.config.productionTip = false;
//引入图片懒加载
import VueLazyload from "vue-lazyload";
const loadimage = require('@/assets/R-C.jpg')
Vue.use(VueLazyload, {
  loading: loadimage,
});
//引入表单验证插件
import '@/Plugins/validate'
new Vue({
  render: (h) => h(App),
  // 全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  // 注册router
  // 可以让全部的组件（非路由组件|路由组件）都可以获取到$route|$router属性
  // $route(路由)：可以获取到路由信息
  // $router:进行编程式导航push，replace
  router,
  store,
}).$mount("#app");
