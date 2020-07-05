import React, { Component } from "react";
import API from "../../utils/API";


class Gardening extends Component { 

  componentDidMount() {
    this.loadStore();
  }

  loadStore = () => {
    API.findAll()
      .then(res => {
        console.log(res);
        this.setState({ hobbies: res.this.state.hobbies.filter (hobby => hobby.type === "Gardening")
        })
      })
      .catch(err => console.log(err)) 
}
render () {
return (
  <div>
<h1>Gardening</h1>

  </div>
)

}
}

export default Gardening;
