import React, { Component } from "react";
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';


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
                  {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
                  <CardBody>
                    <CardTitle>{this.props.name}</CardTitle>
                    <CardTitle>{this.props.location}</CardTitle>
                    <CardTitle>{this.props.phone}</CardTitle>
                    <CardText>{this.props.url}</CardText>
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
