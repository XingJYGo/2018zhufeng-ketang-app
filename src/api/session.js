import axios from './index';

// 注册接口 {user:null,msg:'',success,err}
export function toReg(username,password) {
  return axios.post('/reg',{username,password});
}