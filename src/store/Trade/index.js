import { reqShopInfo, reqAddressInfo } from "@/api";
const actions = {
  // 获取商品信息
  async getTradeList({ commit }) {
    const result = await reqShopInfo();
    if (result.code == 200) {
      commit("GETTRADELIST", result.data);
      return "ok";
    } else {
      return Promise.reject(new Error(result.message));
    }
  },
  // 获取地址信息
  async getAddressInfo({ commit }) {
    const result = await reqAddressInfo();
    if (result.code == 200) {
      commit("GETADDDRESSINFO", result.data);
    }else{
      return Promise.reject(new Error(result.message))
    }
  },
};
const mutations = {
  // 提交商品信息
  GETTRADELIST(state, tradeInfo) {
    state.tradeInfo = tradeInfo;
  },
  // 提交地址信息
  GETADDDRESSINFO(state,addressInfo){
    state.addressInfo=addressInfo
  }
};
const state = {
  // 商品信息
  tradeInfo: {},
  addressInfo:[]
};
export default {
  actions,
  mutations,
  state,
};
