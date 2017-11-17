import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PageNavigation from './PageNavigation';
import './stylesheets/SignUp.css';

class SignUp extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<PageNavigation />
				<Link to="/dashboard">Dashboard</Link>
				<Link to="/login">Login</Link>

				<br /> <h2> 🐶 sign up page 🐶 </h2>

				<table>
					<tr>
						<td> <label for="fname_input">First Name</label> </td>
						<td> <input type="text" id="fname_input" name="first name"/> </td>
					</tr>

					<tr>
						<td> <label for="lname_input">Last Name</label> </td>
						<td> <input type="text" id="lname_input" name="last name"/> </td>
					</tr>

					<tr>
						<td> <label for="email_input">Email</label> </td>
						<td> <input type="email" id="email_input" name="email"/> </td>
					</tr>

					<tr>
						<td> <label for="password_input">Password</label> </td>
						<td> <input type="password" id="password_input" name="password"/> </td>
					</tr>

					<tr>
						<td> <label for="confirm_password_input">Confirm Password</label> </td>
						<td> <input type="password" id="confirm_password_input" name="confirm password"/> </td>
					</tr>
				</table>

				<input type="submit" />
			</div>
		);
	}
}

export default SignUp;
