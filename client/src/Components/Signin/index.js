import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom'
import axios from "axios";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import Home from "../../pages/Home";

class SignIn extends Component {
    state = {
    username: "",
    password: ""
    }
    
  
   submitHandler = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
    console.log(event.target[1].value);
    //   console.log(username);
    //   console.log(password);
  

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

    render () {
    return (
      <Form onSubmit={this.submitHandler}>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="exampleUsername" className="mr-sm-2">Email</Label>
        <Input type="username" onChange={this.handleInputChange} name="username" id="exampleUsername" placeholder="some cool username" />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="examplePassword" className="mr-sm-2">Password</Label>
        <Input type="password" onChange={this.handleInputChange} name="password" id="examplePassword" placeholder="don't tell!" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
    );
  }
}

  export default SignIn;