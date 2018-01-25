let reduxPromise = store=>dispatch=>action=>{ //action可能是promise
  if(action.then){ // 说明是promise
    return action.then(dispatch); //dispatch就是一个函数，所以没有处理失败
  }else if(action.payload&&action.payload.then){
    action.payload.then(function (data) { // promise是异步函数
      dispatch({...action,payload:data});
    },function (err) {
      dispatch({...action,payload:err});
    });
    return;
  }
  return dispatch(action);
};