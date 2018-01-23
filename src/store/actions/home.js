import * as Types from '../action-types';
let actions = {
  // 更新当前选择的课程
  updateCurrentLesson(lesson){
    return {type:Types.SET_CURRENT_LESSON,lesson}
  }
};
export default actions;