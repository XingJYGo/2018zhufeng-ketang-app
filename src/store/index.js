import {createStore} from '../redux';

import reducer from './reducer';
// 改写了dispatch的方法
let reduxPromise = store=>dispatch=>action=>{ //action可能是promise
  if(action.then){ // 说明是promise
    action.then(dispatch); //dispatch就是一个函数，所以没有处理失败
  }else if(action.payload&&action.payload.then){
    action.payload.then(function (data) { // promise是异步函数
       dispatch({...action,payload:data})
    },function (err) {
      console.log({...action,payload:err})
       dispatch({...action,payload:err})
    });
    return;
  }
  return dispatch(action);
};
// 应用中间件 redux内部的方法
let applyMiddleWare = middleware => createStore => reducer =>{
  let store = createStore(reducer); // 创建一个store
  let middle = middleware(store);
  let dispatch = middle(store.dispatch);
  return {...store,dispatch}
};
// applyMiddleware可以返回一个store，store中的dispatch方法是logger最后的返回值
let store = applyMiddleWare(reduxPromise)(createStore)(reducer);
export default store;



/*//let old = store.dispatch; //存一下以前的方法
 store.dispatch = function (action) {
 console.log(store.getState().number); //派发前的
 old(action);
 console.log(store.getState().number); //派发后的
 };*/