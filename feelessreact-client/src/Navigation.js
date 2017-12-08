//Navigation for the homepage only

import React from 'react';
import {Link} from 'react-router-dom';
import './Container/stylesheets/Navigation.css';

const Navigation = () => {
	return (
		<div className="nav">
			<Link to='/'>
		        <img src={require('./Container/assets/logo-white.png')} id="logo"/>
		    </Link>
		    <div className="move-right">
				<Link to="/login" className="homepage-link"> Login </Link>
				<Link to="/" className="homepage-link"> About </Link>
				<Link to="/" className="homepage-link"> Help </Link>
			</div>
		</div>
	);
}

export default Navigation;
