import React, { Component } from "react";
import "./Storage.css";
import StorageHome from "./home/Home.js";
import EFS from "./efs/EFS.js";
import S3 from "./s3/S3.js";

class Storage extends Component {
  constructor() {
    super();
    this.state = { route: "" };
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
  };

  render() {
    switch (this.state.route) {
      case "EFS":
        return <EFS />;

      case "S3":
        return <S3 />;

      default:
        return <StorageHome onRouteChange={this.onRouteChange} />;
    }
  }
}

export default Storage;
