import React, { Component } from "react";
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import "./style.css";


class Hobby extends Component { 
    constructor(props){
        super(props);
        this.state={}
      }
      render () {
  
        return (
          <div>
        <h1>{this.props.type}</h1>
              <div>
                <Card>
                  <CardBody>
                    <CardTitle>{this.props.name}</CardTitle>
                    <CardTitle>{this.props.location}</CardTitle>
                    <CardTitle>{this.props.phone}</CardTitle>
                    <CardText><a href={this.props.url}>{this.props.url}</a></CardText>
                    <CardTitle>{this.props.description}</CardTitle>
                    {/* <Button onClick={this.handlebuttonClick}>Learn More! </Button> */}
                  </CardBody>
                </Card>
              </div>
              </div>
            )

  }
 
  }

export default Hobby
