import * as Types from '../action-types';
let initState = {
  user:null,
  msg:'',
  success:'',
  err:0
};
function session(state=initState,action) {
  switch (action.type){
    case Types.SET_USER_INFO: // {user,msg,success,err}
      return {...action.user} // 用获取的数据放到redux中
  }
  return state;
}
export default session