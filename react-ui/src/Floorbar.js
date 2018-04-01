import React from 'react';
import FloorOne from './b3FloorOne.js';
import FloorTwo from './b3FloorTwo.js';
import FloorThree from './b3FloorThree.js';
import FloorFour from './b3FloorFour.js';


//import ReactDOM from 'react-dom';

class FloorBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentFloor: 1};
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick(event) {
        event.currentTarget.style.backgroundColor = '#ccc';
        this.setState({currentFloor: event.target.title});
      }
     render(){
       let m = null;
       if(this.state.currentFloor == 2)m = <FloorTwo/>
       else if(this.state.currentFloor == 3)m = <FloorThree/>
       else if(this.state.currentFloor == 4)m = <FloorFour/>
       else  m = <FloorOne/>
     return(
       <div>
        {m}
      <div className="mapboxgl-ctrl-bottom-left" style={{zIndex:1}}>
        <div className="mazemap-control-zlevel-bar custom-zlevel-bar mapboxgl-ctrl-group mapboxgl-ctrl" >
          <div className="btns-container flex-container">
          <button className="z-label" onClick={this.handleClick} title="4">4</button>
          <button className="z-label" onClick={this.handleClick} title="3">3</button>
          <button className="z-label" onClick={this.handleClick} title="2">2</button>
          <button className="z-label" onClick={this.handleClick} title="1">1</button>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default FloorBox;