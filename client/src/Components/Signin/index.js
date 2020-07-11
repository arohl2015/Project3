import React, { Component } from 'react';
import axios from "axios";
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class SignIn extends Component {
  state = {
    username: "",
    password: ""
  }

  submitHandler = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
    console.log(event.target[1].value);

    let currentUser = {
      username: this.state.username,
      password: this.state.password
    };

    console.log(currentUser);

    axios
      .post("/login", currentUser)
      .then(function (data) {
        console.log(data.data);
        //   if (data.data._id) {
        //        this.props.history.push("/")
        //   }
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  handleInputChange = event => {
    var create = event.target.name
    this.setState({ [create]: event.target.value });
  };

  render() {
    return (
      <Form onSubmit={this.submitHandler}>
        <FormGroup row>
          <Label for="exampleUsername" sm={2}>Username</Label>
          <Col sm={10}>
          <Input type="username" onChange={this.handleInputChange} name="username" id="exampleUsername" placeholder="Enter your Username" />
          </Col>        
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={2}>Password</Label>
          <Col sm={10}>
          <Input type="password" onChange={this.handleInputChange} name="password" id="examplePassword" placeholder="Don't Tell!" />
          </Col>
        </FormGroup>
        <FormGroup check row>
					<Col sm={{ size: 10, offset: 4 }}>
						<Button>Login</Button>
					</Col>
				</FormGroup>
      </Form>
    );
  }
}

export default SignIn;