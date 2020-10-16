import React, { Component } from "react";
import "./Navbar.css";
import logo from "./assets/logo.png";

class Navbar1 extends Component {
  render() {
    return (
      <nav>
        <img src={logo} alt={`logo`} className={`logo-image`} />
        <ul id={`nav-list-ul`}>
          <li className>
            <p>who i am</p>
          </li>
          <li>
            <p>projects</p>
          </li>
          <li>
            <p>what i know</p>
          </li>
          <li>
            <p>contact</p>
          </li>
          <li>
            <a
              href="https://github.com/benowusulink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar1;
