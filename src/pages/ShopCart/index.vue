<template>
  <div class="cart">
    <h4>全部商品</h4>
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th1">全部</div>
        <div class="cart-th2">商品</div>
        <div class="cart-th3">单价（元）</div>
        <div class="cart-th4">数量</div>
        <div class="cart-th5">小计（元）</div>
        <div class="cart-th6">操作</div>
      </div>
      <div class="cart-body">
        <ul class="cart-list" v-for="item in cartInfoList" :key="item.id">
          <li class="cart-list-con1">
            <input
              type="checkbox"
              :checked="item.isChecked"
              name="chk_list"
              @click="isChecked(item)"
            />
          </li>
          <li class="cart-list-con2">
            <img :src="item.imgUrl" />
            <div class="item-msg">
              {{ item.skuName }}
            </div>
          </li>
          <li class="cart-list-con4">
            <span class="price">{{ item.skuPrice }}</span>
          </li>
          <li class="cart-list-con5">
            <a
              href="javascript:void(0)"
              class="mins"
              @click="handler('mins', -1, item)"
              >-</a
            >
            <input
              autocomplete="off"
              type="text"
              :value="item.skuNum"
              minnum="1"
              class="itxt"
              @change="handler('change', $event.target.value * 1, item)"
              ref="inputVal"
            />
            <a
              href="javascript:void(0)"
              class="plus"
              @click="handler('plus', +1, item)"
              >+</a
            >
          </li>
          <li class="cart-list-con6">
            <span class="sum">{{ item.skuPrice * item.skuNum }}</span>
          </li>
          <li class="cart-list-con7">
            <a class="sindelet" @click="deleteCartList(item.skuId)">删除</a>
            <br />
            <a href="#none">移到收藏</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="cart-tool">
      <div class="select-all">
        <input
          class="chooseAll"
          type="checkbox"
          :checked="isCheckedAll"
          @click="chooseAll"
        />
        <span>全选</span>
      </div>
      <div class="option">
        <a @click="deleteAllChecked()">删除选中的商品</a>
        <a href="#none">移到我的关注</a>
        <a href="#none">清除下柜商品</a>
      </div>
      <div class="money-box">
        <div class="chosed">
          已选择 <span>{{ quantity }}</span
          >件商品
        </div>
        <div class="sumprice">
          <em>总价（不含运费） ：</em>
          <i class="summoney">{{ grandTotal }}</i>
        </div>
        <div class="sumbtn">
          <!-- <a class="sum-btn">结算</a> -->
          <router-link to="/trade" class="sum-btn">结算</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { throttle } from "lodash";
export default {
  name: "ShopCart",
  mounted() {
    this.getData();
  },
  computed: {
    ...mapGetters(["cartList"]),
    cartInfoList() {
      return this.cartList.cartInfoList || [];
    },
    //  全选
    isCheckedAll() {
      return this.cartInfoList.every(
        (itemChecked) => itemChecked.isChecked == 1
      );
    },
    // 勾选的数量
    quantity() {
      let total = 0;
      this.cartInfoList.forEach((element) => {
        element.isChecked == 1 ? total++ : total;
      });
      return total;
    },
    //总价
    grandTotal() {
      let totalAry = [];
      let skuNumAry = [];
      let grandTotal = 0;

      this.cartInfoList.forEach((element) => {
        element.isChecked == 1
          ? totalAry.push(element.skuPrice) | skuNumAry.push(element.skuNum)
          : null;
      });
      for (let i = 0; i < totalAry.length; i++) {
        grandTotal += totalAry[i] * skuNumAry[i];
      }
      return grandTotal;
    },
  },
  methods: {
    getData() {
      this.$store.dispatch("getCartList");
    },
    //删除商品
    async deleteCartList(skuId) {
      try {
        await this.$store.dispatch("deleteCartList", skuId);
        this.getData();
      } catch (error) {
        alert(error.message);
      }
    },
    //修改商品是否勾选状态
    async isChecked(item) {
      try {
        let checkedResult =
          item.isChecked == 1 ? (item.isChecked = 0) : (item.isChecked = 1);
        await this.$store.dispatch("ChangeInputState", {
          skuId: item.skuId,
          isChecked: checkedResult,
        });
        this.getData();
      } catch (error) {
        alert(error.message);
      }
    },
    //选中全部
    async chooseAll(event) {
      try {
        let isChecked = event.target.checked ? "1" : "0";
        await this.$store.dispatch("ChangeAllInputState", isChecked);
        this.getData();
      } catch (error) {
        alert(error);
      }
    },
    // 删除选中的商品
    async deleteAllChecked() {
      try {
        await this.$store.dispatch("deleteAllChecked");
        this.getData();
      } catch (error) {
        alert(error.message);
      }
    },
    //修改商品数量
    handler: throttle(async function (type, disNum, item) {
      console.log(item.skuNum);
      let num = null;
      switch (type) {
        case "mins":
          num = item.skuNum == 1 ? 0 : disNum;
          break;
        case "plus":
          num = disNum;
          break;
        case "change":
          num = isNaN(disNum)
            ? 0
            : parseFloat(disNum) < 1
            ? 0
            : parseFloat(disNum) - item.skuNum;
          break;
      }
      await this.$store.dispatch("AddOrUpDataShopCart", {
        skuId: item.skuId,
        skuNum: num,
      });
      this.getData();
    }, 1000),
  },
};
</script>

