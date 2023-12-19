import { reqCategoryList, reqBannerList, reqFloorList } from "@/api";
const actions = {
  async categoryList({ commit }) {
    let result = await reqCategoryList();
    //    console.log(result.code)
    if (result.code == 200) {
      commit("CATEGORYLIST", result.data);
    }
  },
  async bannerList({ commit }) {
    let result = await reqBannerList();
    // console.log('修改state中的数据')
    if (result.code == 200) {
      commit("BANNERLIST", result.data);
      //  console.log(result.data);
    }
  },
  async floorList({ commit }) {
    let result = await reqFloorList();
    // console.log(result);
    if (result.code == 200) {
      commit("FLOORLIST", result.data);
      //  console.log(result.data);
    }
  },
};
const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
  },
  BANNERLIST(state, bannerList) {
    state.bannerList = bannerList;
  },
  FLOORLIST(state, floorList) {
    state.floorList = floorList;
  },
};
const state = {
  categoryList: [],
  bannerList: [],
  floorList: [],
};
export default {
  actions,
  mutations,
  state,
};
