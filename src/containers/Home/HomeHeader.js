import React from 'react';
import logo from '../../common/images/logo.png'
export default class HomeHeader extends React.Component {
  constructor(){
    super();
    this.state = {isShow:false}
  }
  changeShow = () =>{ // 改变显示还是隐藏的状态
    this.setState({isShow:!this.state.isShow})
  };
  render(){
    return (
      <div className="home-header">
        <div className="header-logo">
          <img src={logo} />
          <div onClick={this.changeShow}>
            {this.state.isShow?
              <i className="iconfont icon-guanbi"></i>:<i className="iconfont icon-liebiao"></i>}
          </div>
        </div>
        <ul className="header-menu">
          <li>全部课程</li>
          <li>React课程</li>
          <li>Vue课程</li>
        </ul>
      </div>)
  }
}
