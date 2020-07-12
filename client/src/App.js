import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import './css/style.css';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Signin} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;