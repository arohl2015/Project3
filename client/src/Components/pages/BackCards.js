import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";

class backCards extends Component {
  state = {
   Store
  };

  componentDidMount() {
    this.loadStore();
  }


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.type) {
      API.saveStore({
        name: this.state.name,
        location: this.state.location,
        phone: this.state.phone,
        url: this.state.url,
        description: this.state.description,
        type: this.state.type
      })
        .then(res => this.loadStore())
        .catch(err => console.log(err));
    }
  };
}

export default backCards;
