import React from "react";
import { Card, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import Hobby from "../Hobby";

function FrontCard(props) {
 
  
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>{props.name}</CardTitle>
            <CardText>{props.description}</CardText>

            <Button name={props.name} onClick={()=> props.handlebuttonClick(props.name)}>Learn More! </Button>

          </CardBody>
      </Card>
        {/* getting error here cannot read state of undefined */} 
        {props.type ? <Hobby type={props.type}/> : ""}     

      </div>
    )
  
}
export default FrontCard;