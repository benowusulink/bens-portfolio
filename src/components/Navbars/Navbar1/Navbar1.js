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
        <li className={`link`} onClick={() => onRouteChange("WhoIAm")}>
          <p>who i am</p>
        </li>
        <li className={`link`} onClick={() => onRouteChange("Projects")}>
          <p>projects</p>
        </li>
        <li className={`link`} onClick={() => onRouteChange("WhatIKnow")}>
          <p>what i know</p>
        </li>
        <li className={`git`}>
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
};

export default Navbar1;
