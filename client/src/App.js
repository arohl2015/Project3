import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Saved from "../src/Components/pages/Saved";
import Home from "../src/Components/pages/Home";
import backCards from "../src/Components/pages/backCards";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/stores/:id" component={backCards} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;