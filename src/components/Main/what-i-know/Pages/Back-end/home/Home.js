import React from 'react';
import './Home.css';
import docker from './assets/docker.svg';
import sql from './assets/mysql.svg';
import node from './assets/node-js-logo.svg';
import postgresql from './assets/postgresql.svg';
import redis from './assets/redis.svg';



const BackEndHome = ({onRouteChange}) =>{

	return(
		<main className = {`back-end-home`}>
		<h2> Back End </h2>
		<section className ={`back-end-section`}>
		<section className ={`back-end-section-1`}>
		<article onClick ={()=>{onRouteChange("Node")}}>
		<img src={node} alt={`node`}/>
		<h3> node </h3>
		</article>
		<article onClick ={()=>{onRouteChange("SQL")}}>
		<img src={sql} alt={`SQL`}/>
		<h3> SQL </h3>
		</article>
		<article onClick ={()=>{onRouteChange("Postgresql")}}>
		<img src={postgresql} alt={`Postgresql`}/>
		<h3> postgresql </h3>
		</article>
		</section>
		<section className ={`back-end-section-2`}>
		<article onClick ={()=>{onRouteChange("Redis")}}>
		<img src={redis} alt={`Redis`}/>
		<h3> redis </h3>
		</article>
		<article onClick ={()=>{onRouteChange("Express")}}>
		<img src={node} alt={`Express`}/>
		<h3> express </h3>
		</article>
		<article onClick ={()=>{onRouteChange("Docker")}}>
		<img src={docker} alt={`Docker`}/>
		<h3> docker </h3>
		</article>
		</section>
		</section>
		</main>
		)
}

export default BackEndHome;