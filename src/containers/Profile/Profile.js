import React from 'react';
import './index.less';
import avatar from '../../common/images/profile.png';
import bg from '../../common/images/login_bg.png';
import {Link} from 'react-router-dom';
export default class Profile extends React.Component {
  render(){
    return (
      <div className="profile">
        <div className="profile-bg">
          <img src={bg}/>
          <img src={avatar} className="avatar"/>
          <Link to={'/login'} className="login-btn">登录</Link>
        </div>
      </div>
    )
  }
}
