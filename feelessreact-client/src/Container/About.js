import React, { Component } 	from 'react';
import {Link, Redirect, Route} 	from 'react-router-dom';
import PageNavigation 			from './PageNavigation';

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

        <div class="row">
            
            <div class="col-xs-12">
            
            <div class="col-md-4 col-sm-6 col-xs-12">    
                
                <div class="aboutus-image float-left hidden-sm">
                	<img src={require('./assets/FeeLessTeam.jpg')} alt="" />
                </div>
                
                </div>
            <div class="col-md-8 col-sm-6 col-xs-12">
                <div class="aboutus-content ">
                    <h1>About us <span>FeeLess</span></h1>
                    <h4>The FeeLess Group</h4>
                    
                    <p>We are a group of four young developers who dream big to change the world of transactions!</p>
                    <p>The vision of FeeLess is to help customers save money while insuring safe transactions internationally.</p>
                    <p>What motivated us the most is the ability to use our wide networking to help one another.</p>
                    <p>Thank you for using FeeLess. Stay tuned for upcoming updates!</p>
                    
                    <div class="counter ">
                        
                        <div class="single-counter text-center">
                            <h2 class="counter">70000</h2>
                            <p>connected users</p>
                        </div>
                        
                        <div class="single-counter text-center">
                            <h2 class="counter">18</h2>
                            <p>Countries for transactions</p>
                        </div>
                        
                        <div class="single-counter text-center">
                            <h2 class="counter">14000</h2>
                            <p>transactions made</p>
                        </div>
                        
                        <div class="single-counter text-center">
                            <h2 class="counter">24/7</h2>
                            <p>Customer Service</p>
                        </div>
                        
                    </div>
                    
                </div>
            </div>    
            </div>
        </div>
    </div>
		);
	}
}

export default Login;
