import React, { Component } from 'react';
import './stylesheets/Home.css';
import {Link} from 'react-router-dom';
import Navigation from '../Navigation';

class Home extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div id="home_component">
				<img src={require('./assets/homebg.png')} className="bg" />
				<Navigation />

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
