import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Details from "./pages/Details";
// import Saved from "../src/Components/pages/Saved";
import Home from "./pages/Home";
// import backCards from "../src/Components/pages/backCards";

class App extends Component {
 render() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Signin}/>
          <Route exact path="/signup" component={Signup}/>
          {/* <Route exact path="/saved" component={Saved} />
          <Route exact path="/stores/:id" component={backCards} /> */}
        </Switch>
      </div>
    </Router>
  );
}
}

export default App;