import * as Types from './action-types';

export default {
  add(){
    return function (dispatch,getState) {
      setTimeout(()=>{
        dispatch({type:Types.INCREMENT,amount:1});
      },1000)
    }
  },
  minus(){
    return {type:Types.DECREMENT,amount:3}
  }
}