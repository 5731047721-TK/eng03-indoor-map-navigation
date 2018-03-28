import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FloorOne from './map.js';
import FloorTwo from './b3FloorTwo.js';
import FloorBox from './Floorbar.js';

// ========================================
class App extends React.Component {

  render() {

      return (
          <div className='App'>
              <div>
              <FloorOne />
              </div>
              <FloorBox />
              <div>
              </div>
          </div>
      );
  }
}

ReactDOM.render(
  
  <App />,
 
  document.getElementById('root')
);
