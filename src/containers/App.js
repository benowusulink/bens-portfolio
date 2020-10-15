import React, { Component } from "react";
import "./App.css";
import Navbar1 from "../components/Navbar.js";

class App extends Component {
  render() {
    return (
      <div className={`app`}>
        <Navbar1 />
      </div>
    );
  }
}

export default App;
