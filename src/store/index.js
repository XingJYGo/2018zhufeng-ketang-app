import {createStore} from '../redux';

import reducer from './reducer';
// 改写了dispatch的方法
function compose(...fns) {
  return function (...args) {
    let last = fns.pop(); // 最后一个函数addFirst
    return fns.reduceRight(function (prev,next,curIndex,arr) {
      return next(prev);
    },last(...args))
  }
}
// logger1的dispatch其实是logger2的最后一个函数
let logger1 = store => next => action =>{
  console.log('1',store.getState().number);
  //next(action); // 进行动作的派发
  console.log('1',store.getState().number);
};
let logger2 = store => next => action =>{
  console.log('2',store.getState().number);
  next(action); // 进行动作的派发
  console.log('2',store.getState().number);
};
// 应用中间件 redux内部的方法
let applyMiddleWare = (...middlewares) => createStore => reducer =>{
  let store = createStore(reducer); // 创建一个store
  let middles = middlewares.map(middleware=>{ // 将两个middleware都执行
    return middleware(store)
  });//middles = [fn,fn]
  let dispatch = compose(...middles)(store.dispatch);
  return {...store,dispatch}
};
// applyMiddleware可以返回一个store，store中的dispatch方法是logger最后的返回值
let store = applyMiddleWare(logger1,logger2)(createStore)(reducer);
export default store;



/*//let old = store.dispatch; //存一下以前的方法
 store.dispatch = function (action) {
 console.log(store.getState().number); //派发前的
 old(action);
 console.log(store.getState().number); //派发后的
 };*/