<style lang="less" scoped>
.cart {
  width: 1200px;
  margin: 0 auto;

  h4 {
    margin: 9px 0;
    font-size: 14px;
    line-height: 21px;
  }

  .cart-main {
    .cart-th {
      background: #f5f5f5;
      border: 1px solid #ddd;
      padding: 10px;
      overflow: hidden;

      & > div {
        float: left;
      }

      .cart-th1 {
        width: 25%;

        input {
          vertical-align: middle;
        }

        span {
          vertical-align: middle;
        }
      }

      .cart-th2 {
        width: 25%;
      }

      .cart-th3,
      .cart-th4,
      .cart-th5,
      .cart-th6 {
        width: 12.5%;
      }
    }

    .cart-body {
      margin: 15px 0;
      border: 1px solid #ddd;

      .cart-list {
        padding: 10px;
        border-bottom: 1px solid #ddd;
        overflow: hidden;

        & > li {
          float: left;
        }

        .cart-list-con1 {
          width: 15%;
        }

        .cart-list-con2 {
          width: 35%;

          img {
            width: 82px;
            height: 82px;
            float: left;
          }

          .item-msg {
            float: left;
            width: 150px;
            margin: 0 10px;
            line-height: 18px;
          }
        }

        .cart-list-con3 {
          width: 20.8333%;

          .item-txt {
            text-align: center;
          }
        }

        .cart-list-con4 {
          width: 10%;
        }

        .cart-list-con5 {
          width: 17%;

          .mins {
            border: 1px solid #ddd;
            border-right: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }

          input {
            border: 1px solid #ddd;
            width: 40px;
            height: 33px;
            float: left;
            text-align: center;
            font-size: 14px;
          }

          .plus {
            border: 1px solid #ddd;
            border-left: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }
        }

        .cart-list-con6 {
          width: 10%;

          .sum {
            font-size: 16px;
          }
        }

        .cart-list-con7 {
          width: 13%;

          a {
            color: #666;
          }
        }
      }
    }
  }

  .cart-tool {
    overflow: hidden;
    border: 1px solid #ddd;

    .select-all {
      padding: 10px;
      overflow: hidden;
      float: left;

      span {
        vertical-align: middle;
      }

      input {
        vertical-align: middle;
      }
    }

    .option {
      padding: 10px;
      overflow: hidden;
      float: left;

      a {
        float: left;
        padding: 0 10px;
        color: #666;
      }
    }

    .money-box {
      float: right;

      .chosed {
        line-height: 26px;
        float: left;
        padding: 0 10px;
      }

      .sumprice {
        width: 200px;
        line-height: 22px;
        float: left;
        padding: 0 10px;

        .summoney {
          color: #c81623;
          font-size: 16px;
        }
      }

      .sumbtn {
        float: right;

        a {
          display: block;
          position: relative;
          width: 96px;
          height: 52px;
          line-height: 52px;
          color: #fff;
          text-align: center;
          font-size: 18px;
          font-family: "Microsoft YaHei";
          background: #e1251b;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
