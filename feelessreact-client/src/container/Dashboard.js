import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import DashboardNavigation from './DashboardNavigation';
import PageNavigation from './PageNavigation';
import './stylesheets/RequestForm.css';
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
				isLoggedOut: false,
				isLoggedIn: true,
				matched_user_id: null,
		        transaction_amt: null,
		        status: false, 
		        from_country: '',
		        to_country: '',
		        split_money: false,
		        minimum_amount: null,
		        exchange_in_person: false,
		        currency: '$',
		        countries: ['United States', 'France', 'England', 'Canada'],
		};

		this.getUserRequests = this.getUserRequests.bind(this);
		this.logout = this.logout.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.checkIfLoggedIn = this.checkIfLoggedIn.bind(this);
	}

	componentWillMount() {
		this.checkIfLoggedIn();
	}

	componentDidMount() {
    	if(this.state.isLoggedIn){
			this.getUserRequests();
		}
    }

	checkIfLoggedIn() {
		fetch('/login', {
			credentials: 'include'
		})
		.then((res) => {
			if(res.status !== 200) {
				this.setState({
					isLoggedIn: false,
				}, 
				this.findRoutes);
			} else {
				console.log("logged in!!!!!");
				this.setState({
					isLoggedIn: true,
				},
				this.findRoutes);
			}
		});
	}
	getUserRequests() {
		fetch('/dashboard', {
  			credentials: 'include'
			})
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
						<div> Nothing to see here </div>
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
		        if(res.status !== 200) {
		          console.log("Could not log out");
		        } else {
		        	this.setState({
		        		isLoggedOut: true,
		        	})
		          console.log("Log out successful!");
		        }
    	});
	}

	handleChange(event) {
	    const fieldName = event.target.name;
	    this.setState({[fieldName]: event.target.value});
  	}

	handleSubmit(event) {
	    fetch('/dashboard', {
		        method: 'POST',
		        body: JSON.stringify({
		          matched_user_id: this.state.matched_user_id,
		          transaction_amt: this.state.transaction_amt,
		          status: this.state.status,
		          from_country: this.state.from_country,
		          to_country: this.state.to_country,
		          split_money: this.state.split_money,
		          minimum_amount: this.state.minimum_amount,
		          exchange_in_person: this.state.exchange_in_person,
		        }),
		        headers: {
		          "Content-type": "application/json",
		        },
		          "credentials": 'include',
	    }).then((res) => {
		        if(res.state !== 200) {
		          console.log("did not submit request form");
		        } else {
		          console.log("request form submitted");
		        }
	    }).then((body) => {
		    	this.getUserRequests();
		        console.log(body);
	    });

	    event.preventDefault();
    }
	render() {
		/*Redirect when user is not logged in*/
		if(this.state.isLoggedOut){
			return <Redirect to="/" />
		}
		if(!this.state.isLoggedIn) {
			return <Redirect to="/login" />
		}

		return(
			<div>
				{/*  Navigation  */}
				<PageNavigation />
				<DashboardNavigation />
				<button onClick={this.logout}>Logout</button>

				{/*  Dashboard  */}
				<div className="wrapper">
					<div id="dashboard-content">
						<div>
						<button id="request_button" data-toggle="collapse" data-target="#request_form_wrapper">Create new request </button>
						</div>


						{/*  Request Form  */}
						<div id="request_form_wrapper" className="collapse clear">

							<div id="request_form">
						        <form onSubmit={this.handleSubmit}>

						            <label for="from_country"> From Country: </label>
						            <input list="countries" id="from_country" name="from_country" value={this.state.from_country} onChange={this.handleChange} required />
						            <datalist id="countries">
						              <option value="France" />
						              <option value="England" />
						              <option value="Poland" />
						              <option value="South America" />
						              <option value="India" />
						            </datalist>

						          <label for="to_country"> To Country: </label>
						            <input list="countries" id="to_country" name="to_country" value={this.state.to_country} onChange={this.handleChange} required/>
						            <datalist id="countries">
						              <option value="United States" />
						              <option value="France" />
						              <option value="England" />
						              <option value="Poland" />
						              <option value="South America" />
						              <option value="India" />
						            </datalist>

						          <label for="transaction_amt">Transaction Amount: {this.state.currency} </label>
						          <input type="number" id="transaction_amt" name="transaction_amt" placeholder="Enter Amount" min="0" step="0.01" value={this.state.transaction_amt} onChange={this.handleChange} />


						          <input type="submit" />
						        </form>
					      	</div>

						</div>
						{/*  End Request Form  */}


						{/*  List of Requests  */}
						<div id="dashboard_main" className="clear">
							<div>{this.state.requests}</div>
						</div>
						{/*  End List of Requests  */}

					</div>
				</div>

				{/*  Dashboard side images  */}
				<div className="d-none d-lg-block">
					<img src={require('./assets/left.png')} id="left_image" className="tree_img"/>
					<img src={require('./assets/right.png')} id="right_image" className="tree_img"/>
				</div>
				{/*  End Dashboard side images  */}

			</div>
		);
	}
}

export default Dashboard
