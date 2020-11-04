import React, { Component } from "react";
import "./Security.css";
import SecurityHome from "./home/Home.js";
import IAM from "./iam/IAM.js";
import Organisation from "./organisation/Organisation.js";
import WAF from "./waf/WAF.js";

class Security extends Component {
  constructor() {
    super();
    this.state = { route: "" };
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
  };

  render() {
    switch (this.state.route) {
      case "WAF":
        return <WAF />;

      case "Organisation":
        return <Organisation />;

      case "IAM":
        return <IAM />;

      default:
        return <SecurityHome onRouteChange={this.onRouteChange} />;
    }
  }
}

export default Security;
