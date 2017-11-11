import React from 'react';
import {Link} from 'react-router-dom';
import './Container/stylesheets/Navigation.css';

const Navigation = () => {
	return (
		<div>
			<Link to="/"> Home </Link>
			<Link to="/login"> Login </Link>
		</div>
	);
}

export default Navigation;