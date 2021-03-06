// export default HeaderNavigation;
import React, { Component } from 'react';
//import { Nav, NavItem, NavLink } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Label,Input,InputGroup,ListGroup,ListGroupItem,ListGroupItemHeading } from 'reactstrap';




class HeaderNavigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            startFloor:'floor1',
            endFloor:'floor1',
            startName:'',
            endName:'',
            currentFloor:'floor1',
            selectNavi: 0
            
        }
        this.handleChange = this.handleChange.bind(this);
        this.dropDownStartChange = this.dropDownStartChange.bind(this);
        this.dropDownEndChange = this.dropDownEndChange.bind(this);
        this.navigateClick = this.navigateClick.bind(this);
    }


    handleChange = (event) => {
        //this.setState({[event.target.id]: event.target.value});
        if(event.target.id === 'startPoint')this.props.callbackStartPoint(event.target.value);
        else  if(event.target.id === 'endPoint')this.props.callbackEndPoint(event.target.value);
        else this.setState({[event.target.id]: event.target.value});
    }

    dropDownStartChange = (event) => {
        const selectedIndex = event.target.options.selectedIndex;
        console.log(event.target.options[selectedIndex].getAttribute('data-id'));
        this.props.callbackStartPoint(event.target.options[selectedIndex].getAttribute('data-id'));
        this.setState({startName: event.target.value});
    }   
    

     dropDownEndChange = (event) => {
        //this.setState({[event.target.id]: event.target.value});
        const selectedIndex = event.target.options.selectedIndex;
        console.log(event.target.options[selectedIndex].getAttribute('data-id'));
        this.props.callbackEndPoint(event.target.options[selectedIndex].getAttribute('data-id'));
        this.setState({endName: event.target.value});
    }
    
    navigateClick(e){
        //console.log(e.target.id)
        this.setState({selectNavi: e.target.id});
    }




    render() {

        var listf1 = [];
        for(var key in this.props.floor1){
            listf1.push(<option data-id = {key}>{this.props.floor1[key]}</option>)
        } 

        var listf2 = [];
        for(var key in this.props.floor2){
            listf2.push(<option data-id = {key}>{this.props.floor2[key]}</option>)
        } 

        var listf3 = [];
        for(var key in this.props.floor3){
            listf3.push(<option data-id = {key}>{this.props.floor3[key]}</option>)
        } 

        var listf4 = [];
        for(var key in this.props.floor4){
            listf4.push(<option data-id = {key}>{this.props.floor4[key]}</option>)
        } 


        let sRoom = null;
        let eRoom = null;
        if(this.state.startFloor === 'floor1'){
            sRoom = 
            <Input type="select" placeholder="Select Place" name="select place" id="startPoint" value={this.state.startName} onChange={this.dropDownStartChange}>
                {listf1}
            </Input>
        }else if(this.state.startFloor === 'floor2'){
            sRoom = 
            <Input type="select" placeholder="Select Place" name="select place" id="startPoint" value={this.state.startName} onChange={this.dropDownStartChange}>
                {listf2}
            </Input>
        }else if(this.state.startFloor === 'floor3'){
            sRoom = 
            <Input type="select" placeholder="Select Place" name="select place" id="startPoint" value={this.state.startName} onChange={this.dropDownStartChange}>
                {listf3}
            </Input>
        }else if(this.state.startFloor === 'floor4'){
            sRoom = 
            <Input type="select" placeholder="Select Place" name="select place" id="startPoint" value={this.state.startName} onChange={this.dropDownStartChange}>
                {listf4}
            </Input>
        }


        if(this.state.endFloor === 'floor1'){
            eRoom = 
            <Input type="select" placeholder="Select Place" name="select place" id="endPoint" value={this.state.endName} onChange={this.dropDownEndChange}>
                {listf1}
            </Input>
        }else if(this.state.endFloor === 'floor2'){
            eRoom = 
            <Input type="select" placeholder="Select Place" name="select place" id="endPoint" value={this.state.endName} onChange={this.dropDownEndChange}>
                {listf2}
            </Input>
        }else if(this.state.endFloor === 'floor3'){
            eRoom = 
            <Input type="select" placeholder="Select Place" name="select place" id="endPoint" value={this.state.endName} onChange={this.dropDownEndChange}>
               {listf3}
            </Input>
        }else if(this.state.endFloor === 'floor4'){
            eRoom = 
            <Input type="select" placeholder="Select Place" name="select place" id="endPoint" value={this.state.endName} onChange={this.dropDownEndChange}>
                {listf4}
            </Input>
        }
        
        var count = 0
        const listInfo = this.props.data.map((info) =>
        <ListGroupItem className = {(this.state.selectNavi == count) ? "active" : ""} id = {count++}  onClick = {this.navigateClick}>{info}</ListGroupItem>
        
          );
        
       
        return (
            <Container>
                {
                    !this.props.isNavigate && this.props.data !== [] ?
                    <Container>
                    
                    <Row>
                        <Col sm="8"><h2> Eng03-indoor-map </h2></Col>
                    </Row>
                    <Row>
                        <Col >
                            <Label id = 'startPoint'  onChange={this.propsChange} for="exampleSelect">Start Point: Please select floor and room {this.props.sPoint}</Label>
                            <InputGroup>
                            <Input type="select" name="select floor" placeholder='select floor' id="startFloor" value={this.state.startFloor} onChange={this.handleChange}>
                                <option>floor1</option>
                                <option>floor2</option>
                                <option>floor3</option>
                                <option>floor4</option>
                            </Input>
                            {sRoom}
                            </InputGroup> 
                            <Label for="exampleSelect">End Point: Please select floor and room {this.props.ePoint}</Label>
                            <InputGroup>
                            <Input type="select" name="select floor" placeholder='select floor' id="endFloor" value={this.state.endFloor} onChange={this.handleChange}>
                                <option>floor1</option>
                                <option>floor2</option>
                                <option>floor3</option>
                                <option>floor4</option>
                            </Input>  
                            {eRoom}
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="8"><p> Chulalongkorn University Facullty of Engineering </p></Col>
                    </Row>
                    <hr />
                    </Container>
                    
                 :  <ListGroup>
                     <ListGroupItem color="success"> 
                     <ListGroupItemHeading>Starting Navigation</ListGroupItemHeading>
                    From : {this.props.info[this.props.sPoint]} to {this.props.info[this.props.ePoint]}
                     </ListGroupItem>
                        {listInfo} 
                    </ListGroup>
                }
             </Container>
        );
    }

}

export default HeaderNavigation;