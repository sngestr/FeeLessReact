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
				{/* background color */}
				<div class="color_bg"></div>
				<PageNavigation />

				{/* Login form */}
				<div class="col-xs-10 col-lg-6 offset-lg-3 form_container">
					<div class="form text-center">
						<form onSubmit={this.handleSubmit}>
							<input type="email" id="email_input" placeholder="email address" name="email" value={this.state.email} onChange={this.handleChange} required="true"/>
							<input type="password" id="password_input" placeholder="password" name="password" value={this.state.password} onChange={this.handleChange} required="true"/>
							<input type="submit" value="Login"/>
						</form>
						<Link to="/signup" class="link"> Don't have an account? Sign up </Link>
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

export default Login;
