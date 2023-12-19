// 配置路由的地方
import Vue from "vue";
import VueRouter from "vue-router";
// 使用插件
Vue.use(VueRouter);
// 引入路由组件
import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Detail from "@/pages/Detail";
import addCartSuccess from "@/pages/addCartSuccess";
import ShopCart from "@/pages/ShopCart";
//缓存
const OriginPush = VueRouter.prototype.push;
const OriginReplace = VueRouter.prototype.replace;
//重写push、replace，防止多次点击报错
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve & reject) {
    OriginPush.call(this, location, resolve, reject);
  } else {
    OriginPush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve & reject) {
    OriginReplace.call(this, location, resolve, reject);
  } else {
    OriginReplace.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};
// 配置路由
export default new VueRouter({
  // 配置路由
  routes: [
    {
      path: "/detail/:skuid",
      component: Detail,
      meta: { show: true },
      name: "detail",
    },
    {
      path: "/shopcart",
      component: ShopCart,
      meta: { show: true },
      name: "shopcart",
    },
    {
      path: "/addCartSuccess",
      component: addCartSuccess,
      meta: { show: true },
      name: "addcartsuccess",
    },
    {
      path: "/home",
      component: Home,
      meta: { show: true },
    },
    {
      path: "/search/:keyword?",
      component: Search,
      meta: { show: true },
      name: "search",
    },
    {
      path: "/login",
      component: Login,
      meta: { show: false },
    },
    {
      path: "/register",
      component: Register,
      meta: { show: false },
    },
    // 重定向
    {
      path: "*",
      redirect: "/home",
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});
