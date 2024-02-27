import {
  reqGetCode,
  reqConfiRegister,
  reqLogin,
  reqUserInfo,
  reqUserLogout,
} from "@/api";
const actions = {
  // 获取验证码
  async getCode({ commit }, phone) {
    let result = await reqGetCode(phone);
    if (result.code == 200) {
      return result.data;
    } else {
      return Promise.reject(new Error(result.message));
    }
  },
  // 确认注册
  async ConfiRegister({ commit }, { phone, password, code }) {
    let result = await reqConfiRegister(phone, password, code);
    if (result.code == 200) {
      //   return result.data;
      return "ok";
    } else {
      return Promise.reject(new Error(result.message));
    }
  },
  // 登录
  async getToken({ commit }, { phone, password }) {
    const result = await reqLogin(phone, password);
    if (result.code == 200) {
      commit("GETTOKEN", result.data.token);
      localStorage.setItem("token", result.data.token);
      return "ok";
    } else {
      return Promise.reject(new Error(result.message));
    }
  },
  // 获取用户信息
  async getUserInfo({ commit }) {
    const result = await reqUserInfo();
    if (result.code == 200) {
      commit("GETUSERINFO", result.data.nickName);
      return "ok";
    }
  },
  // 退出登录
  async Logout({ commit }) {
    const result = await reqUserLogout();
    if (result.code == 200) {
      commit("LOGOUT");
      return "ok";
    } else {
      return Promise.reject(new Error(result.message));
    }
  },
};
const mutations = {
  GETTOKEN(state, token) {
    state.token = token;
  },
  GETUSERINFO(state, nickName) {
    state.nickName = nickName;
  },
  LOGOUT(state) {
    state.token = "";
    state.nickName = "";
    localStorage.removeItem("token");
  },
};
const state = {
  token: localStorage.getItem("token"),
  nickName: "",
};
const getters = {};
export default {
  actions,
  mutations,
  state,
  getters,
};
