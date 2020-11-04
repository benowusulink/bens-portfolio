import React, { Component } from "react";
import "./Network.css";
import NetworkHome from "./home/Home.js";
import Cloudfront from "./cloudfront/Cloudfront.js";
import Route53 from "./route53/Route53.js";
import VPC from "./vpc/VPC.js";
import Global from "./global-accelarator/Global.js";

class Network extends Component {
  constructor() {
    super();
    this.state = { route: "" };
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
  };

  render() {
    switch (this.state.route) {
      case "VPC":
        return <VPC />;

      case "Cloudfront":
        return <Cloudfront />;

      case "Route53":
        return <Route53 />;

      case "Global":
        return <Global />;

      default:
        return <NetworkHome onRouteChange={this.onRouteChange} />;
    }
  }
}

export default Network;
