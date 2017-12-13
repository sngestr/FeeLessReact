import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PageNavigation from './PageNavigation';
import './stylesheets/SignUp.css';

class SignUp extends Component {
	constructor() {
		super();
		this.state = {
				first_name: '',
				last_name: '',
				email: '',
				password_hash: '',
				confirm_password_hash: '',
				isLoggedIn: false,
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		const fieldName = event.target.name;
		this.setState({ [fieldName]: event.target.value });
	}

	handleSubmit(event) {
		fetch('/signup', {
				method: 'POST',
				body: JSON.stringify({
					first_name: this.state.first_name,
					last_name: this.state.last_name,
					email: this.state.email,
					password_hash: this.state.password_hash,
					confirm_password_hash: this.state.confirm_password_hash,
				}),
				"headers": {
					"Content-Type": "application/json",
				},
				"credentials": 'include',
		}).then((res) => {
				if(res.status != 200) {
					console.log("error signing up");
				} else {
					this.setState({isLoggedIn: true});
					console.log("signed up!");

				}
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

				<br /> <h2> 🐶 sign up page 🐶 </h2>

				<form onSubmit={this.handleSubmit}>
					<table>
						<tr>
							<td> <label for="fname_input">First Name</label> </td>
							<td> <input type="text" id="fname_input" value={this.state.firstName} name="first_name" onChange={this.handleChange} /> </td>
						</tr>

						<tr>
							<td> <label for="lname_input">Last Name</label> </td>
							<td> <input type="text" id="lname_input" value={this.state.lastName} name="last_name" onChange={this.handleChange} /> </td>
						</tr>

						<tr>
							<td> <label for="email_input">Email</label> </td>
							<td> <input type="email" id="email_input" value={this.state.email} name="email" onChange={this.handleChange} /> </td>
						</tr>

						<tr>
							<td> <label for="password_input">Password</label> </td>
							<td> <input type="password" id="password_input" value={this.state.password_hash} name="password_hash" onChange={this.handleChange} /> </td>
						</tr>

						<tr>
							<td> <label for="confirm_password_input">Confirm Password</label> </td>
							<td> <input type="password" id="confirm_password_input" value={this.state.confirm_password_hash} name="confirm_password_hash" onChange={this.handleChange}/> </td>
						</tr>
					</table>

					<input type="submit" />
				</form>
				<Link to="/login">Already have an account? Login</Link>
			</div>
		);
	}
}

export default SignUp;
