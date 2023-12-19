<template lang="">
  <div>
    <TypeNav />
    <!-- <div class="toolbar toolbar-wrap">
            <div class="content"></div>
            <div class="but list"></div>
            <div class="toolist">
                <div class="pull">
                    <i class="tab-ico vip"></i>
                    <em class="tab-text">商品会员</em>
                </div>
                <div class="pull">
                    <i class="tab-ico cart"></i>
                    <em class="tab-text">购物车</em>
                </div>
                <div class="pull">
                    <i class="tab-ico follow"></i>
                    <em class="tab-text">我的关注</em>
                </div>
                <div class="pull">
                    <i class="tab-ico history"></i>
                    <em class="tab-text">我的足迹</em>
                </div>
                <div class="pull">
                    <i class="tab-ico message"></i>
                    <em class="tab-text">我的消息</em>
                </div>
                <div class="pull">
                    <i class="tab-ico jimi"></i>
                    <em class="tab-text">咨询</em>
                </div>
            </div>
            <div class="back pull">
                <i class="tab-ico top"></i>
                <em class="tab-text">顶部</em>
            </div>
        </div> -->

    <div class="main">
      <div class="py-container">
        <!--bread-->
        <div class="bread">
          <ul class="fl sui-breadcrumb">
            <li>
              <a>全部结果</a>
            </li>
          </ul>
          <ul class="fl sui-tag">
            <li class="with-x" v-if="searchParams.categoryName">
              {{ searchParams.categoryName
              }}<i @click="removeCateGoryName">×</i>
            </li>
            <li class="with-x" v-if="searchParams.keyword">
              {{ searchParams.keyword }}<i @click="removeKeyword">×</i>
            </li>
            <li class="with-x" v-if="searchParams.trademark">
              {{ searchParams.trademark.split(":")[1]
              }}<i @click="removeTrademark">×</i>
            </li>
            <li class="with-x" v-for="(prop, index) in searchParams.props">
              {{ prop.split(":")[1] }}<i @click="removeProp(index)">×</i>
            </li>
          </ul>
        </div>
        <!--selector-->
        <SearchSelector @trademarkInfo="trademarkInfo" @attrkInfo="attrkInfo" />
        <!--details-->
        <div class="details clearfix">
          <div class="sui-navbar">
            <div class="navbar-inner filter">
              <ul class="sui-nav">
                <li :class="{ active: isActive == '1' }">
                  <a @click="changeOrder('1')"
                    >综合<span v-show="isActive == '1'"
                      ><svg
                        v-show="isUpOrDown == 'desc'"
                        style="vertical-align: middle"
                        t="1701959191874"
                        class="icon"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="1862"
                        width="15"
                        height="15"
                      >
                        <path
                          d="M540.64 731.52l375.04-384.448a12.8 12.8 0 0 0-0.224-18.112l-38.912-37.984a12.8 12.8 0 0 0-18.112 0.224l-337.28 345.728a12.8 12.8 0 0 1-18.304 0L165.568 291.2a12.8 12.8 0 0 0-18.112-0.224L108.544 328.96a12.8 12.8 0 0 0-0.224 18.112l375.04 384.448a40 40 0 0 0 57.28 0z"
                          p-id="1863"
                          fill="#e6e6e6"
                        ></path>
                      </svg>
                      <svg
                        v-show="isUpOrDown == 'asc'"
                        t="1701959336313"
                        style="vertical-align: middle"
                        class="icon"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="2012"
                        width="15"
                        height="15"
                      >
                        <path
                          d="M540.64 292.48l375.04 384.48a12.8 12.8 0 0 1-0.224 18.08l-38.912 37.984a12.8 12.8 0 0 1-18.112-0.224l-337.28-345.728a12.8 12.8 0 0 0-18.304 0L165.568 732.8a12.8 12.8 0 0 1-18.112 0.224L108.544 695.04a12.8 12.8 0 0 1-0.224-18.08L483.36 292.48a40 40 0 0 1 57.28 0z"
                          p-id="2013"
                          fill="#e6e6e6"
                        ></path></svg></span
                  ></a>
                </li>
                <!-- <li>
                  <a>销量</a>
                </li>
                <li>
                  <a>新品</a>
                </li>
                <li>
                  <a>评价</a>
                </li> -->
                <li :class="{ active: isActive == '2' }">
                  <a @click="changeOrder('2')"
                    >价格<span v-show="isActive == '2'">
                      <svg
                        v-show="isUpOrDown == 'desc'"
                        style="vertical-align: middle"
                        t="1702112518009"
                        class="icon"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="1185"
                        width="15"
                        height="15"
                      >
                        <path
                          d="M540.64 731.52l375.04-384.448a12.8 12.8 0 0 0-0.224-18.112l-38.912-37.984a12.8 12.8 0 0 0-18.112 0.224l-337.28 345.728a12.8 12.8 0 0 1-18.304 0L165.568 291.2a12.8 12.8 0 0 0-18.112-0.224L108.544 328.96a12.8 12.8 0 0 0-0.224 18.112l375.04 384.448a40 40 0 0 0 57.28 0z"
                          p-id="1186"
                          fill="#e6e6e6"
                        ></path>
                      </svg>
                      <svg
                        v-show="isUpOrDown == 'asc'"
                        t="1701959336313"
                        style="vertical-align: middle"
                        class="icon"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="2012"
                        width="15"
                        height="15"
                      >
                        <path
                          d="M540.64 292.48l375.04 384.48a12.8 12.8 0 0 1-0.224 18.08l-38.912 37.984a12.8 12.8 0 0 1-18.112-0.224l-337.28-345.728a12.8 12.8 0 0 0-18.304 0L165.568 732.8a12.8 12.8 0 0 1-18.112 0.224L108.544 695.04a12.8 12.8 0 0 1-0.224-18.08L483.36 292.48a40 40 0 0 1 57.28 0z"
                          p-id="2013"
                          fill="#e6e6e6"
                        ></path></svg></span
                  ></a>
                </li>
                <!-- <li>
                  <a>价格⬇</a>
                </li> -->
              </ul>
            </div>
          </div>
          <div class="goods-list">
            <ul class="yui3-g">
              <li
                class="yui3-u-1-5"
                v-for="(goods, index) in goodsList"
                :key="index"
                @click="skuId(goods.id)"
              >
                <div class="list-wrap" >
                  <div class="p-img">
                    <a ><img :src="goods.defaultImg" /></a>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>{{ goods.price }}</i>
                    </strong>
                  </div>
                  <div class="attr">
                    <a href="item.html" :title="goods.title">{{
                      goods.title
                    }}</a>
                  </div>
                  <div class="commit">
                    <i class="command">已有<span>2000</span>人评价</i>
                  </div>
                  <div class="operate">
                    <a
                      href="success-cart.html"
                      class="sui-btn btn-bordered btn-danger"
                      >加入购物车</a
                    >
                    <a href="javascript:void(0);" class="sui-btn btn-bordered"
                      >收藏</a
                    >
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <Pagination
            :pageNo="searchParams.pageNo"
            :pageSize="searchParams.pageSize"
            :total="total"
            :continues="5"
            @getPaegNo="getPaegNo"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SearchSelector from "@/pages/Search/SearchSelector";
