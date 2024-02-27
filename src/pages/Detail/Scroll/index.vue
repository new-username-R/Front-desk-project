<template lang="">
  <div class="swiper-container" id="floor1Swiper" ref="Scroll">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(carouselList, index) in skuImageList"
        :key="carouselList.id"
      >
        <img :src="carouselList.imgUrl" @click="handler(carouselList.imgUrl)" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <!-- <div class="swiper-pagination"></div> -->

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
  <!-- 导航等组件可以放在Swiper容器之外 -->
</template>
<script>
import Swiper from "Swiper";
export default {
  name: "Scroll",
  props: ["skuImageList"],
  watch: {
    skuImageList() {
      this.$nextTick(() => {
        var mySwiper = new Swiper(this.$refs.Scroll, {
          // direction: "vertical", // 垂直切换选项
          // loop: true, // 循环模式选项

          // 如果需要分页器
          // pagination: {
          //   el: ".swiper-pagination",
          // },
          slidesPerView: 2,
          centeredSlides: true,
          // 如果需要前进后退按钮
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          
        });
      });
    },
  },
  methods: {
    handler(index) {
      this.$bus.$emit("sendImgUrl", index);
    },
  },
};
</script>
<style lang="less" scoped>
.active {
  border: 1px solid red;
}
.swiper-container {
  width: 402px;
  height: 52px;
  overflow: hidden;
  img {
    width: 50px;
    height: 50px;
  }
  .swiper-button-next {
    right: 0;
    left: auto;
  }
  .swiper-button-prev {
    left: 0;
    right: auto;
  }
  .swiper-button-next,
  .swiper-button-prev {
    box-sizing: border-box;
    width: 12px;
    height: 56px;
    background: rgb(235, 235, 235);
    border: 1px solid rgb(204, 204, 204);
    top: 0;
    margin-top: 0;
    &::after {
      font-size: 12px;
    }
  }
}
</style>
