import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import DashboardNavigation from './DashboardNavigation';
import PageNavigation from './PageNavigation';
import RequestForm from './RequestForm';
import './stylesheets/Dashboard.css';

class Dashboard extends Component {
	constructor() {
		super();
	}

	componentWillMount() {
		fetch('/dashboard')
		.then(result => {
			return result.json();
		}).then(data => {

		})
	}

	render() {
		return(
			<div>
				<PageNavigation />
				<DashboardNavigation />

				<div className="wrapper">
					<div id="dashboard-content">
						<div>
						<button id="request_button" data-toggle="collapse" data-target="#request_form_wrapper">Create new request </button>
						</div>
						<div id="request_form_wrapper" class="collapse clear">
							<RequestForm />
						</div>

						<div id="dashboard_main" class="clear">
							<h1> Requests will appear here </h1>
							<h1> Requests will appear here </h1>
							<h1> Requests will appear herdsnfkjsnfjnskjdnfkjnskfkjsne </h1>
							<h1> Requests will appear here </h1>
							<h1> Requests will appear here </h1>
							<h1> Requests will appear here </h1>
							<h1> Requests will appear here </h1>
							<h1> Requests will appear here </h1>
							<h1> Requests will appear here </h1>
							<h1> Requests will appear here </h1>
							<h1> Requests will appear here </h1>
							<h1> Requests will appear here </h1>
							<h1> Requests will appear here </h1>
							<h1> Requests will appear here </h1>
						</div>
					</div>
				</div>

				<img src={require('./assets/left.png')} id="left_image" className="tree_img"/>
				<img src={require('./assets/right.png')} id="right_image" className="tree_img"/>
			</div>
		);
	}
}

export default Dashboard
