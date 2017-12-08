import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import DashboardNavigation from './DashboardNavigation';
import PageNavigation from './PageNavigation';
import RequestForm from './RequestForm';
import './stylesheets/Dashboard.css';

function Request(props) {
	return (
		<div>
			<b>Id:</b>
			{props.data.id}<br />
			<b>From Country:</b>
			{props.data.from_country}<br />
			<b>To Country:</b>
			{props.data.to_country}<br />
			<b>Transaction Amount:</b>
			{props.data.transaction_amt}
			<hr />
		</div>
	);
}

class Dashboard extends Component {
	constructor() {
		super();
		this.state = {
			requests: [],
		};
		this.getUserRequests = this.getUserRequests.bind(this);
		this.logout = this.logout.bind(this);
	}
	componentWillMount(){
		this.getUserRequests();
	}
	getUserRequests() {
		fetch('/dashboard')
			.then((response) => {
				return response.json();
			})
			.then((res) => {
				const requests = res.requests.map((c) => <Request data={c} />);				
				this.setState({
					requests: requests,
				});
			})
			.catch((err) => {
				this.setState({
					requests: [
						<div> nothing to see here </div>
					],
				});
			});
			// console.log(this.state.requests);
	}
	logout() {
		fetch('/logout', {
	        method: 'POST',
        	headers: {
          		"Content-type": "application/json",
        	},
          	"credentials": 'include',
    	}).then((res) => {
	        if(res.state !== 200) {
	          console.log("Could not log out");
	        } else {
	          console.log("Log out successful!");
	        }
    	});
	}
	render() {
		return(
			<div>
				<PageNavigation />
				<DashboardNavigation />
				<button onClick={this.logout}>Logout</button>

				<div className="wrapper">
					<div id="dashboard-content">
						<div>
						<button id="request_button" data-toggle="collapse" data-target="#request_form_wrapper">Create new request </button>
						</div>
						<div id="request_form_wrapper" className="collapse clear">
							<RequestForm />
						</div>
						
						<div id="dashboard_main" className="clear">
							<div>{this.state.requests}</div>
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
