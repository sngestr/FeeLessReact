import React, { Component } from 'react';
import ReactDOM 			from "react-dom"; // Rendering engine 
import {Link} 				from 'react-router-dom';
import Navigation 			from '../Navigation';
import './stylesheets/Home.css'; // CSS file for the the style

//class Home extends Component {
class Home extends React.Component { // Everything in react is a component. 

	constructor() {
		super(); // Must be the first command in the react component.
	}

	render() { // A render method for the component.

		return (

			<div id="home_component">

				<img src={require('./assets/homebg.png')} className="bg" />
				<Navigation />{/* The navigation bar on top of the page*/}

				<div id="homepage-header-content">
					<h1> Avoid the fees </h1>
					<p>Enjoy feeless international transactions and start saving today</p>
					<Link to="/signup" className="button"> Sign up</Link>
				</div>

			</div>
		);
	}
}

export default Home;
