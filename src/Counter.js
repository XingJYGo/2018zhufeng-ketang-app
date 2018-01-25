import React from 'react';
import store from './store/index'
export default class Counter extends React.Component {
  render(){
    return <div>{store.getState().number}</div>
  }
}
