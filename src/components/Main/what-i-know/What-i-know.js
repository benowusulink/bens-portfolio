import React, { Component } from "react";
import "./What-i-know.css";
import WhatIKnowHome from './Home/what-i-know-home.js';
import FrontEnd from './Pages/Front-end/FrontEnd.js';
import BackEnd from './Pages/Back-end/BackEnd.js';
import Extras from './Pages/Extras/Extras.js';
import AWS from './Pages/AWS/AWS.js';



class WhatIKnow extends Component {

  constructor(){
    super();
    this.state = {route: ""};
  }

  onRouteChange = (route) =>{

      this.setState({route: route})
  }

  render() {

    switch (this.state.route) {

      case "FrontEnd":
      return(
        <FrontEnd />
        )
      case "AWS":
      return(
        <AWS />
        )
      case "Extras":
      return(
        <Extras />
        )
      case "BackEnd":
      return(
        <BackEnd />
      )
        default:
        return(
                      
          <WhatIKnowHome onRouteChange={this.onRouteChange}/>
         
          )
  
}}}

export default WhatIKnow;
