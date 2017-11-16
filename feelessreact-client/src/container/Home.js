import React, { Component } from 'react';
import './stylesheets/Home.css';
import Navigation from '../Navigation';

class Home extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<Navigation />
				<h1> Home Component </h1>
			</div>
		);
	}
}

export default Home;
