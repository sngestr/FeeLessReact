import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = (props) => {
	return (
		<div>
			<Link to="/"> Home </Link>
			<Link to="/login"> Login </Link>
			<Link to="/dashboard"> Dashboard </Link>
		</div>
	);
}

export default Navigation;