import React, { Component } from 'react';
import './stylesheets/Home.css';
import { Link, Redirect } from 'react-router-dom';
import ReactDOM from "react-dom"; // Rendering engine 
import Navigation from '../Navigation';

//class Home extends Component {
class Home extends React.Component { // Everything in react is a component. 

	constructor() {
		super();
		this.state = {
			isLoggedIn: false,
		}

		this.checkIfLoggedIn = this.checkIfLoggedIn.bind(this);
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
				console.log("logged in!!!!!");
				this.setState({
					isLoggedIn: true,
				});
			}
		});
	}

	render() {
		const isLoggedIn = this.state.isLoggedIn;
		return (

			<div id="home_component">

				<img src={require('./assets/homebg.png')} className="bg" />
				<Navigation />

				<div id="homepage-header-content">
					<h1> Avoid the fees </h1>
					<p>Enjoy feeless international transactions and start saving today</p>

					{isLoggedIn ? (
						<Link to="/dashboard" className="button"> Dashboard </Link> ) : (
						<Link to="/signup" className="button"> Sign up</Link> )}
				</div>

			</div>
		);
	}
}

export default Home;
