import React from 'react';
import axios from "axios";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

function Signin() {
    let username = "";
    let password = "";
  
    let submitHandler = (event) => {
      event.preventDefault();
  
      console.log(username.current.value);
      console.log(password.current.value);
  
      let currentUser = {
        username: username.current.value,
        password: password.current.value,
      };
  
      console.log(currentUser);
  
      axios
        .post("/login", currentUser)
        .then(function (data) {
          console.log(data.data);
        })
        .catch(function (err) {
          console.log(err);
        });
    };
  
    return (
      <Form onSubmit={submitHandler}>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="exampleEmail" className="mr-sm-2">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="some cool username or email" />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="examplePassword" className="mr-sm-2">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
    );
  }

  export default Signin;