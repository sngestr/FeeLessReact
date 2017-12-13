import React, { Component } from 'react';
import {Link, Redirect, Route} from 'react-router-dom';
import PageNavigation from './PageNavigation';


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
			
			<div class="container">
			<div class="row main">
				<div class="panel-heading">
	               <div class="panel-title text-center">
	               		<h1 class="title">FeeLess</h1>
	               		<div id="side-text">
		               		<p>The first social network to exchange money simply and free!</p>
		               		<p>Enjoy your visit!</p>
	               		</div>
	               		<hr />
	               	</div>
	            </div> 
				<div class="main-login main-center">
					<form class="form-horizontal" method="post" action="#">
						<div class="form-group">
							<label for="username" class="cols-sm-2 control-label">Username</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
									<input type="email" class="form-control" id="email_input" name="email" id="username"  placeholder="Enter your Username" value={this.state.email} onChange={this.handleChange}/>
								
								</div>
							</div>
						</div>

						<div class="form-group">
							<label for="password" class="cols-sm-2 control-label">Password</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
									<input type="password" class="form-control" id="password_input" name="password" value={this.state.password} onChange={this.handleChange}  placeholder="Enter your Password"/>
								</div>
							</div>
						</div>

						<div class="form-group ">
							<button type="button" class="btn btn-primary btn-lg btn-block login-button" onSubmit={this.handleSubmit}>Sign in</button>
						</div>
						<div class="login-register">
				            <a href="/signup" to="/signup" id="create-account">Create account</a>
				         </div>
					</form>
				</div>
			</div>
		</div>
		);
	}
}

export default Login;
