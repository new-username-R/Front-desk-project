import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import home from "./Home";
import search from "./Search";
import detail from "./Detail";
import cart from "./Cart";
import user from "./user";
import trade from "./Trade";
import myorder from "./MyOrder";

export default new Vuex.Store({
  modules: {
    home,
    search,
    detail,
    cart,
    user,
    trade,
    myorder
  },
});
