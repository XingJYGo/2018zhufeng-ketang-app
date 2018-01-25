let reduxThunk = store => dispatch => action =>{ //dispatch(actions.add())
  if(typeof action === 'function'){ //如果是函数让其执行
    return action(dispatch,store.getState)
  }
  return dispatch(action); // 按照原来的逻辑处理
};