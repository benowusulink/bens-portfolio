import React, { Component } from "react";
import "./Compute.css";
import ComputeHome from "./home/Home.js";
import EC2 from "./ec2/EC2.js";
import Lambda from "./lambda/Lambda.js";
import ElasticBeanstalk from "./elasticBeanstalk/ElasticBeanstalk.js";

class Compute extends Component {
  constructor() {
    super();
    this.state = { route: "" };
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
  };

  render() {
    switch (this.state.route) {
      case "EC2":
        return <EC2 />;

      case "ElasticBeanstalk":
        return <ElasticBeanstalk />;

      case "Lambda":
        return <Lambda />;

      default:
        return <ComputeHome onRouteChange={this.onRouteChange} />;
    }
  }
}

export default Compute;
