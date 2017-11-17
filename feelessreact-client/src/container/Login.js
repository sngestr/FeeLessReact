import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PageNavigation from './PageNavigation';
import './stylesheets/Login.css';

class Login extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<PageNavigation />
				<Link to="/dashboard"> Dashboard </Link>
				<Link to="/signup"> Sign up </Link>

				<br /> <h2> 🐶 login page 🐶 </h2>

				<table>
					<tr>
						<td> <label for="email_input">Email</label> </td>
						<td> <input type="email" id="email_input" name="email"/> </td>
					</tr>

					<tr>
						<td> <label for="password_input">Password</label> </td>
						<td> <input type="password" id="password_input" name="password"/> </td>
					</tr>
				</table>

				<input type="submit" />
			</div>
		);
	}
}

export default Login;
