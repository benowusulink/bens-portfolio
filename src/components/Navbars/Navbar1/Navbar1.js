import React from "react";
import "./Navbar1.css";
import logo from "./assets/logo.png";

const Navbar1 = ({ onRouteChange }) => {
  return (
    <nav id={`navbar1`}>
      <img
        src={logo}
        alt={`logo`}
        className={`logo-image`}
        onClick={() => onRouteChange("Home")}
      />
      <ul id={`nav-list-ul`}>
        <li className={`link`}>
          <p onClick={() => onRouteChange("WhoIAm")}>who i am</p>
        </li>
        <li className={`link`}>
          <p onClick={() => onRouteChange("Projects")}>projects</p>
        </li>
        <li className={`link`}>
          <p onClick={() => onRouteChange("WhatIKnow")}>what i know</p>
        </li>
        <li className={`git`}>
          <a href="https://github.com/benowusulink">
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar1;
