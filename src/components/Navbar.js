import React, { Component } from "react";
import "./Navbar.css";
import logo from '../assets/logo.png';

class Navbar1 extends Component {
  render() {
    return (
    	<nav>
    	<img src ={logo} alt={`logo`}/>
    	<ul>
    		<li>
    			<a href = "#"> 
    			<p>who i am 
    			</p>
    			</a>
    		</li>
    		<li>
    			<a href = "#"> 
    			<p>projects
    			</p>
    			</a>
    		</li>
    		<li>
    			<a href = "#"> 
    			<p>what i know
    			</p>
    			</a>
    		</li>
    		<li>
    			<a href = "#"> 
    			<p>contact
    			</p>
    			</a>
    		</li>
    		<li>
    		<a href = "#">
    		<ion-icon name="logo-github"></ion-icon>
    		</a>
    		</li>
    	</ul>
    	</nav>
    
  )}
}

export default Navbar1;
