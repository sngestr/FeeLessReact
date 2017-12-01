import React, {Component} from 'react';
import './stylesheets/RequestForm.css';

class RequestForm extends Component {
  constructor() {
    super();
    this.state = {
      matched_user_id: null,
      transaction_amt: 0,
      status: false, 
      from_country: '',
      to_country: '',
      split_money: false,
      minimum_amount: 0,
      exchange_in_person: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const fieldName = event.target.name;
    this.setState({[fieldName]: event.target.value});
  }

  handleSubmit(event) {
    fetch('dashboard', {
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
    }).then((res) => {
        if(res.state != 200) {
          console.log("did not submit request form");
        } else {
          console.log("request form submitted");
        }
    }).then((body) => {
        console.log(body);
    })

    event.preventDefault();
  }

  render() {
    return (
      <div id="request_form">
        <form onSubmit={this.handleSubmit}>
          <label for="from_country"> From Country: </label>
          <select id="from_country" value={this.state.from_country} onChange={this.handleChange}>
            <option value="United States"> United States </option>
            <option value="Canada"> Canada </option>
          </select>

          <label for="to_country"> To Country: </label>
          <select name="to_country" id="to_country" value={this.state.to_country} onChange={this.handleChange}>
            <option value="China">China</option>
            <option value="France">France</option>
          </select>

          <label for="transaction_amt">Transaction Amount: </label>
          <input type="number" id="transaction_amt" name="transaction_amt" value={this.state.transaction_amt} onChange={this.handleChange} />


          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default RequestForm;
