import React from 'react';
import ReactDOM from 'react-dom';
import FloorOne from './b3FloorOne.js';
import FloorTwo from './b3FloorTwo.js';
import FloorThree from './b3FloorThree.js';
import FloorFour from './b3FloorFour.js';
import HeaderNavigation from './HeaderNavigation'
import { Container, Row, Col } from 'reactstrap';
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
      return (
        <Container>
                <Row>
                    <HeaderNavigation />
                    
                </Row>
                
                    <FloorTwo />
                    
                

         </Container>
      );
  }
}

ReactDOM.render(
  
  <App />,
 
  document.getElementById('root')
);
