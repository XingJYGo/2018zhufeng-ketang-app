// 一个页面一个reducer
import * as Types from '../action-types'
let initState = {
  currentLesson:'all',
};
function home(state=initState,action) {
  switch (action.type){
    case Types.SET_CURRENT_LESSON:
      return {...state,currentLesson:action.lesson}
  }
  return state;
}
export default home