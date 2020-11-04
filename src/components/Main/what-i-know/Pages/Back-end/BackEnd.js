import React, {Component} from 'react';
import './BackEns.css';
import BackEndHome from './home/Home.js';
import Docker from './docker/Docker.js';
import Express from './express/Express.js';
import Node from './node/Node.js';
import SQL from './sql/SQL.js';
import Redis from './redis/Redis.js';
import Postgresql from './postgresql/Postgresql.js';

class BackEnd extends Component {

	constructor(){
		super();
		this.state = {route: ""};
	}

	onRouteChange = (route) =>{
		this.setState({route:route})
	}

	render(){
		switch (this.state.route){

			case "Docker":
			return(
				<Docker />
				)
			case "Node":
			return(
				<Node />
				)
			case "Express":
			return(
				<Express />
				)
			case "SQL":
			return(
				<SQL />
				)
			case "Postgresql":
			return(
				<Postgresql />
				)
			case "Redis":
			return(
				<Redis />
				)

			default:
			return(
				<BackEndHome onRouteChange={this.onRouteChange} />
				)
		}
	}
}

export default BackEnd;