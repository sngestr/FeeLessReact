//Navigation for the homepage only

import React from 'react';
import {Link} from 'react-router-dom';
import './Container/stylesheets/Navigation.css';

const Navigation = () => {
	return (
		<div class="nav">
			<Link to="/"> FeeLess </Link>
			<Link to="/login"> Login </Link>
		</div>
	);
}

export default Navigation;
