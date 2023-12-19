<template lang="">
  <div class="specScroll" ref="specScroll">
    <!--左按钮-->
    <a class="prev">&lt;</a>
    <!-- 中间可滑动区域 -->
    <div class="items">
      <div class="itemsCon">
        <img
          v-for="(skuImage, index) in skuImageList"
          :key="skuImageList.id"
          :src="skuImage.imgUrl"
          :alt="skuImage.imgName"
        />
      </div>
    </div>
    <!--右按钮-->
    <a class="next">&gt;</a>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  name: "scroll",
  props: ["skuImageList"],
   mounted() {
    var mySwiper = new Swiper(this.$refs.floor1Swiper, {
      // direction: "vertical", // 垂直切换选项
      loop: true, // 循环模式选项


      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },

    });
  },
};
</script>
<style lang="less" scoped>
.specScroll {
  margin-top: 5px;
  width: 400px;
  overflow: hidden;
  .prev,
  .next {
    text-align: center;
    width: 10px;
    height: 54px;
    line-height: 54px;
    border: 1px solid #ccc;
    background: #ebebeb;
    cursor: pointer;
  }
  .prev {
    float: left;
    margin-right: 4px;
  }
  .next {
    float: right;
  }
  .items {
    float: left;
    position: relative;
    width: 372px;
    height: 56px;
    overflow: hidden;
    .itemsCon {
      position: absolute;
      width: 9999px;
      height: 56px;
      left: 0;
      img {
        float: left;
        text-align: center;
        border: 1px solid #ccc;
        padding: 2px;
        width: 50px;
        height: 50px;
        margin-right: 20px;
      }
    }
  }
}
</style>
