// export default HeaderNavigation;
import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Form,Label,Input } from 'reactstrap';




class HeaderNavigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            startPoint: '',
            endPoint: '',
            data: [],
            navStatus: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.id]: event.target.value});
    }

    handleClick(e, tab) {
        this.setState({ navStatus: tab })
        
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
          //console.log(res)
          this.setState({
            data: res,
          })
        })
        console.log(this.state.data);
    }

    onClick(e){
        if(e){
          
          //if(e.target.id === 'path25') this.setState( {Color:"	#FFA07A",})
          alert(this.state.data);
          console.log(this.state.data);
          // console.log(this.State.Color)
        }
      }

    render() {
        let nav;

        nav = <Nav pills style={{ position: "relative", left: 650 }}>
            <NavItem>
                <NavLink href="/" >Home</NavLink>
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


        return (
            <Container>
                <Row>
                    <Col sm="1"><img src={process.env.PUBLIC_URL + '/favicon.ico'} height="42" width="40" /></Col>
                    <Col >{nav}</Col>
                </Row>
                <Row>
                    <Col sm="8"><h1> Eng03-indoor-map </h1></Col>
                    <Col sm="4">
                    <Form onSubmit={this.handleSubmit.bind(this)}>
                        <Label  text='Start:' size='3'>
                            
                            <Input  id="startPoint"  placeholder='Start point' value={this.state.startPoint} onChange={this.handleChange} size='8' />
                        </Label>
                        <Label  text='End  :' size='3'> 
                            
                            <Input id="endPoint"  ref="EndInput" placeholder='End Point' value={this.state.endPoint} onChange={this.handleChange} size='8' />
                        </Label>
                        <Input type="submit" value="Submit" />
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col sm="4"><p> Chulalongkorn University Facullty of Engineering </p></Col>
                </Row>
                 <hr />
            </Container>
        );
    }

}

export default HeaderNavigation;