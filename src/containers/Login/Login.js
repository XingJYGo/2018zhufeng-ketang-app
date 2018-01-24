import React from 'react';
import './index.less'
import MHeader from "../../components/MHeader/MHeader";
import {Link} from 'react-router-dom';
export default class Login extends React.Component {
  render(){
    return <div className="login">
      <MHeader>登录</MHeader>
      <div>
        <ul>
          <li>
            <label htmlFor="username">用户名</label>
            <input type="text" id="username"/>
          </li>
          <li>
            <label htmlFor="password">密码</label>
            <input type="text" id="password"/>
          </li>
          <li>
            <Link to={'/reg'}>前往注册</Link>
          </li>
          <li>
            <button>登录</button>
          </li>
        </ul>
      </div>
    </div>
  }
}
