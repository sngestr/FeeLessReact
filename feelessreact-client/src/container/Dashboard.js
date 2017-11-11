import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './stylesheets/Dashboard.css';

class Dashboard extends Component {
	constructor() {
		super();
	}

	render() {
		return(
			<div>
				<h1> Dashboard Component </h1>
				<Link to="/">Home</Link> 
			</div>
		);
	}
}

export default Dashboard