import React, { Component } from 'react';
import {Link, Redirect, Route} from 'react-router-dom';
import PageNavigation from './PageNavigation';

import './stylesheets/Help.css'; // CSS file for the the style

class Help extends Component {
	
	constructor() {

		super();
		this.state = {
			email: '',
			password: '',
			message:'',
			pnoneNumber:'',
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
			<section id="contact">
			<div class="section-content">
				<h1 class="section-header">Get in <span class="content-header wow fadeIn " data-wow-delay="0.2s" data-wow-duration="2s"> Touch with us</span></h1>
			</div>
			<div class="contact-section">
			<div class="container">
				<form>
					<div class="col-md-6 form-line">
			  			<div class="form-group">
			  				<label for="exampleInputUsername">Your name</label>
					    	<input type="text" class="form-control" id="" placeholder=" Enter Name"></input>
				  		</div>
				  		<div class="form-group">
					    	<label for="exampleInputEmail">Email Address</label>
					    	<input type="email" class="form-control" id="exampleInputEmail" placeholder=" Enter Email id"></input>
					  	</div>	
					  	<div class="form-group">
					    	<label for="telephone">Mobile No.</label>
					    	<input type="tel" class="form-control" id="telephone" placeholder=" Enter 10-digit mobile no."></input>
			  			</div>
			  		</div>
			  		<div class="col-md-6">
			  			<div class="form-group">
			  				<label for ="description"> Message</label>
			  			 	<textarea  class="form-control" id="description" placeholder="Enter Your Message"></textarea>
			  			</div>
			  			<div>

			  				<button type="button" class="btn btn-default submit"><i class="fa fa-paper-plane" aria-hidden="true"></i>  Submit</button>
			  			</div>
					</div>
				</form>
			</div>
			</div>
		</section>
		</div>
		);
	}
}

export default Login;
