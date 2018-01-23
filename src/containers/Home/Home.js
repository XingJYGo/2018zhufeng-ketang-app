import React from 'react';
import './index.less'
import HomeHeader from "./HomeHeader";
import {connect} from 'react-redux';
import actions from '../../store/actions/home'
import HomeSlider from "./HomeSlider";
@connect(state=>({...state.home}),actions)
export default class Home extends React.Component {
  // 选择当前哪门课程，做筛选用
  componentDidMount(){
    if(this.props.sliders.length === 0){// 如果没有数据我才请求 redux里有数据了我就不请求了
      this.props.getSlidersAPI();
    }
  }
  selectCurrentLesson = (val) =>{ // val是当前选择的课程
      this.props.updateCurrentLesson(val);
  };
  render(){
    return <div>
      <HomeHeader selectCurrentLesson={this.selectCurrentLesson}/>
      <div className="content">
        <HomeSlider/>
      </div>
    </div>
  }
}
