//Navigation for all pages expect the homepage
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './stylesheets/PageNavigation.css';

class PageNavigation extends Component {
	constructor() {
		super();
		this.state = {
			isLoggedIn: false,
		}

		this.checkIfLoggedIn = this.checkIfLoggedIn.bind(this);
		this.refreshPage = this.refreshPage.bind(this);
		this.logout = this.logout.bind(this);
		this.getUserInformation = this.getUserInformation.bind(this);
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

	componentDidMount() {
		this.getUserInformation();
	}

	getUserInformation() {

	}

	/* For refreshing the page when the user log out */
	refreshPage(){ 
    	window.location.reload(); 
	}

	render() {
		const isLoggedIn = this.state.isLoggedIn;

		return (
    		<div id="page_nav">
		      <Link to='/'>
		        <img src={require('./assets/logo.png')} id="logo"/>
		      </Link>

		      {isLoggedIn ? (
		      	<div class="top_right_side">
		      		<p class="inline">Hello! </p>
		      		<button onClick={this.logout} class="inline logout_btn">Logout</button>
		      	</div> 
		      	) : (
		      	<div class="top_right_side">
		      	</div>
		      )}

    		</div>
  		);
	}
}

export default PageNavigation;
