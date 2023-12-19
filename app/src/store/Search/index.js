import { reqSearchList } from "@/api";
const actions = {
  async trademarkList({ commit },params) {
    //必须传一个空对象，否则会请求失败
    let result = await reqSearchList(params);
    // console.log(commit);
    return commit("TRADEMARKLIST", result.data);
  },
};
const mutations = {
  TRADEMARKLIST(state, SearchList) {
    state.SearchList = SearchList;
  },
};
const state = {
  SearchList: {},
};
const getters={
    goodsList(state){
        // console.log(state..SearchList.goodsList);
        return state.SearchList.goodsList
    },
    attrsList(){
        return state.SearchList.attrsList
    },
    trademarkList(){
        return state.SearchList.trademarkList
    }
    // state.trademarkList.goodsList
}
export default {
  actions,
  mutations,
  state,
  getters
};
