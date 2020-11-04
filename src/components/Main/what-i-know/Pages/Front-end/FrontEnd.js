import React, {Component} from 'react';
import './Frontend.css';
import FrontEndHome from './Home/Home.js';
import HTML from './html/HTML.js';
import CSS from './css/CSS.js';
import Javascript from './javascript/Javascipt.js';
import Reactt from './react/React.js';
import Redux from './redux/Redux.js';

class FrontEnd extends Component {

	constructor(){
		super();
		this.state = {route: ""};
	}

	onRouteChange = (route) =>{
		this.setState({route: route})
	}

	render(){
		switch (this.state.route){

			case "HTML":
			return(
				<HTML />)

			case "CSS":
			return(
				<CSS />)

			case "Javascript":
			return(
				<Javascript />)

			case "React":
			return(
				<Reactt />)

			case "Redux":
			return(
				<Redux />)

			default:
			return(
				<FrontEndHome onRouteChange = {this.onRouteChange}/>
				)
		}
	}
}

export default FrontEnd;