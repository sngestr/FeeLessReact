import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import DashboardNavigation from './DashboardNavigation';
import PageNavigation from './PageNavigation';
import './stylesheets/RequestForm.css';
import './stylesheets/Dashboard.css';

function Request(props) {
	const status = props.data.status;

	return (
		<div>
			<div className="container text-center">
				<div className="row">
					<div className='col-md-1'>
						<img src={require('./assets/avatar.png')} className="img_icon"/>
					</div>
					<div className='col-md-2'>
						<b>Id: </b>
						{props.data.id}<br />
					</div>
					<div className='col-md-3'>
						<b>From Country: </b>
						{props.data.from_country}<br />
					</div>
					<div className='col-md-3'>
						<b>To Country: </b>
						{props.data.to_country}<br />
					</div>
					<div classname='col-md-3'>
						{status ? (<div><h6> Matched </h6></div>) : 
							(<div><h6> Pending </h6></div>)}
						<b>Transaction Amount: </b>
						{props.data.transaction_amt}
					</div>
				</div>
			</div>
			<hr />
		</div>
	);
}

class Dashboard extends Component {
	constructor() {
		super();
		this.state = {
				requests: [],
				isLoggedIn: true,
				matched_user_id: null,
				request_date: new Date(),
		        transaction_amt: null,
		        status: false, 
		        from_country: '',
		        to_country: '',
		        split_money: false,
		        minimum_amount: null,
		        exchange_in_person: false,
		        countries: [{name: 'United States', currency: 'USD', currency_symbol: '$'},],
		};

		this.getUserRequests = this.getUserRequests.bind(this);
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

	handleChange(event) {
	    const fieldName = event.target.name;
	    this.setState({[fieldName]: event.target.value});
  	}

	handleSubmit(event) {
	    fetch('/dashboard', {
		        method: 'POST',
		        body: JSON.stringify({
		          matched_user_id: this.state.matched_user_id,
		          request_date: this.state.request_date,
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
	    		//Update the user requests
		    	this.getUserRequests();

		    	//Clear the rewuest form
		    	this.setState({
    				from_country: '',
    				to_country: '',
    				transaction_amt: 0.00,
    			});
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

				{/*  Dashboard  */}
				<div className="wrapper">
					<div id="dashboard-content">

						{/* Create new request button */}
						<div>
						<button id="request_button" data-toggle="collapse" data-target="#request_form_wrapper">
							<span> Create new request </span>
							<img src={require('./assets/create_request_btn.png')} className="icon_size"/> </button>
						</div>


						{/*  Request Form  */}
						<div id="request_form_wrapper" className="collapse clear">

							<div id="request_form">
						        <form onSubmit={this.handleSubmit}>
						        {/*  From country: Country sending money from */}
						            <label for="from_country" className="tool_tip"> From Country: 
						            	<span className="tool_tip_text">This is the country that you're sending money from.</span>
						            </label>
						            <input list="countries" id="from_country" name="from_country" value={this.state.from_country} onChange={this.handleChange} required />
						            <datalist id="countries">
							              <option value="France" />
							              <option value="England" />
							              <option value="Poland" />
							              <option value="South Africa" />
							              <option value="India" />
						            </datalist>

						        {/*  To Country: Country sending money to  */}
						          <label for="to_country" className="tool_tip"> To Country: 
						          		<span className="tool_tip_text">This is the country that you want to send money to.</span>
						          </label>
						            <input list="countries" id="to_country" name="to_country" value={this.state.to_country} onChange={this.handleChange} required/>
						            <datalist id="countries">
							              <option value="United States" />
							              <option value="France" />
							              <option value="England" />
							              <option value="Poland" />
							              <option value="South Africa" />
							              <option value="India" />
						            </datalist>

						        {/* Transaction Amount: Amount you want to send to the 'to country' */ }
						          <label for="transaction_amt" className="tool_tip">Transaction Amount: {this.state.currency} 
						          		<span className="tool_tip_text">This is the amount of money you want to send.</span>
						          </label>
						          <input type="number" id="transaction_amt" name="transaction_amt" placeholder="Enter Amount" min="0" step="0.01" value={this.state.transaction_amt} onChange={this.handleChange} />

						        {/* Current Exchange Rate */}
						        <h5>Current Exchange Rate:</h5>
						     	


						          <input type="submit" data-toggle="collapse" data-target="#request_form_wrapper"/>
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
