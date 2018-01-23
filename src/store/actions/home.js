import * as Types from '../action-types';
import {getSliders} from '../../api/home'
let actions = {
  // 更新当前选择的课程
  updateCurrentLesson(lesson){
    return {type:Types.SET_CURRENT_LESSON,lesson}
  },
  getSlidersAPI(){
    return function (dispatch,getState) { // redux-thunk
      dispatch({type:Types.SET_SLIDERS,payload:getSliders()}); //redux-promise的用法 可以将payload的promise执行，执行后将内容放到action.payload中进行派发 {type:'SET_SLIDERS',payload:[{},{},{}]}
    }
  }
};
export default actions;