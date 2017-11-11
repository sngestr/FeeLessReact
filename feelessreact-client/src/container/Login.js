import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Login extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div> 
				<h1> Login Component </h1>
				<Link to="/dashboard"> Dashboard </Link>
			</div>
		);
	}
}

export default Login;