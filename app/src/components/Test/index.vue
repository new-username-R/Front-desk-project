<template lang="">
  <div>
    <h1>求和是{{ num }}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="jian">减</button>
    <button @click="witeadd">等等加</button>
    <button @click="addodd">奇数加</button>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      n:1
    };
  },
  computed:{
    // ...mapState({})
    num(){
     return  this.$store.state.num
    }
  },
  methods: {
    add() {
      this.$store.dispatch('add',this.n)
    },

    jian() {
      this.$store.dispatch('jian',this.n)

    },
    witeadd() {

    },
    addodd() {

    },
  },
  mounted() {
    console.log(this)
  },
};
</script>
<style lang="less">
// * {
//   margin: 20px;
// }
// div {
//   font-size: 30px;
//   width: 300px;
//   height: 300px;
//   margin: 10px;
//   background: pink;
// }
</style>
