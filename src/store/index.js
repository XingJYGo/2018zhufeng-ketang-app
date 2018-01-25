import {createStore} from '../redux';

import reducer from './reducer';


// 改写了dispatch的方法
// let logger = store => dispatch => action =>{ // 最后这个函数是用户派发执行的
//   console.log(store.getState().number);
//   dispatch(action); // 进行动作的派发
//   console.log(store.getState().number);
// };
let reduxThunk = store => dispatch => action =>{ //dispatch(actions.add())
  if(typeof action === 'function'){ //如果是函数让其执行
    return action(dispatch,store.getState)
  }
  return dispatch(action); // 按照原来的逻辑处理
};
// 应用中间件 redux内部的方法
let applyMiddleWare = middleware => createStore => reducer =>{
  let store = createStore(reducer); // 创建一个store
  let middle = middleware(store);
  let dispatch = middle(store.dispatch)
  return {...store,dispatch}
};
// applyMiddleware可以返回一个store，store中的dispatch方法是logger最后的返回值
let store = applyMiddleWare(reduxThunk)(createStore)(reducer);
export default store;



/*//let old = store.dispatch; //存一下以前的方法
 store.dispatch = function (action) {
 console.log(store.getState().number); //派发前的
 old(action);
 console.log(store.getState().number); //派发后的
 };*/