import { reqDetailList, reqAddOrUpDataShopCart } from "@/api";
import { getUUID } from "@/pages/utils/uuid_token";
const actions = {
  async DetailList({ commit }, skuId) {
    const result = await reqDetailList(skuId);
    // console.log(result);
    if (result.code == 200) {
      commit("DETAILLIST", result.data);
    }
  },
  async AddOrUpDataShopCart({ commit }, { skuId, skuNum }) {
    let result = await reqAddOrUpDataShopCart(skuId, skuNum);
    if (result.code == 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("request error"));
    }
  },
};
const mutations = {
  DETAILLIST(state, goodInfo) {
    state.goodInfo = goodInfo;
  },
};
const state = {
  goodInfo: {},
  //封装游客身份模块，生成一个随机字符，且不能再发生变化
  uuid_token: getUUID(),
};
const getters = {
  categoryView(state) {
    return state.goodInfo.categoryView || {};
  },
  skuInfo(state) {
    return state.goodInfo.skuInfo || {};
  },
  spuSaleAttrList(state) {
    return state.goodInfo.spuSaleAttrList || {};
  },
};
export default {
  actions,
  mutations,
  state,
  getters,
};
