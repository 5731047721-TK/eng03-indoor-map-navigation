// export default HeaderNavigation;
import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';





class HeaderNavigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOwner: true,
            navStatus: ""
        }
    }

    handleClick(e, tab) {
        this.setState({ navStatus: tab })
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
                    <Col ><span>{nav}</span></Col>
                </Row>
                <Row>
                    <Col sm="8"><h1> Eng03-indoor-map </h1></Col>
                    <Col sm="4"><form>
                        <label>
                            Start:
                            <input type="text" name="name" />
                        </label>
                        <label>
                            End  :
                            <input type="text" name="name" />
                        </label>
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