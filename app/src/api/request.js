// 对axios进行二次封装
import axios from "axios";
// 引入进度条
import nprogress from 'nprogress'
// 引入进度条样式
import "nprogress/nprogress.css"
import store from '@/store'
// console.log(nprogress.start());
// 利用axios的对象方法 create 去创建一个axios实例
const requests = axios.create({
  // 配置对象
  // 基础路径，发送请求时会出现api
  baseURL: "/api",
  //设置请求超时
  timeout: 5000,
});
//请求拦截器：发送请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
requests.interceptors.request.use((config) => {
  //设置游客
  if(store.state.detail.uuid_token){
    config.headers.userTempId=store.state.detail.uuid_token
  }
  //config:配置对象，对象里面有一个属性很重要，header请求头
  nprogress.start()
  return config;
});
// 响应拦截器
requests.interceptors.response.use(
  (res) => {
    //成功的回调函数：服务器响应回来数据以后，响应拦截器可以检测到做一些事情
    // console.log(res.data)
    nprogress.done()
    return res.data;
  },
  (error) => {
    //响应失败的回调函数
    return Promise.reject(new Error("faile"));
  }
);

export default requests;
