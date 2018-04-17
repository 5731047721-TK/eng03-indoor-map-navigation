import React from 'react';
import ReactDOM from 'react-dom';
import FloorOne from './b3FloorOne.js';
import FloorTwo from './b3FloorTwo.js';
import FloorThree from './b3FloorThree.js';
import FloorFour from './b3FloorFour.js';
import HeaderNavigation from './HeaderNavigation'
import { Container, Row,Col, Button } from 'reactstrap';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';


// ========================================
class App extends React.Component {
    constructor(props) {
    super(props);
        this.state = {
            isLoading: true,
            selectPoint: '',
            startPoint: '',
            endPoint: '',
            currentFloor: '',
            info: [],
            isNavi: false
        };

        this.onClick = this.onClick.bind(this);
    }

    componentDidMount(){
        console.log("component did mount");
        this.fetchData()
        
    }

    componentWillUpdate(nextProps, nextState){
        localStorage.setItem('info',JSON.stringify(nextState.info));
    }

    fetchData(){
        var path = 'api/info'
        fetch(path)
        .then((Response) => Response.json())
        .then((res) => {
          console.log(res)
          this.setState({
            info: res,
            isLoading: false,
          })
          
        })
    }

   

    myCallbackStartPoint = (dataFromChild) => {
        this.setState({
            startPoint: dataFromChild
          })
        console.log('sP:'+dataFromChild)
    }

    myCallbackEndPoint = (dataFromChild) => {
        this.setState({
            endPoint: dataFromChild
          })
        console.log('eP:'+dataFromChild)
    }

    myCallbackSelectPoint = (dataFromChild) => {
        this.setState({
            selectPoint: dataFromChild
          })
        console.log('select:'+dataFromChild)
        console.log('isLoading:'+this.state.isLoading+' length :'+this.state.info.length)
    }

    onClick(e){
        this.setState({[e.target.id]: this.state.selectPoint});
    }

    
    
  render() {
      let m = null
      //console.log(window.location.pathname)

      if(window.location.pathname == '/floor2') m = <FloorTwo />
      else if(window.location.pathname == '/floor3') m = <FloorThree />
      else if(window.location.pathname == '/floor4') m = <FloorFour />
      else m = <FloorOne sPoint = {this.state.startPoint}  callbackSelectPoint={this.myCallbackSelectPoint}/>
      const {isLoading , info} = this.state;
      return (
        <Container>
               
                {
                    !isLoading  && this.state.selectPoint !== '' ? <h3>{info[this.state.selectPoint]+' '} 
                    <Button outline color="success" size="sm" onClick = {this.onClick} id = 'startPoint'>Set as Start Point</Button>  
                    <Button outline color="success" size="sm" onClick = {this.onClick} id = 'endPoint'>Set as Destination</Button></h3> 
                    : null
                                
                 }
                 {m}
                <Row>
                    <HeaderNavigation sPoint = {this.state.startPoint} ePoint = {this.state.endPoint} callbackStartPoint={this.myCallbackStartPoint} callbackEndPoint={this.myCallbackEndPoint}/>
                    
                </Row>
            
                    
                

         </Container>
      );
  }
}

ReactDOM.render(
  
  <App />,
 
  document.getElementById('root')
);
