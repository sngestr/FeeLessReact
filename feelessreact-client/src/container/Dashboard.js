import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import DashboardNavigation from './DashboardNavigation';
import PageNavigation from './PageNavigation';
import RequestForm from './RequestForm';
import './stylesheets/Dashboard.css';

class Dashboard extends Component {
	constructor() {
		super();
	}

	render() {
		return(
			<div>
				<PageNavigation />
				<DashboardNavigation />

				<div class="wrapper">
					<div id="dashboard-content">
						<div>
						<button id="request_button" data-toggle="collapse" data-target="#request_form_wrapper">Create new request </button>
						</div>
						<div id="request_form_wrapper" class="collapse clear">
							<RequestForm />
						</div>

						<div id="dashboard_main" class="clear">
							<h1> Requests will appear here </h1>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Dashboard
