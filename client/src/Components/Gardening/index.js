import React, { Component } from "react";
import API from "../utils/API";


class Gardening extends Component { 

  componentDidMount() {
    this.loadStore();
  }

  loadStore = () => {
    API.findAll()
      .then(res =>
        this.setState({ hobbies: res.this.state.hobbies.filter (hobby => hobby.type === "Gardening")
        })
      .catch(err => console.log(err))
}

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };
}
}



  export default Gardening;
