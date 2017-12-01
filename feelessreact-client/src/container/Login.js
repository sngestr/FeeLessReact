import React, { Component } from 'react';
import {Link, Redirect, Route} from 'react-router-dom';
import PageNavigation from './PageNavigation';
import './stylesheets/Login.css';

class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			isLoggedIn: false,
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		const fieldName = event.target.name;
		this.setState({ [fieldName]: event.target.value })
	}

	handleSubmit(event) {
		fetch('/login', {
			method: 'POST',
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password,
			}),
			headers: {
    		"Content-Type": "application/json",
  		},
  			"credentials": 'include',
		}).then((res) => {
			if(res.status != 200) {
				// login failed, show message, and stay at login form
				console.log('ERROR logging in!')
			} else {
				this.setState({isLoggedIn: true});
				return res.json();
			}
		}).then((body) => {
			console.log(body);
		})

		event.preventDefault();
	}

	render() {
		if(this.state.isLoggedIn) {
			return <Redirect to="/dashboard" />;
		}

		return (
			<div>
				<PageNavigation />
				<Link to="/signup"> Sign up </Link>

				<br /> <h2> 🐶 login page 🐶 </h2>

				<form onSubmit={this.handleSubmit}>
					<table>
						<tr>
							<td> <label for="email_input">Email</label> </td>
							<td> <input type="email" id="email_input" name="email" value={this.state.email} onChange={this.handleChange}/> </td>
						</tr>

						<tr>
							<td> <label for="password_input">Password</label> </td>
							<td> <input type="password" id="password_input" name="password" value={this.state.password} onChange={this.handleChange} /> </td>
						</tr>
					</table>

					<input type="submit" />
				</form>
			</div>

		);
	}
}

export default Login;
