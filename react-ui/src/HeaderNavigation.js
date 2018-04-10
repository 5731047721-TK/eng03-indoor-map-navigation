// export default HeaderNavigation;
import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';





class HeaderNavigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            startPoint: '',
            endPoint: '',
            navStatus: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        var pattern = /path/ig
        pathsid = pathsid.replace(pattern, '')
        patheid = patheid.replace(pattern, '')
        //location.href = '/api/1/' + pathid
        window.location = '/api/' + pathsid +'/'+patheid
        
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
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <label  text='Start:' size='3'>
                            
                            <input  id="startPoint"  placeholder='Start point' value={this.state.startPoint} onChange={this.handleChange} size='4' />
                        </label>
                        <label  text='End  :' size='3'> 
                            
                            <input id="endPoint"  ref="EndInput" placeholder='End Point' value={this.state.endPoint} onChange={this.handleChange} size='4' />
                        </label>
                        <input type="submit" value="Submit" />
                        </form>
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