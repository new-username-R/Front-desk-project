<template lang="">
  <div>
    <!-- 三级联动全局组件：三级联动全局组件已注册为全局组件，因此不需要再引入 -->
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <TodayRecommend></TodayRecommend>
    <Rank></Rank>
    <Like></Like>
    <Floor  v-for="(floor,index) in floorList ":key="floor.id" :list="floor"></Floor>
    <!-- <Floor></Floor> -->
    <Brand></Brand>
  </div>
</template>
<script>
import ListContainer from "@/pages/Home/ListContainer";
import TodayRecommend from "@/pages/Home/TodayRecommend";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";
import { mapState } from "vuex";
export default {
  name: "home",
  components: {
    ListContainer,
    TodayRecommend,
    Rank,
    Like,
    Floor,
    // Floor,
    Brand,
  },
  //复用的组件不能在组件内部发送请求
  mounted() {
    this.$store.dispatch("floorList");
  },
  computed: {
    ...mapState({
        floorList: (state) => state.home.floorList,
    }),
  },
  
};
</script>
<style lang="less"></style>
