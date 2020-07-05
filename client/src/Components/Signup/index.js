import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Signup = (props) => {
  return (
    <Form>
      <FormGroup row>
        <Label for="exampleUsername" sm={2}>Username</Label>
        <Col sm={10}>
          <Input type="email" name="email" id="exampleUsername" placeholder="Enter a Username" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="examplePassword" sm={2}>Password</Label>
        <Col sm={10}>
          <Input type="password" name="password" id="examplePassword" placeholder="Choose a Password" />
        </Col>
      </FormGroup>
      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button>Submit</Button>
        </Col>
      </FormGroup>
    </Form>
  );
}

export default Signup;