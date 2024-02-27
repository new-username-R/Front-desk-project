import requests from "./request";
// 三级联动接口
// /api/product/getBaseCategoryList get 无参数
import mockRequests from "./mockAjax";

export const reqCategoryList = () =>
  requests({ url: "/product/getBaseCategoryList", method: "get" }); //结果为promise
export const reqBannerList = () =>
  mockRequests({ url: "banner", method: "get" }); //结果为promise
export const reqFloorList = () => mockRequests({ url: "floor", method: "get" }); //结果为promise
// 商品搜索页数据
export const reqSearchList = (params) =>
  requests({ url: "list", method: "post", data: params }); //结果为promise /api/item/{ skuId }
// 商品详情页数据
export const reqDetailList = (skuId) =>
  requests({ url: `item/${skuId}`, method: "get" }); //结果为promise
//商品添加成功数据
export const reqAddOrUpDataShopCart = (skuId, skuNum) =>
  requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: "post" }); //结果为promise
//购物车数据
export const reqCartList = () =>
  requests({ url: "/cart/cartList", method: "get" }); //结果为promise
//切换商品选中状态
export const reqChangeInputState = (skuId, isChecked) =>
  requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: "get" });
//删除购物车商品
export const reqDeleteCart = (skuId) =>
  requests({ url: `/cart/deleteCart/${skuId}`, method: "DELETE" });
//  获取验证码
export const reqGetCode = (phone) =>
  requests({ url: `/user/passport/sendCode/${phone}`, method: "get" });
// 完成注册
export const reqConfiRegister = (phone, password, code) =>
  requests({
    url: "/user/passport/register",
    method: "post",
    data: { phone, password, code },
  });
// 登录
export const reqLogin = (phone, password) =>
  requests({
    url: "/user/passport/login",
    method: "post",
    data: { phone, password },
  });
// 获取用户信息
export const reqUserInfo = () =>
  requests({
    url: "/user/passport/auth/getUserInfo",
    method: "get",
  });
// 退出登录
export const reqUserLogout = () =>
  requests({
    url: "/user/passport/logout",
    method: "get",
  });
//获取用户地址信息
export const reqAddressInfo = () =>
  requests({
    url: `/user/userAddress/auth/findUserAddressList`,
    method: "get",
  });
// 获取订单交易页信息
export const reqShopInfo = () =>
  requests({ url: `/order/auth/trade`, method: "get" });
// 获取支付页面信息
export const reqPayInfo = (userInfo, tradeNo) =>
  requests({
    url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,
    method: "post",
    data: userInfo,
  });
// 获取订单支付页信息
export const reqPaymentInfo = (orderId) =>
  requests({ url: `/payment/weixin/createNative/${orderId}`, method: "get" });
// 获取订单支付状态
export const reqPayState = (orderId) =>
  requests({ url: `/payment/weixin/queryPayStatus/${orderId}`, method: "get" });
// 获取我的订单
export const reqMyOrder = (page,limit) =>
  requests({
    url: `order/auth/${page}/${limit}`,
    method: "get",
  });
