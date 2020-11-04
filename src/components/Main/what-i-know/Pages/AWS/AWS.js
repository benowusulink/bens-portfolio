import React, { Component } from "react";
import "./AWS.css";
import AWSHome from "./home/Home.js";
import Database from "./databases/Databases.js";
import Compute from "./compute/Compute.js";
import Network from "./network/Network.js";
import Security from "./security/Security.js";
import Storage from "./storage/Storage.js";

class AWS extends Component {
  constructor() {
    super();
    this.state = { route: "" };
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
  };

  render() {
    switch (this.state.route) {
      case "Databases":
        return <Database />;
      case "Compute":
        return <Compute />;
      case "Network":
        return <Network />;
      case "Storage":
        return <Storage />;
      case "Security":
        return <Security />;

      default:
        return <AWSHome onRouteChange={this.onRouteChange} />;
    }
  }
}

export default AWS;
