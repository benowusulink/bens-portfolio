import React, {Component} from 'react';
import './Databases.css';
import DatabaseHome from './home/Home.js';
import Dynamodb from './dynambodb/Dynamodb.js';
import Redshift from './redshift/Redshift.js';
import RDS from './rds/RDS.js';
import Elasticache from './elasticache/Elasticache.js';


class Databases extends Component{

	constructor(){
		super();
		this.state ={route:""};
	}

	onRouteChange = (route) => {
		this.setState({route:route});
	}

	render(){

		switch(this.state.route){

			case "Dynamodb":
			return(
				<Dynamodb />)

			case "RDS":
			return(
				<RDS />)

			case "Redshift":
			return(
				<Redshift />)

			case "Elasticache":
			return(
				<Elasticache />)


			default:
			return(
				<DatabaseHome onRouteChange={this.onRouteChange}/>
				)
		}

	}
}

export default Databases;