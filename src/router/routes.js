
// 引入路由组件
import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Detail from "@/pages/Detail";
import addCartSuccess from "@/pages/addCartSuccess";
import ShopCart from "@/pages/ShopCart";
import Trade from "@/pages/Trade";
import Pay from "@/pages/Pay";
import PaySuccess from "@/pages/PaySuccess";
import Center from "@/pages/Center";
// 二级路由
import MyOrder from "@/pages/Center/myOrder";
import TeamOrder from "@/pages/Center/teamOrder";


// 配置路由
export default[
  {
    path: "/center",
    component: Center,
    meta: { show: true },
    name: "center",
    redirect: "/center/myorder",
    children: [{
      path: "myorder",
      component: MyOrder,
      
    },
    {
      path: "teamorder",
      component: TeamOrder,
    }],
  },
  {
    path: "/paySuccess",
    component: PaySuccess,
    meta: { show: true },
    name: "paySuccess",
  },
  {
    path: "/pay/:orderId?",
    component: Pay,
    meta: { show: true },
    name: "pay",
  },
  {
    path: "/trade",
    component: Trade,
    meta: { show: true },
    name: "trade",
  },
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
    name: "login",
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
]

