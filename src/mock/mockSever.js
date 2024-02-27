import Mock from 'mockjs'
// webpack默认暴露：图片、json数据格式
import banner from './banner.json'
import floor from './floor.json'
// Mock数据：第一个为请求地址、第二个参数请求数据
Mock.mock("/mock/banner",{code:200,data:banner})//首页大轮播图数据
Mock.mock("/mock/floor",{code:200,data:floor})//首页小播图数据