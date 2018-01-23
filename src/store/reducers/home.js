// 一个页面一个reducer
import * as Types from '../action-types'
let initState = {
  currentLesson:'all',
  sliders:[]
};
function home(state=initState,action) {
  switch (action.type){
    case Types.SET_CURRENT_LESSON:
      return {...state,currentLesson:action.lesson}
    case Types.SET_SLIDERS:
      return {...state,sliders:action.payload}
  }
  return state;
}
export default home