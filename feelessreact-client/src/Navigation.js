//Navigation for the homepage only
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Container/stylesheets/Navigation.css';

class Navigation extends Component {
	constructor() {
		super();
		this.state = {
			isLoggedIn: false,
		}
		this.checkIfLoggedIn = this.checkIfLoggedIn.bind(this);
		this.logout = this.logout.bind(this);
		this.refreshPage = this.refreshPage.bind(this);
	}

	componentWillMount() {
		this.checkIfLoggedIn();
	}

	checkIfLoggedIn() {
		fetch('/login', {
			credentials: 'include'
		})
		.then((res) => {
			if(res.status !== 200) {
				this.setState({
					isLoggedIn: false,
				});
			} else {
				this.setState({
					isLoggedIn: true,
				});
			}
		});
	}

	logout() {
		fetch('/logout', {
		        method: 'POST',
	        	headers: {
	          		"Content-type": "application/json",
	        	},
	          	"credentials": 'include',
    	}).then((res) => {
		        if(res.status !== 200) {
		          console.log("Could not log out");
		        } else {
		        	this.setState({
		        		isLoggedIn: false,
		        	})
		        	this.refreshPage();
		          console.log("Log out successful!");
		        }
    	});
	}

	/* For refreshing the page when the user log out */
	refreshPage(){ 
    	window.location.reload(); 
	}

	render() {
		const isLoggedIn = this.state.isLoggedIn;

		return (
			<div className="nav">
			<Link to='/'>
		        <img src={require('./Container/assets/logo-white.png')} id="logo"/>
		    </Link>
		    {isLoggedIn ? (
		    	<div className="move-right">
		    		<Link to="/" className="homepage-link"> About </Link>
					<Link to="/" className="homepage-link"> Help </Link>
					<button onClick={this.logout} class="homepage-link nav_logout_btn">Logout</button>
				</div>
		    	) : (
		    	<div className="move-right">
					<Link to="/" className="homepage-link"> About </Link>
					<Link to="/" className="homepage-link"> Help </Link>
					<Link to="/login" className="homepage-link"> Login </Link>
				</div>  
			)}
		</div>
		);
	}
}

export default Navigation;
