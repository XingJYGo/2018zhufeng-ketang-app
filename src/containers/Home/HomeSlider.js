import React from 'react';
import ReactSwipe from 'react-swipe';
export default class HomeSlider extends React.Component {
  render(){
    return <div>
      <ReactSwipe className="carousel" swipeOptions={{continuous: false}}>
        <div>PANE 1</div>
        <div>PANE 2</div>
        <div>PANE 3</div>
      </ReactSwipe>
    </div>
  }
}
