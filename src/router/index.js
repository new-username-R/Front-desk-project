// 配置路由的地方
import Vue from "vue";
import VueRouter from "vue-router";
//引入路由
import routes from "./routes";
//引入仓库
import store from "@/store";
// 使用插件
Vue.use(VueRouter);
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
const router = new VueRouter({
  routes,
  // 配置路由
  scrollBehavior() {
    return { y: 0 };
  },
});
export default router;

router.beforeEach(async (to, from, next) => {
  // console.log(store.state);
  let hasToken = store.state.user.token;
  let hasNickName = store.state.user.nickName;
  //如果有token，不能去登录页
  if (hasToken) {
    if (to.path == "/login") {
      next("/home");
    } else {
      if (hasNickName) {
        next();
      } else {
        try {
          console.log(123);
          await store.dispatch("getUserInfo");
          next();
        } catch (error) {
          await store.dispatch("Logout");
          next("/login");
        }
      }
    }
  } else {
    let toPath = to.path;
    if (
      toPath.indexOf('trade') != -1 || toPath.indexOf('pay') != -1 || toPath.indexOf('center') != -1
    ) {
      next("/login?redirect=" + toPath);
    } else {
      next();
    }
  }
 
});
