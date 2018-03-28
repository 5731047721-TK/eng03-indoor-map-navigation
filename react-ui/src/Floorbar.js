import React from 'react';
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
          
      }
     render(){
     return(
      <div className="mapboxgl-ctrl-bottom-left" style={{zIndex:1}}>
        <div className="mazemap-control-zlevel-bar custom-zlevel-bar mapboxgl-ctrl-group mapboxgl-ctrl" >
          <div className="btns-container flex-container">
          <button className="z-label" onClick={this.handleClick} title="Floor 4">4</button>
          <button className="z-label" onClick={this.handleClick} title="Floor 3">3</button>
          <button className="z-label" onClick={this.handleClick} title="Floor 2">2</button>
          <button className="z-label" onClick={this.handleClick} title="Floor 1">1</button>
          </div>
        </div>
      </div>
    );
  }
}

export default FloorBox;