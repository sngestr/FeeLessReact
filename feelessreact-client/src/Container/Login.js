import React, { Component } from 'react';
import {Link, Redirect, Route} from 'react-router-dom';
import PageNavigation from './PageNavigation';
import './stylesheets/Login.css';
import Navigation from '../Navigation';
import './stylesheets/Login.css'; // CSS file for the the style

class Login extends Component {
	
	constructor() {

		super();
		this.state = {
			email: '',
			password: '',
			isLoggedIn: false,
		};

		{/*The handler for the input from the user:*/}
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
				
				{/*The background image for the login page:*/}
				<img src={require('./assets/feelessLogin.png')} className="bg" />
				<Navigation />
				
				{/*<PageNavigation />  Do we need that here?*/}

				<h2> 🐶 Login Page 🐶 </h2>

				<form onSubmit={this.handleSubmit}>

					<table id="table"> 
						<tr>
							{/*<td> <label for="email_input">Email</label> </td>*/}
							<td> <input type="email" id="email_input" name="email" value={this.state.email} onChange={this.handleChange}/> </td>
						</tr>

						<tr>
							{/*<td> <label for="password_input">Password</label> </td>*/}
							<td> <input type="password" id="password_input" name="password" value={this.state.password} onChange={this.handleChange} /> </td>
						</tr>
					</table>

					<input type="submit" id="submit_request"/>

					{/*The signup link has to be at the buttom*/}
					<Link to="/signup"> Sign up </Link>

				</form>
			</div>
		);
	}
}

export default Login;
