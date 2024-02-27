<template lang="">
    <div class="fr page">
      <button :disabled="pageNo == 1" @click="$emit('getPaegNo',pageNo-1)">上一页</button>
      <button v-if="startNumAndEndNum.start > 1" @click="$emit('getPaegNo',1) " :class="{active:pageNo==1}">1</button>
      <button disabled="true" v-if="startNumAndEndNum.start > 2">...</button>
  
      <button
        v-for="(page, index) in startNumAndEndNum.end"
        :key="index"
        v-show="page >= startNumAndEndNum.start"
        @click="$emit('getPaegNo',page)"
        :class="{active:pageNo==page}"
      >
        {{ page }}
      </button>
  
      <button disabled="true" v-if="startNumAndEndNum.end < totalPage - 1">
        ...
      </button>
      <button v-if="startNumAndEndNum.end < totalPage" @click="$emit('getPaegNo',totalPage)" :class="{active:pageNo==totalPage}">{{ totalPage }}</button>
      <button :disabled="pageNo == totalPage" @click="$emit('getPaegNo',pageNo+1)">下一页</button>
  
      <button style="margin-left: 30px;width:80px">共{{ total }}页</button>
    </div>
  </template>
  <script>
  export default {
    name: "Pagination",
    props: ["continues", "total", "pageSize", "pageNo","totalPages"],
    // mounted() {
    //     console.log(this.continues);
    // },
    computed: {
      // 共多少页
      totalPage() {
        // 向上取整
        return Math.ceil(this.total / this.pageSize);
      },
      startNumAndEndNum() {
        // 连续页码为5页[就是至少为5页],如果低于5页,将会出现BUG
        // 不正常现象为:数据一共有四页,却显示有5页
        let start = 0,
          end = 0;
        if (this.continues > this.totalPage) {
          start = 1;
          end = this.totalPage;
        } else {
          // 正常现象:连续页码数小于总页码
          start = this.pageNo - parseInt(this.continues / 2);
          end = this.pageNo + parseInt(this.continues / 2);
          if (start < 1) {
            start = 1;
            end = this.continues;
          }
          if (end > this.totalPage) {
            end = this.totalPage;
            start = this.totalPage - this.continues + 1;
          }
        }
        return { start, end };
      },
    },
  };
  </script>
  <style lang="less" scoped>
  .active{
    background: skyblue;
  }
  div {
    text-align: center;
  }
  button {
    width: 50px;
    height: 20px;
    line-height: 10px;
    margin: 0 5px;
    font-size: 12px;
  }
  </style>
  