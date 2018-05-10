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
				{/* background color */}
				<div class="color_bg"></div>
				<PageNavigation />

				{/* Sign up form */}
				<div class="col-xs-10 col-lg-6 offset-lg-3 form_container">
					<div class="form text-center">
						<form onSubmit={this.handleSubmit}>
							<input type="text" id="fname_input" value={this.state.firstName} placeholder="first name" name="first_name" onChange={this.handleChange} required="true"/><br />
							<input type="text" id="lname_input" value={this.state.lastName} placeholder="last name" name="last_name" onChange={this.handleChange} required="true"/><br />
							<input type="email" id="email_input" value={this.state.email} placeholder="email address" name="email" onChange={this.handleChange} required="true"/><br />
							<input type="password" id="password_input" value={this.state.password_hash} placeholder="password" name="password_hash" onChange={this.handleChange} required="true"/><br />
						   	<input type="password" id="confirm_password_input" value={this.state.confirm_password_hash} placeholder="confirm password" name="confirm_password_hash" onChange={this.handleChange} required="true"/><br/>
							<input type="submit" value="sign up"/>
						</form>
						<Link to="/login" class="link">Already have an account? Login</Link>
					</div>
				</div>

				{/*  side images  */}
				<div className="d-none d-lg-block">
					<img src={require('./assets/left.png')} id="left_image" className="tree_img"/>
					<img src={require('./assets/right.png')} id="right_image" className="tree_img"/>
				</div>
				{/*  End side images  */}
			</div>
		);
	}
}

export default SignUp;
