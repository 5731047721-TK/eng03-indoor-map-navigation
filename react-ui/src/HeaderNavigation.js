// export default HeaderNavigation;
import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Form,FormGroup,Label,Input } from 'reactstrap';




class HeaderNavigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            isNavigate: false,
            startFloor:'',
            endFloor:'',
            currentFloor:'',
            info: [],
            data: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    /*componentDidMount(){
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
            isLoading: false
          })
          
        })
    }*/


    handleChange = (event) => {
        //this.setState({[event.target.id]: event.target.value});
        if(event.target.id === 'startPoint')this.props.callbackStartPoint(event.target.value);
        else  if(event.target.id === 'endPoint')this.props.callbackEndPoint(event.target.value);
        else this.setState({[event.target.id]: event.target.value});
    }


    onChange(event){
        var val = null;
            switch(event.target.value){
                case 'Stair1' :  val = 'b2_01';
                console.log('55555555');
            }
            this.setState({[event.target.id]: val});
        
      }


    handleSubmit(event) {
        event.preventDefault();


        var pathsid = this.props.sPoint
        var patheid = this.props.ePoint
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

    onClick(e){
        for(var key in this.state.info){
            //console.log(key, this.state.info[key]);
        }
      }

    render() {
        let nav;

        nav = <Nav >
            <NavItem>
                <NavLink onClick={this.onClick}>Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/floor1">floor1</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/floor2">floor2</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/floor3">floor3</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/floor4">floor4</NavLink>
            </NavItem>
        </Nav>

        let sRoom = null;
        let eRoom = null;
        if(this.state.startFloor == 'floor1'){
            sRoom = 
            <Input type="select" name="select place" id="startPoint" value={this.props.sPoint} onChange={this.handleChange}>
                <option>b1_1</option>
                <option>b1_2</option>
                <option>b1_3</option>
                <option>b1_4</option>
            </Input>
        }else if(this.state.startFloor == 'floor2'){
            sRoom = 
            <Input type="select" name="select place" id="startPoint" value={this.props.sPoint} onChange={this.handleChange}>
                <option>b2_01</option>
                <option>b2_02</option>
                <option>b2_03</option>
                <option>b2_04</option>
            </Input>
        }else if(this.state.startFloor == 'floor3'){
            sRoom = 
            <Input type="select" name="select place" id="startPoint" value={this.props.sPoint} onChange={this.handleChange}>
                <option>b3_01</option>
                <option>b3_02</option>
                <option>b3_03</option>
                <option>b3_04</option>
            </Input>
        }else if(this.state.startFloor == 'floor4'){
            sRoom = 
            <Input type="select" name="select place" id="startPoint" value={this.props.sPoint} onChange={this.handleChange}>
                <option>b4_01</option>
                <option>b4_02</option>
                <option>b4_03</option>
                <option>b4_04</option>
            </Input>
        }


        if(this.state.endFloor == 'floor1'){
            eRoom = 
            <Input type="select" name="select place" id="endPoint" value={this.props.ePoint} onChange={this.handleChange}>
                <option>b1_1</option>
                <option>b1_2</option>
                <option>b1_3</option>
                <option>b1_4</option>
            </Input>
        }else if(this.state.endFloor == 'floor2'){
            eRoom = 
            <Input type="select" name="select place" id="endPoint" value={this.props.ePoint} onChange={this.onChange}>
                <option id = 'b2_01'>Stair1</option>
                <option id = 'b2_02'>b2_2</option>
                <option id = 'b2_03'>b2_3</option>
                <option id = 'b2_04'>b2_4</option>
            </Input>
        }else if(this.state.endFloor == 'floor3'){
            eRoom = 
            <Input type="select" name="select place" id="endPoint" value={this.props.ePoint} onChange={this.handleChange}>
                <option>b3_1</option>
                <option>b3_2</option>
                <option>b3_3</option>
                <option>b3_4</option>
            </Input>
        }else if(this.state.endFloor == 'floor4'){
            eRoom = 
            <Input type="select" name="select place" id="endPoint" value={this.props.ePoint} onChange={this.handleChange}>
                <option>b4_1</option>
                <option>b4_2</option>
                <option>b4_3</option>
                <option>b4_4</option>
            </Input>
        }
        
        /*
          {
                                !isLoading && info.length > 0 ? info.map(info =>{
                                    return <li key = {info.id}>{info.id}</li>
                                }) : null                
            }
        */

       
        return (
            <Container>
                {
                    !this.state.isNavigate && this.state.data !== [] ?
                    <Container>
                    <Row>
                    <Col sm="1"><img src={process.env.PUBLIC_URL + '/favicon.ico'} height="42" width="40" /></Col>
                    <Col >{nav}</Col>
                    </Row>
                    <Row>
                        <Col sm="8"><h1> Eng03-indoor-map </h1></Col>
                    </Row>
                    <Row>
                        <Col sm="4">
                        <Form onSubmit={this.handleSubmit.bind(this)}>
                        <FormGroup>
                            <Label id = 'startPoint'  onChange={this.propsChange} for="exampleSelect">Start Point: Please select floor and room {this.props.sPoint}</Label>
                            <Input type="select" name="select floor" placeholder='select floor' id="startFloor" value={this.state.startFloor} onChange={this.handleChange}>
                                <option>floor1</option>
                                <option>floor2</option>
                                <option>floor3</option>
                                <option>floor4</option>
                            </Input>
                            {sRoom}
                            <Label for="exampleSelect">End Point: Please select floor and room</Label>
                            <Input type="select" name="select floor" placeholder='select floor' id="endFloor" value={this.state.endFloor} onChange={this.handleChange}>
                                <option>floor1</option>
                                <option>floor2</option>
                                <option>floor3</option>
                                <option>floor4</option>
                            </Input>  
                            {eRoom}
                        
                        </FormGroup>
                            <Label  text='Start :' size='3'>     
                                <Input id="startPoint"  ref="EndInput" placeholder='Start Point' value= {this.props.sPoint} onChange={this.handleChange} size='10' />
                            </Label>
                            <Label  text='End  :' size='3'> 
                                
                                <Input id="endPoint"  ref="EndInput" placeholder='End Point' value={this.props.ePoint} onChange={this.handleChange} size='10' />
                            </Label>
                            <Input type="submit" value="Submit" />
                            </Form>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="8"><p> Chulalongkorn University Facullty of Engineering </p></Col>
                    </Row>
                    <hr />
                    </Container>
                    
                 : <p>{this.state.data}}</p>
                }
             </Container>
        );
    }

}

export default HeaderNavigation;