import React from 'react';
import './index.less'
import MHeader from "../../components/MHeader/MHeader";
import {connect} from 'react-redux';
import actions from '../../store/actions/session'
@connect(state=>({}),actions)
export default class Reg extends React.Component {
  render(){
    return <div className="reg">
      <MHeader>注册</MHeader>
      <div>
        <ul><li>
            <label htmlFor="username">用户名</label>
            <input type="text" id="username" ref={x=>this.username=x}/>
          </li>
          <li><label htmlFor="password">密码</label>
            <input type="text" id="password" ref={x=>this.password=x}/>
          </li>
          <li>
            <button onClick={()=>{
              this.props.toRegAPI(this.username.value,this.password.value,this.props.history);
            }}>注册</button>
          </li>
        </ul>
      </div>
    </div>
  }
}
