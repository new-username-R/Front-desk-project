import { reqMyOrder } from "@/api";
const actions = {
  async getMyOrder({ commit }, { page, limit }) {
    const result = await reqMyOrder(page, limit);
    if (result.code == 200) {
      commit("GETMYORDER", result.data);
    }
  },
};
const mutations = {
  GETMYORDER(state, MyOrder) {
    state.MyOrder = MyOrder;
  },
};
const state = {
  MyOrder: {},
};
export default {
  actions,
  mutations,
  state,
};
