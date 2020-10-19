import React, { Component } from "react";
import "./Navbar2.css";
import logo from "./assets/logo.png";

class Navbar2 extends Component {
  render() {
    return (
      <nav id={`navbar2`}>
        <img src={logo} alt={`logo`} className={`logo-image`} />
        <ul id={`nav-list-ul2`}>
          <li>
            <h4>who i am</h4>
          </li>
          <li>
            <h4>projects</h4>
          </li>
          <li>
            <h4>what i know</h4>
          </li>
          <li className>
            <h4> front end </h4>
            <div id={`frontend`}>
              <h6>HTML</h6>
              <h6>CSS</h6>
              <h6>Javascrih6t</h6>
              <h6>React</h6>
              <h6>Redux</h6>
            </div>
            <h4> back end </h4>
            <div id={`backend`}>
              <h6>Node</h6>
              <h6>Exh6ress</h6>
              <h6>postgresql</h6>
              <h6>Redis</h6>
              <h6>Docker</h6>
            </div>
            <div id={`extras`}>
              <h4> Extras </h4>
              <h6>SSH</h6>
              <h6>Bundling</h6>
              <h6>CI/CD</h6>
              <h6>Sessions</h6>
            </div>
            <h4> AWS </h4>
            <div id={`aws`}>
              <h6>IAM</h6>
              <h6>Virtual h6rivate cloud</h6>
              <h6>S3</h6>
              <h6>EC2</h6>
              <h6>Lamda</h6>
              <h6>cloudfront</h6>
              <h6>Elastic Beanstalk</h6>
              <h6>Route53</h6>
              <h6>RDS</h6>
              <h6>Redshift</h6>
              <h6>Dynamodb</h6>
              <h6>Elasticache</h6>
              <h6>EFS</h6>
            </div>
          </li>
          <li>
            <h6>contact</h6>
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

export default Navbar2;
