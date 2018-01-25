import * as Types from './action-types';

export default {
  add(){
    return {type:Types.INCREMENT,amount:1}
  },
  minus(){
    return {type:Types.DECREMENT,amount:3}
  }
}