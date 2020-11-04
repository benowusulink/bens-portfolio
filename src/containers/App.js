import React, { Component } from "react";
import "./App.css";
import Navbar1 from "../components/Navbars/Navbar1/Navbar1.js";
import Navbar2 from "../components/Navbars/Navbar2/Navbar2.js";
import Home from "../components/Main/Home/Home.js";
import WhoIAm from "../components/Main/who-i-am/Who-i-am.js";
import Projects from "../components/Main/Projects/Projects.js";
import WhatIknow from "../components/Main/what-i-know/What-i-know.js";

class App extends Component {
  constructor() {
    super();
    this.state = { route: "Home" };
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
  };

  render() {
    switch (this.state.route) {
      case "Home":
        return (
          <div>
            <Navbar1 onRouteChange={this.onRouteChange} />
            <Home />
          </div>
        );
      case "WhoIAm":
        return (
          <div>
            <WhoIAm onRouteChange={this.onRouteChange} />
          </div>
        );
      case "Projects":
        return (
          <div>
            <Projects onRouteChange={this.onRouteChange} />
          </div>
        );
      case "WhatIKnow":
        return (
          <div>
            <Navbar2 onRouteChange={this.onRouteChange} />
            <WhatIknow onRouteChange={this.onRouteChange} />
          </div>
        );

      default:
        return (
          <div>
            <Navbar1 onRouteChange={this.onRouteChange} />
            <Home />
          </div>
        );
    }
  }
}

export default App;
