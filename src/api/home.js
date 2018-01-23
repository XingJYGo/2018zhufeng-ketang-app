//获取轮播图
import axios from './index';
// 每个接口返回的都是promise
export function getSliders() {
  return axios.get('/sliders')
}