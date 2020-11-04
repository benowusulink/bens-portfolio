import React from "react";
import "./Navbar2.css";
import logo from "./assets/logo.png";

const Navbar2 = ({onRouteChange}) => { 
 
    return (
      <nav id={`navbar2`}>
        <img src={logo} alt={`logo`} className={`logo-image`}
             onClick={()=>onRouteChange("Home")} />
        <ul id={`nav-list-ul2`}>
          <li>
            <h4 onClick={()=>onRouteChange("WhoIAm")}>who i am</h4>
          </li>
          <li>
            <h4 onClick={()=>onRouteChange("Projects")}>projects</h4>
          </li>
          <li>
            <h4 onClick={()=>onRouteChange("WhatIKnow")}>what i know</h4>
          </li>
          <li>
            <section className={`contact`}>
            <h5>Contact:</h5>
            <article className={`info`}>
            <ion-icon name="call-outline"></ion-icon>
            <h5>07340176983</h5>
            </article>
            <article className={`info`}>
            <ion-icon name="mail-outline"></ion-icon>
            <h5>benowusu@hotmail.co.uk</h5>
            </article>
            <a
              href="https://github.com/benowusulink"
              target="_blank"
              rel="noopener noreferrer"
              className="git-logo"
            >
              <ion-icon name="logo-github" ></ion-icon>
            </a>
            </section>
          </li>
        </ul>
      </nav>
    );
  }


export default Navbar2;
