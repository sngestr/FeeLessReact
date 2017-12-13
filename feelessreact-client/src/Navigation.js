//Navigation for the homepage only

import React from 'react';
import {Link} from 'react-router-dom';
import './Container/stylesheets/Navigation.css';

const Navigation = () => {
	return (
		
		<div className="nav">	
			
			<div className="move-left">
				<Link to='/'>
			        <img src={require('./Container/assets/logo-white.png')} id="logo"/>
			    </Link>	
			</div>
			
		    
		    <div className="move-right">
				<Link to="/login" className="homepage-link"> Login </Link>
				<Link to="/about" className="homepage-link"> About </Link>
				<Link to="/help"  className="homepage-link"> Help </Link>
			</div>
		</div>
	);
}

export default Navigation;
