import React from 'react';
import './Home.css';
import elc from './assets/amazon-database.svg';
import dynamodb from './assets/aws-dynamodb.svg';
import rds from './assets/aws-rds.svg';
import redshift from './assets/aws-redshift-logo.svg';


const DatabaseHome = ({onRouteChange}) =>{

	return(
		<main className = {`database-home`}>
		<h2> databases </h2>
		<section className ={`database-section`}>
		<section className ={`database-section-1`}>
		<article onClick = {()=>{onRouteChange("Dynamodb")}}>
		<img src={dynamodb} alt={`Dynamodb`}/>
		<h3> Dynamodb </h3>
		</article>
		<article onClick = {()=>{onRouteChange("Elasticache")}}>
		<img src={elc} alt={`Elasticache`}/>
		<h3> Elasticache </h3>
		</article>
		</section>
		<section className ={`database-section-2`}>
		<article onClick = {()=>{onRouteChange("RDS")}}>
		<img src={rds} alt={`RDS`}/>
		<h3> RDS </h3>
		</article>
		<article onClick = {()=>{onRouteChange("Redshift")}}>
		<img src={redshift} alt={`redshift`}/>
		<h3> redshift </h3>
		</article>
		</section>
		</section>
		</main>
		)
}

export default DatabaseHome;