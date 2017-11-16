import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import DashboardNavigation from './DashboardNavigation';
import PageNavigation from './PageNavigation';
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
				<h1> Dashboard Component </h1>
			</div>
		);
	}
}

export default Dashboard