import Pagination from "@/pages/Search/Pagination";
import { mapGetters, mapState } from "vuex";
export default {
  name: "search",
  components: { SearchSelector, Pagination },
  data() {
    return {
      searchParams: {
        category1Id: "",
        category2Id: "",
        category3Id: "",
        categoryName: "",
        keyword: "",
        order: "1:desc",
        pageNo: 1,
        //每页多少条数据
        pageSize: 3,
        props: [],
        trademark: "",
      },
    };
  },
  beforeMount() {
    // 当用户点击导航栏是，让数据动态展示
    this.searchParams.category1Id = this.$route.query.category1id;
    this.searchParams.category2Id = this.$route.query.category2id;
    this.searchParams.category3Id = this.$route.query.category3id;
    this.searchParams.categoryName = this.$route.query.categoryname;
    this.searchParams.keyword = this.$route.params.keyword;
    // Object.assign:ES6语法，合并对象
    // Object.assign(this.searchParams, this.$route.query, this.$route.params);
  },
  mounted() {
    // this.searchParams.category2Id=this.$route.query.category2id
    // this.searchParams.category3Id=this.$route.query.category3id
    this.getData();
    console.log('挂载触发');
    // this.$bus.$on("getPaegNo",(pageNo)=>{
    //   this.searchParams.pageNo=pageNo
    //   this.getData();
    // console.log('分页触发');
    // })
  },
  computed: {
    ...mapGetters(["goodsList"]),
    isActive() {
      return this.searchParams.order.split(":")[0];
    },
    isUpOrDown() {
      return this.searchParams.order.split(":")[1];
    },
    ...mapState({
      total: (state) => state.search.SearchList.total,
      totalPages: (state) => state.search.SearchList.totalPages,
    }),
  },
  methods: {
    // 向仓库发送请求，并改为一个方法，随时可以调用
    getData() {
      this.$store.dispatch("trademarkList", this.searchParams);
    },
    removeCateGoryName() {
      this.searchParams.categoryName = undefined;
      this.searchParams.category1Id = undefined;
      this.searchParams.category2Id = undefined;
      this.searchParams.category3Id = undefined;
      this.getData();
      if (this.$route.params) {
        this.$router.push({ name: "search", params: this.$route.params });
      }
    },
    // 移除关键字
    removeKeyword() {
      this.searchParams.keyword = undefined;
      this.getData();
      if (this.$route.query) {
        this.$router.push({ name: "search", query: this.$route.query });
      }
      // 清空搜索框
      // 全局事件总线
      this.$bus.$emit("clear");
    },
    // 发送品牌信息
    trademarkInfo(tradeMark) {
      this.searchParams.trademark = `${tradeMark.tmId}:${tradeMark.tmName}`;
      this.getData();
    },
    // 删除品牌信息
    removeTrademark() {
      this.searchParams.trademark = undefined;
      this.getData();
    },
    //属性信息
    attrkInfo(attrs, attrsValue) {
      let originId = attrs.attrId;
      let originName = attrs.attrName;
      let originValue = attrsValue;
      let props = `${originId}:${originValue}:${originName}`;
      if (this.searchParams.props.includes(props) == !1) {
        this.searchParams.props.push(props);
      }
      this.getData();
    },
    // 删除属性信息
    removeProp(index) {
      this.searchParams.props.splice(index, 1);
      this.getData();
    },
    // 排序
    changeOrder(flag) {
      let originOrder = this.searchParams.order;
      let originFlag = originOrder.split(":")[0];
      let originSort = originOrder.split(":")[1];
      let newOrder = "";
      if (flag == originFlag) {
        newOrder = `${originFlag}:${originSort == "desc" ? "asc" : "desc"}`;
      } else {
        newOrder = `${flag}:${"desc"}`;
      }
      this.searchParams.order = newOrder;
      this.getData();
    },
    getPaegNo(PaegNo){
      this.searchParams.pageNo=PaegNo
      this.getData();
    }
    ,skuId(goodId){
      this.$router.push({name:'detail',params:{skuid:goodId}})
      console.log(this.$route);
    }
    
  },
  watch: {
    // 监听路由参数是否发生变化，再次请求
    $route(val, oldVal) {
      // Object.assign(this.searchParams, this.$route.query, this.$route.params);
      this.searchParams.category1Id = this.$route.query.category1id;
      this.searchParams.category2Id = this.$route.query.category2id;
      this.searchParams.category3Id = this.$route.query.category3id;
      this.searchParams.categoryName = this.$route.query.categoryname;
      this.searchParams.keyword = this.$route.params.keyword;
      this.getData();
      // 请求完毕把相应的1，2，3id置空，去接受下一次的1，2，3id
      this.searchParams.category1Id = "";
      this.searchParams.category2Id = "";
      this.searchParams.category3Id = "";
      console.log('监听触发');
    },
  },
};
</script>
<style lang="less" scoped>

