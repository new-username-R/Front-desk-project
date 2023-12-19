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
