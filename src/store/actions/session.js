import * as Types from '../action-types';
import {toReg} from '../../api/session'
let actions = {
  toRegAPI(username,password,history){ // history是组件中的
    // 如果注册成功了，跳转页面 跳转到登录页
    return function (dispatch,getState) {
      toReg(username,password).then(function (data) { // data为我们的服务端返回的结果
        dispatch({type:Types.SET_USER_INFO,user:data});
        if(data.err===0) { //成功了,跳转页面
          setTimeout(()=>{
            history.push('/login');
          },1000)
        }
      });
    }
  },
  clearMessage(){
    return {type:Types.CLEAR_MESSAGE,info:{msg:'',success:'',err:0}}
  }
};
export default actions