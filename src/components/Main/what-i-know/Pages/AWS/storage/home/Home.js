import React from 'react';
import './Home.css';
import efs from './assets/aws-logo.svg';
import s3 from './assets/amazon-s3.svg';

const StorageHome = ({onRouteChange}) =>{

	return(
		<main className = {`storage-home`}>
		<h2> Storage </h2>
		<section className ={`storage-section`}>
		<article onClick={()=>{onRouteChange("EFS")}}>
		<img src={efs} alt={`EFS`}/>
		<h3> EFS </h3>
		</article>
		<article onClick={()=>{onRouteChange("S3")}} >
		<img src={s3} alt={`S3`}/>
		<h3> S3 </h3>
		</article>
		</section>
		</main>
		)
}

export default StorageHome;