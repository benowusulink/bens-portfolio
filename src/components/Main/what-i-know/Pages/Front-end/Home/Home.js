import React from 'react';
import './Home.css';
import html from './assets/html-5.svg';
import css from './assets/css-5.svg';
import js from './assets/javascript.svg';
import react from './assets/react.svg';
import redux from './assets/redux.svg';

const FrontEndHome = ({onRouteChange}) =>{

	return(
		<main className = {`front-end-home`}>
		<h2> Front End </h2>
		<section className ={`front-end-section`}>
		<section className ={`front-end-section-1`}>
		<article onClick = {()=>{onRouteChange("HTML")}}>
		<img src={html} alt={`html`}/>
		<h3> html </h3>
		</article>
		<article onClick = {()=>{onRouteChange("CSS")}}>
		<img src={css} alt={`css`}/>
		<h3> css </h3>
		</article>
		</section>
		<section className ={`front-end-section-2`}>
		<article onClick = {()=>{onRouteChange("Javascript")}}>
		<img src={js} alt={`javascript`}/>
		<h3> javascript </h3>
		</article>
		<article onClick = {()=>{onRouteChange("React")}}>
		<img src={react} alt={`react`}/>
		<h3> react </h3>
		</article>
		<article onClick = {()=>{onRouteChange("Redux")}}>
		<img src={redux} alt={`redux`}/>
		<h3> redux </h3>
		</article>
		</section>
		</section>
		</main>
		)
}

export default FrontEndHome;