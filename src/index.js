import React,{Component} from 'react'
import ReactDOM,{render} from 'react-dom';
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
// 配置路由的组件
import Home from "./containers/Home/Home";
import Profile from "./containers/Profile/Profile";
import Lesson from "./containers/Lesson/Lesson";
import App from "./containers/App";
// 组件分为容器组件和基础组件
ReactDOM.render(<Router>
  <App>
    <Switch> {/*匹配path 匹配后渲染 并且不再继续渲染*/}
      <Route path="/" exact={true} component={Home}/>
      <Route path="/lesson" component={Lesson}/>
      <Route path="/profile" component={Profile}/>
    </Switch>
  </App>
</Router>,window.root);
