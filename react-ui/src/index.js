import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FloorBox from './Floorbar.js';

// ========================================
class App extends React.Component {
    constructor(props) {
    super(props);
        this.state = {
            startPoint: "",
            endPoint: "",
            isNavi: false,
        };
    }
  render() {

      return (
          <div className='App'>
              <div>
              <FloorBox/>
              </div>
          </div>
      );
  }
}

ReactDOM.render(
  
  <App />,
 
  document.getElementById('root')
);
