import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './stylesheets/SignUp.css';

class SignUp extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<h1> Sign up component </h1>
				<Link to="/dashboard">Dashboard</Link>
			</div>
		);
	}
}

export default SignUp;