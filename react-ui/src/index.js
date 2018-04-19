import React from 'react';
import ReactDOM from 'react-dom';
import FloorOne from './b3FloorOne.js';
import FloorTwo from './b3FloorTwo.js';
import FloorThree from './b3FloorThree.js';
import FloorFour from './b3FloorFour.js';
import HeaderNavigation from './HeaderNavigation'
import { Container,Input,InputGroup,InputGroupAddon, ButtonGroup,Row,Col, Button } from 'reactstrap';
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
            naviData:[],
            routeData:[],
            f1:[],
            f2:[],
            f3:[],
            f4:[],
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
          var floor1 = []
          var floor2 = []
          var floor3 = []
          var floor4 = []
          for(var key in res){
              //console.log('key '+key.slice(1,2)+' value '+res[key])
              if(key.slice(1,2)==1)floor1[key] = res[key]
              else if(key.slice(1,2)==2)floor2[key] = res[key]
              else if(key.slice(1,2)==3)floor3[key] = res[key]
              else if(key.slice(1,2)==4)floor4[key] = res[key]
          }  
          //console.log(floor1)
          //console.log(floor2)
          //console.log(floor3)
          //console.log(floor4)
          this.setState({
            info: res,
            f1:floor1,
            f2:floor2,
            f3:floor3,
            f4:floor4,
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
        //console.log('isLoading:'+this.state.isLoading+' length :'+this.state.info.length)
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
          //console.log(res.length)
          var isWord = true
          var navi = []
          var route = []
          for(var i = 0;i < res.length;i++){
              if(isWord){
                    if(res[i] !== '#'){
                        navi.push(res[i])
                    }else isWord = false
              }else{
                    route.push(res[i])
              }
          }
          //console.log(navi)
          //console.log(route)
          this.setState({
            data: res,
            naviData: navi,
            routeData: route,
            isNavigate: true
          })
        })
    }

    
    
  render() {
      let m = null
      
      let nav;

      nav = <Col >
         <ButtonGroup>
          <Button color="primary" size="sm" id = 'floor1' onClick = {this.handleChangeFloor} color="info">floor1</Button>
          <Button color="primary" size="sm" id = 'floor2' onClick = {this.handleChangeFloor} color="info">floor2</Button>
          <Button color="primary" size="sm" id = 'floor3' onClick = {this.handleChangeFloor} color="info">floor3</Button>
          <Button color="primary" size="sm" id = 'floor4' onClick = {this.handleChangeFloor} color="info">floor4</Button>
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
                    <Col sm="1"><a href="/"> <img alt="icon" src={process.env.PUBLIC_URL + '/favicon.ico'} height="42" width="40" /></a></Col>
                    {nav}
                    <Col sm="6">
                        <InputGroup>     
                            <Input sm="4" id="startPoint"  ref="EndInput" placeholder='Start Point' value= {this.state.info[this.state.startPoint]}  disabled/>
                            <Input sm="4" id="endPoint"  ref="EndInput" placeholder='End Point' value={this.state.info[this.state.endPoint]} disabled />
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
                    <HeaderNavigation data = {this.state.naviData} info = {this.state.info} isNavigate = {this.state.isNavigate}
                    sPoint = {this.state.startPoint} ePoint = {this.state.endPoint} 
                    floor1 = {this.state.f1} floor2 = {this.state.f2} floor3 = {this.state.f3} floor4 = {this.state.f4}
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
