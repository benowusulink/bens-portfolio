import React, { Component } from "react";
import "./Extras.css";
import ExtrasHome from "./home/Home.js";
import SSH from "./ssh/SSH.js";
import Sessions from "./sessions/Sessions.js";
import CICD from "./ci:cd/CICD.js";
import Bundling from "./bundling/Bundling.js";

class Extras extends Component {
  constructor() {
    super();
    this.state = { route: "" };
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
  };

  render() {
    switch (this.state.route) {
      case "CICD":
        return <CICD />;
      case "Bundling":
        return <Bundling />;
      case "SSH":
        return <SSH />;
      case "Sessions":
        return <Sessions />;

      default:
        return <ExtrasHome onRouteChange={this.onRouteChange} />;
    }
  }
}

export default Extras;
