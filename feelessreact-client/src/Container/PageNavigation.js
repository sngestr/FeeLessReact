//Navigation for all pages expect the homepage
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './stylesheets/PageNavigation.css';

class PageNavigation extends Component {
	constructor() {
		super();
	}

	render() {
		return (
    		<div id="page_nav">
		      <Link to='/'>
		        <img src={require('./assets/logo.png')} id="logo"/>
		      </Link>
    		</div>
  		);
	}
}

export default PageNavigation;
