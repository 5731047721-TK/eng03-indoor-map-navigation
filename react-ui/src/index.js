import React from 'react';
import ReactDOM from 'react-dom';
import FloorOne from './b3FloorOne.js';
import FloorTwo from './b3FloorTwo.js';
import FloorThree from './b3FloorThree.js';
import FloorFour from './b3FloorFour.js';
import {PinchView} from 'react-pinch-zoom-pan'
import HeaderNavigation from './HeaderNavigation'
import { Container, Row } from 'reactstrap';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';


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
      let m = null
      //console.log(window.location.pathname)
      if(window.location.pathname == '/floor1') m = <FloorOne />
      else if(window.location.pathname == '/floor2') m = <FloorTwo />
      else if(window.location.pathname == '/floor3') m = <FloorThree />
      else if(window.location.pathname == '/floor4') m = <FloorFour />
      else m = <FloorOne />
      return (
        <Container>
                <Row>
                    <HeaderNavigation />
                    
                </Row>
                <PinchView debug backgroundColor='#ddd' maxScale={8} containerRatio={((250 / 643) * 100)}>
                   {m}
                </PinchView>
                 
                    
                

         </Container>
      );
  }
}

ReactDOM.render(
  
  <App />,
 
  document.getElementById('root')
);
