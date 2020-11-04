import React from 'react';
import './Home.css';
import ec2 from './assets/aws-ec2.svg';
import lambda from './assets/aws-lambda.svg';
import elb from './assets/aws-logo.svg';


const ComputeHome = ({onRouteChange}) =>{

	return(
		<main className = {`compute-home`}>
		<h2> Compute </h2>
		<section className ={`compute-section`}>
		<article onClick = {()=>{onRouteChange("EC2")}}>
		<img src={ec2} alt={`EC2`}/>
		<h3> EC2 </h3>
		</article>
		<article onClick = {()=>{onRouteChange("Lambda")}}>
		<img src={lambda} alt={`Lambda`}/>
		<h3> Lambda </h3>
		</article>
		<article onClick = {()=>{onRouteChange("ElasticBeanstalk")}}>
		<img src={elb} alt={`Elastic Beanstalk`}/>
		<h3> Elastic Beanstalk </h3>
		</article>
		</section>
		</main>
		)
}

export default ComputeHome;