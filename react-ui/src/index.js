import React from 'react';
import ReactDOM from 'react-dom';
import FloorOne from './b3FloorOne.js';
import FloorTwo from './b3FloorTwo.js';
import FloorThree from './b3FloorThree.js';
import FloorFour from './b3FloorFour.js';
import HeaderNavigation from './HeaderNavigation'
import { Container,Label,Input,InputGroup,InputGroupAddon, ButtonGroup,Row,Col,Nav,NavItem,NavLink, Button } from 'reactstrap';
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
            data: [],
            isNavigate: false
        };

        this.onClick = this.onClick.bind(this);
        this.handleChangeFloor = this.handleChangeFloor.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeFloor(event){ 
        this.setState({currentFloor: event.target.id});
        console.log(event.target.id)
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

    handleSubmit(event) {
        event.preventDefault();


        var pathsid = this.state.startPoint
        var patheid = this.state.endPoint
        //location.href = '/api/1/' + pathid
        //window.location = '/api/' + pathsid +'/'+patheid
        var path = 'api/' + pathsid +'/'+patheid
        fetch(path)
        .then((Response) => Response.json())
        .then((res) => {
          console.log(res)
          this.setState({
            data: res,
            isNavigate: true
          })
        })
        console.log(this.state.data);
    }

    
    
  render() {
      let m = null
      
      let nav;

      nav = <Col >
         <ButtonGroup>
          <Button size="sm" id = 'floor1' onClick = {this.handleChangeFloor} color="info">floor1</Button>
          <Button size="sm" id = 'floor2' onClick = {this.handleChangeFloor} color="info">floor2</Button>
          <Button size="sm" id = 'floor3' onClick = {this.handleChangeFloor} color="info">floor3</Button>
          <Button size="sm" id = 'floor4' onClick = {this.handleChangeFloor} color="info">floor4</Button>
          </ButtonGroup>
      </Col>

      if(this.state.currentFloor === 'floor2') m = <FloorTwo sPoint = {this.state.startPoint}  callbackSelectPoint={this.myCallbackSelectPoint}/>
      else if(this.state.currentFloor === 'floor3') m = <FloorThree sPoint = {this.state.startPoint}  callbackSelectPoint={this.myCallbackSelectPoint}/>
      else if(this.state.currentFloor === 'floor4') m = <FloorFour sPoint = {this.state.startPoint}  callbackSelectPoint={this.myCallbackSelectPoint}/>
      else m = <FloorOne sPoint = {this.state.startPoint}  callbackSelectPoint={this.myCallbackSelectPoint}/>
      const {isLoading , info} = this.state;
      return (
        <Container>
                <Row>
                    <Col sm="1"><img src={process.env.PUBLIC_URL + '/favicon.ico'} height="42" width="40" /></Col>
                    {nav}
                    <Col sm="6">
                        <InputGroup>     
                            <Input sm="4" id="startPoint"  ref="EndInput" placeholder='Start Point' value= {this.state.info[this.state.startPoint]}  />
                            <Input sm="4" id="endPoint"  ref="EndInput" placeholder='End Point' value={this.state.info[this.state.endPoint]}  />
                            <InputGroupAddon addonType="append">
                                <Button color="success" onClick={this.handleSubmit.bind(this)}>Submit</Button>
                            </InputGroupAddon> 
                        </InputGroup>    
                    </Col>
                </Row>
                {
                    !isLoading  && this.state.selectPoint !== '' ? <h3>{info[this.state.selectPoint]+' '} 
                    <Button outline color="success" size="sm" onClick = {this.onClick} id = 'startPoint'>Set as Start Point</Button>{' '}  
                    <Button outline color="success" size="sm" onClick = {this.onClick} id = 'endPoint'>Set as Destination</Button></h3> 
                    : null
                                
                 }
                 {m}
                <Row>
                    <HeaderNavigation data = {this.state.data} info = {this.state.info} isNavigate = {this.state.isNavigate}
                    sPoint = {this.state.startPoint} ePoint = {this.state.endPoint} 
                    callbackStartPoint={this.myCallbackStartPoint} callbackEndPoint={this.myCallbackEndPoint}/>
                    
                </Row>
            
                    
                

         </Container>
      );
  }
}

ReactDOM.render(
  
  <App />,
 
  document.getElementById('root')
);
