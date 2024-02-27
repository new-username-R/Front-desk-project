import { reqCartList, reqDeleteCart, reqChangeInputState } from "@/api";
const actions = {
  // 获取购物车商品
  async getCartList({ commit }) {
    let result = await reqCartList();
    if (result.code == 200) {
      commit("GETCARTLIST", result.data);
    }
  },
  // 修改购物车商品选中状态
  async ChangeInputState({ commit }, { skuId, isChecked }) {
    const result = await reqChangeInputState(skuId, isChecked);
    if (result.code == 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  // 删除
  async deleteCartList({ commit }, skuId) {
    const result = await reqDeleteCart(skuId);
    console.log(result);
    if (result.code == 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  // 删除选中的商品
  deleteAllChecked(Context) {
    //获取购物车中全部的产品，是一个数组
    const shopCartList = Context.getters.cartList.cartInfoList;
    let promiseAll=[]
    shopCartList.forEach((element) => {
     let Promise= element.isChecked == 1
        ? Context.dispatch("deleteCartList", element.skuId)
        : null;
        // 将每次返回的Promise的结果放入数组中
        promiseAll.push(Promise)
    });
   return Promise.all(promiseAll)
  },
  //选中全部商品
  ChangeAllInputState({dispatch,getters},isChecked){
    let promiseAll=[]
    getters.cartInfoList.forEach(item=>{
     let result= dispatch("ChangeInputState",{skuId:item.skuId,isChecked})
     promiseAll.push(result)
    })
    return Promise.all(promiseAll)
  }
};
const mutations = {
  GETCARTLIST(state, cartList) {
    state.cartList = cartList;
  },
};
const state = {
  cartList: [],
};
const getters = {
  cartList(state) {
    return state.cartList[0] || {};
  },
  cartInfoList(state) {
    return state.cartList[0].cartInfoList || [];
  },
 
};
export default {
  actions,
  mutations,
  state,
  getters,
};
