import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from "axios";

class SignUp extends Component {
state = {
	username: "",
	password: ""
}
  
	submitHandler = (event) => {
	  event.preventDefault();
	//   console.log(username);
	//   console.log(password);
  
	  let newUser = {
		username: this.state.username,
		password: this.state.password
	  };
  
	  console.log(newUser);
  
	  axios
		.post("/signup", newUser)
		.then(function (data) {
		  console.log(data.data);
		})
		.catch(function (err) {
		  console.log(err);
		});
	};

	handleInputChange = event => {
		var create = event.target.name
		this.setState({ [create]: event.target.value });
	  };

	render () {
  return (
    <Form onSubmit={this.submitHandler}>
      <FormGroup row>
        <Label for="exampleUsername" sm={2}>Username</Label>
        <Col sm={10}>
          <Input type="username" onChange={this.handleInputChange} name="username" id="exampleUsername" value = {this.state.username} placeholder="Enter a Username" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="examplePassword" sm={2}>Password</Label>
        <Col sm={10}>
          <Input type="password" onChange={this.handleInputChange} name="password" id="examplePassword" value = {this.state.password} placeholder="Choose a Password" />
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
}

export default SignUp;