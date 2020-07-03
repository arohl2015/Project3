import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';

class FrontCard extends Component {
  handleButtonClick = event => {
    event.preventDefault(); //write code for what we want it to do
    if (event.target.name === "Gardening") {
  console.log("Gardening");
    } else if (event.target.name === "Sewing") {
      console.log("Sewing");
    } else if (event.target.name === "Music") {
      console.log("Music");
    } else if (event.target.name === "Art") {
      console.log("Art");
    } else if (event.target.name === "Cooking") {
      console.log("Cooking");
    } else if (event.target.name === "Outdoor Life") {
      console.log("Outdoor Life");
    }
  
  }
  render() {
    return (
      <div>
        <Card>
          <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
          <CardBody>
            <CardTitle>{this.props.name}</CardTitle>
            <CardText>{this.props.description}</CardText>
            <Button handleButtonClick={this.handleButtonClick}>Learn More! </Button>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default FrontCard;