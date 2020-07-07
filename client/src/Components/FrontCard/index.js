import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import Hobby from "../Hobby";


class FrontCard extends Component {
  constructor(props){
    super(props);
    this.state={type:null}
  }
  handlebuttonClick = event => {
    event.preventDefault(); //write code for what we want it to do
    this.setState({type:event.target.name})
    console.log(this.state)
  } 
  
  render() {
    return (
      <div>
        <Card>
          <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
          <CardBody>
            <CardTitle>{this.props.name}</CardTitle>
            <CardText>{this.props.description}</CardText>
            <Button name={this.props.name} onClick={this.handlebuttonClick}>Learn More! </Button>
          </CardBody>
      </Card>
        {/* getting error here cannot read state of undefined */} 
        {this.state.type ? <Hobby type={this.state.type}/> : ""}     

      </div>
    )
  }
}
export default FrontCard;