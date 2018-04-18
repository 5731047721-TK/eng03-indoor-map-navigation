// export default HeaderNavigation;
import React, { Component } from 'react';
//import { Nav, NavItem, NavLink } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Form,FormGroup,Label,Input,ListGroup,ListGroupItem,ListGroupItemHeading } from 'reactstrap';




class HeaderNavigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            startFloor:'',
            endFloor:'',
            currentFloor:'',
            
        }
        this.handleChange = this.handleChange.bind(this);
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




    /*onClick(e){
        for(var key in this.state.info){
            //console.log(key, this.state.info[key]);
        }
      }*/

    render() {


        let sRoom = null;
        let eRoom = null;
        if(this.state.startFloor === 'floor1'){
            sRoom = 
            <Input type="select" name="select place" id="startPoint" value={this.props.sPoint} onChange={this.handleChange}>
                <option>b1_1</option>
                <option>b1_2</option>
                <option>b1_3</option>
                <option>b1_4</option>
            </Input>
        }else if(this.state.startFloor === 'floor2'){
            sRoom = 
            <Input type="select" name="select place" id="startPoint" value={this.props.sPoint} onChange={this.handleChange}>
                <option>b2_01</option>
                <option>b2_02</option>
                <option>b2_03</option>
                <option>b2_04</option>
            </Input>
        }else if(this.state.startFloor === 'floor3'){
            sRoom = 
            <Input type="select" name="select place" id="startPoint" value={this.props.sPoint} onChange={this.handleChange}>
                <option>b3_01</option>
                <option>b3_02</option>
                <option>b3_03</option>
                <option>b3_04</option>
            </Input>
        }else if(this.state.startFloor === 'floor4'){
            sRoom = 
            <Input type="select" name="select place" id="startPoint" value={this.props.sPoint} onChange={this.handleChange}>
                <option>b4_01</option>
                <option>b4_02</option>
                <option>b4_03</option>
                <option>b4_04</option>
            </Input>
        }


        if(this.state.endFloor === 'floor1'){
            eRoom = 
            <Input type="select" name="select place" id="endPoint" value={this.props.ePoint} onChange={this.handleChange}>
                <option>b1_1</option>
                <option>b1_2</option>
                <option>b1_3</option>
                <option>b1_4</option>
            </Input>
        }else if(this.state.endFloor === 'floor2'){
            eRoom = 
            <Input type="select" name="select place" id="endPoint" value={this.props.ePoint} onChange={this.onChange}>
                <option id = 'b2_01'>Stair1</option>
                <option id = 'b2_02'>b2_2</option>
                <option id = 'b2_03'>b2_3</option>
                <option id = 'b2_04'>b2_4</option>
            </Input>
        }else if(this.state.endFloor === 'floor3'){
            eRoom = 
            <Input type="select" name="select place" id="endPoint" value={this.props.ePoint} onChange={this.handleChange}>
                <option>b3_1</option>
                <option>b3_2</option>
                <option>b3_3</option>
                <option>b3_4</option>
            </Input>
        }else if(this.state.endFloor === 'floor4'){
            eRoom = 
            <Input type="select" name="select place" id="endPoint" value={this.props.ePoint} onChange={this.handleChange}>
                <option>b4_1</option>
                <option>b4_2</option>
                <option>b4_3</option>
                <option>b4_4</option>
            </Input>
        }
        

        const listInfo = this.props.data.map((info) =>
        <ListGroupItem>{info}</ListGroupItem>
          );
        
       
        return (
            <Container>
                {
                    !this.props.isNavigate && this.props.data !== [] ?
                    <Container>
                    
                    <Row>
                        <Col sm="8"><h1> Eng03-indoor-map </h1></Col>
                    </Row>
                    <Row>
                        <Col sm="4">
                        <Form>
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
                            </Form>
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
                    From :{this.props.info[this.props.sPoint]} to :{this.props.info[this.props.ePoint]}
                     </ListGroupItem>
                        {listInfo} 
                    </ListGroup>
                }
             </Container>
        );
    }

}

export default HeaderNavigation;