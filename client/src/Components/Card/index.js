import React, { Component } from "react";
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';

  class Card extends Component {
    handleButtonClick = event => { 
         event.preventDefault(); //write code for what we want it to do
         if (event.target.name === "Gardening") { } else if (event.target.name === "Sewing") { } 
         else if (event.target.name === "Music") { } else if (event.target.name === "Art") { } 
         else if (event.target.name === "Cooking") { } else (event.target.name === "Outdoor Life") 
        }
      render(){
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

export default Card;