<template>
  <div id="app">
    <Header></Header>
    <router-view ></router-view>
    <Footer v-show="$route.meta.show"></Footer>
    
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    // Test
  },
  // APP mounted只挂载一次，提高性能，避免多次请求
 mounted(){
  //通知vuex发送请求，获取数据，存储于仓库当中
  this.$store.dispatch("categoryList");
  console.log(this);
 }
}
</script>

<style>

</style>
