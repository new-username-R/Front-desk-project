<template lang="">
  <div>
    <div class="type-nav">
      <div class="container">
        <div @mouseleave="leave" @mouseenter="enterShow">
          <h2 class="all">全部商品分类</h2>
          <transition name="sort">
            <div class="sort" v-show="isShow">
              <div class="all-sort-list2" @click="goSearch">
                <div
                  v-for="(c1, index) in categoryList"
                  :key="c1.categoryId"
                  class="item"
                  :class="{ cur: currentIndex == index }"
                >
                  <h3 @mouseenter="enter(index)">
                    <a
                      :data-categoryName="c1.categoryName"
                      :data-category1Id="c1.categoryId"
                      >{{ c1.categoryName }}</a
                    >
                  </h3>
                  <div
                    class="item-list clearfix"
                    :style="{ display: currentIndex == index ? 'block' : 'none' }"
                  >
                    <div
                      v-for="(c2, index) in c1.categoryChild"
                      :key="c2.categoryId"
                      class="subitem"
                    >
                      <dl class="fore">
                        <dt>
                          <a
                            :data-categoryName="c2.categoryName"
                            :data-category2Id="c2.categoryId"
                            >{{ c2.categoryName }}</a
                          >
                        </dt>
                        <dd>
                          <em
                            v-for="(c3, index) in c2.categoryChild"
                            :key="c3.categoryId"
                          >
                            <a
                              :data-categoryName="c3.categoryName"
                              :data-category3Id="c3.categoryId"
                              >{{ c3.categoryName }}</a
                            >
                          </em>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
        <nav class="nav">
          <a href="###">服装城</a>
          <a href="###">美妆馆</a>
          <a href="###">尚品汇超市</a>
          <a href="###">全球购</a>
          <a href="###">闪购</a>
          <a href="###">团购</a>
          <a href="###">有趣</a>
          <a href="###">秒杀</a>
        </nav>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { throttle } from "lodash";
export default {
  name: "TypeNav",
  data() {
    return {
      currentIndex: -1,
      isShow:true
    };
  },
  //组件挂载完毕，可以向服务器发送请求
  computed: {
    ...mapState({
      categoryList: (state) => state.home.categoryList,
    }),
  },
  mounted() {
    
    // console.log(this.$route);
    if(this.$route.path!="/home"){
      this.isShow=false
    }
  },
  methods: {
    //throttle:节流，每隔多少毫秒触发一次，防止多次点击
    //debounce:防抖，最后一次再触发
    enter: throttle(function (index) {
      this.currentIndex = index;
    }, 50),
    leave() {
      this.currentIndex = -1;
      if(this.$route.path!="/home"){
      this.isShow=false
    }

    },
    enterShow(){
      this.isShow=true
    },
    goSearch(event) {
      // :data-category2Id="c2.categoryId"利用自定义属性
      // 获取点击的是否是‘a’标签，并且判断是几级导航，
      // event.target.dataset获取自定义属性名
     let node = event.target;
    //  利用解构赋值，获取到自定义属性名
      let { categoryname, category1id, category2id, category3id } =
        node.dataset;
      if (categoryname) {
        let location = { name: "search" };
        let query = { categoryname: categoryname };
        if (category1id) {
          query.category1id = category1id;
        } else if (category2id) {
          query.category2id = category2id;
        } else {
          query.category3id = category3id;
        }
        if(this.$route.params){
          location.params=this.$route.params
          location.query = query;
          this.$router.push(location);

        }
        // console.log("this.$route",this.$route,"this.$router",this.$router);
      }
    },
  },
};
</script>
<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          // &:hover {
          //   .item-list {
          //     display: block;
          //   }
          // }
        }
        .cur {
          background: skyblue;
        }
      }
    }
    .sort-enter{
      height: 0;
    }
    .sort-enter-to{
      height: 461px;
    }
    .sort-enter-active{
      transition: all .5s linear;
    }
  }
}
</style>