em {
  margin-right: 5px;
}
.main {
  margin: 10px 0;
  .py-container {
    width: 1200px;
    margin: 0 auto;
    .bread {
      margin-bottom: 5px;
      overflow: hidden;
      .sui-breadcrumb {
        padding: 3px 15px;
        margin: 0;
        font-weight: 400;
        border-radius: 3px;
        float: left;
        li {
          display: inline-block;
          line-height: 18px;
          a {
            color: #666;
            text-decoration: none;
            &:hover {
              color: #4cb9fc;
            }
          }
        }
      }
      .sui-tag {
        margin-top: -5px;
        list-style: none;
        font-size: 0;
        line-height: 0;
        padding: 5px 0 0;
        margin-bottom: 18px;
        float: left;
        .with-x {
          font-size: 12px;
          margin: 0 5px 5px 0;
          display: inline-block;
          overflow: hidden;
          color: #000;
          background: #f7f7f7;
          padding: 0 7px;
          height: 20px;
          line-height: 20px;
          border: 1px solid #dedede;
          white-space: nowrap;
          transition: color 400ms;
          cursor: pointer;
          i {
            margin-left: 10px;
            cursor: pointer;
            font: 400 14px tahoma;
            display: inline-block;
            height: 100%;
            vertical-align: middle;
          }
          &:hover {
            color: #28a3ef;
          }
        }
      }
    }
    .selector {
      border: 1px solid #ddd;
      margin-bottom: 5px;
      overflow: hidden;
      .logo {
        border-top: 0;
        margin: 0;
        position: relative;
        overflow: hidden;
        .key {
          padding-bottom: 87px !important;
        }
      }
      .type-wrap {
        margin: 0;
        position: relative;
        border-top: 1px solid #ddd;
        overflow: hidden;
        .key {
          width: 100px;
          background: #f1f1f1;
          line-height: 26px;
          text-align: right;
          padding: 10px 10px 0 15px;
          float: left;
        }
        .value {
          overflow: hidden;
          padding: 10px 0 0 15px;
          color: #333;
          margin-left: 120px;
          padding-right: 90px;
          .logo-list {
            li {
              float: left;
              border: 1px solid #e4e4e4;
              margin: -1px -1px 0 0;
              width: 105px;
              height: 52px;
              text-align: center;
              line-height: 52px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              font-weight: 700;
              color: #e1251b;
              font-style: italic;
              font-size: 14px;
              img {
                max-width: 100%;
                vertical-align: middle;
              }
            }
          }
          .type-list {
            li {
              float: left;
              display: block;
              margin-right: 30px;
              line-height: 26px;
              a {
                text-decoration: none;
                color: #666;
              }
            }
          }
        }
        .ext {
          position: absolute;
          top: 10px;
          right: 10px;
          .sui-btn {
            display: inline-block;
            padding: 2px 14px;
            box-sizing: border-box;
            margin-bottom: 0;
            font-size: 12px;
            line-height: 18px;
            text-align: center;
            vertical-align: middle;
            cursor: pointer;
            padding: 0 10px;
            background: #fff;
            border: 1px solid #d5d5d5;
          }
          a {
            color: #666;
          }
        }
      }
    }
    .details {
      margin-bottom: 5px;
      .sui-navbar {
        overflow: visible;
        margin-bottom: 0;
        .filter {
          min-height: 40px;
          padding-right: 20px;
          background: #fbfbfb;
          border: 1px solid #e2e2e2;
          padding-left: 0;
          border-radius: 0;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);
          .sui-nav {
            position: relative;
            left: 0;
            display: block;
            float: left;
            margin: 0 10px 0 0;
            li {
              float: left;
              line-height: 18px;
              a {
                display: block;
                cursor: pointer;
                padding: 11px 15px;
                color: #777;
                text-decoration: none;
              }
              &.active {
                a {
                  background: #e1251b;
                  color: #fff;
                }
              }
            }
          }
        }
      }
      .goods-list {
        margin: 20px 0;
        ul {
          display: flex;
          flex-wrap: wrap;
          li {
            height: 100%;
            width: 20%;
            margin-top: 10px;
            line-height: 28px;
            .list-wrap {
              .p-img {
                padding-left: 15px;
                width: 215px;
                height: 255px;
                a {
                  color: #666;
                  img {
                    max-width: 100%;
                    height: auto;
                    vertical-align: middle;
                  }
                }
              }
              .price {
                padding-left: 15px;
                font-size: 18px;
                color: #c81623;
                strong {
                  font-weight: 700;
                  i {
                    margin-left: -5px;
                  }
                }
              }
              .attr {
                padding-left: 15px;
                width: 85%;
                overflow: hidden;
                margin-bottom: 8px;
                min-height: 38px;
                cursor: pointer;
                line-height: 1.8;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                a {
                  color: #333;
                  text-decoration: none;
                }
              }
              .commit {
                padding-left: 15px;
                height: 22px;
                font-size: 13px;
                color: #a7a7a7;
                span {
                  font-weight: 700;
                  color: #646fb0;
                }
              }
              .operate {
                padding: 12px 15px;
                .sui-btn {
                  display: inline-block;
                  padding: 2px 14px;
                  box-sizing: border-box;
                  margin-bottom: 0;
                  font-size: 12px;
                  line-height: 18px;
                  text-align: center;
                  vertical-align: middle;
                  cursor: pointer;
                  border-radius: 0;
                  background-color: transparent;
                  margin-right: 15px;
                }
                .btn-bordered {
                  min-width: 85px;
                  background-color: transparent;
                  border: 1px solid #8c8c8c;
                  color: #8c8c8c;
                  &:hover {
                    border: 1px solid #666;
                    color: #fff !important;
                    background-color: #666;
                    text-decoration: none;
                  }
                }
                .btn-danger {
                  border: 1px solid #e1251b;
                  color: #e1251b;
                  &:hover {
                    border: 1px solid #e1251b;
                    background-color: #e1251b;
                    color: white !important;
                    text-decoration: none;
                  }
                }
              }
            }
          }
        }
      }
    }
    .hot-sale {
      margin-bottom: 5px;
      border: 1px solid #ddd;
      .title {
        font-weight: 700;
        font-size: 14px;
        line-height: 21px;
        border-bottom: 1px solid #ddd;
        background: #f1f1f1;
        color: #333;
        margin: 0;
        padding: 5px 0 5px 15px;
      }
      .hot-list {
        padding: 15px;
        ul {
          display: flex;
          li {
            width: 25%;
            height: 100%;
            .list-wrap {
              .p-img,
              .price,
              .attr,
              .commit {
                padding-left: 15px;
              }
              .p-img {
                img {
                  max-width: 100%;
                  vertical-align: middle;
                  border: 0;
                }
              }
              .attr {
                width: 85%;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                margin-bottom: 8px;
                min-height: 38px;
                cursor: pointer;
                line-height: 1.8;
              }
              .price {
                font-size: 18px;
                color: #c81623;
                strong {
                  font-weight: 700;
                  i {
                    margin-left: -5px;
                  }
                }
              }
              .commit {
                height: 22px;
                font-size: 13px;
                color: #a7a7a7;
              }
            }
          }
        }
      }
    }
  }
}
</style>
