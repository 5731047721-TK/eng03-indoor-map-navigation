import React from 'react';
import ReactDOM from 'react-dom';
import FloorOne from './b3FloorOne.js';
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
                
                    <FloorOne />
                    
                

         </Container>
      );
  }
}

ReactDOM.render(
  
  <App />,
 
  document.getElementById('root')
);
