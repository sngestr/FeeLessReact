import React 		    from 'react';
import {Switch, Route}  from 'react-router-dom';
import Home 		    from './Container/Home';
import Login 		    from './Container/Login';
import Dashboard 	    from './Container/Dashboard';
import SignUp 			from './Container/SignUp';
import './Container/stylesheets/Main.css';


const Main = () => {
	return (
		<div className="main">
			<main>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path="/login" component={Login} />
					<Route path="/dashboard" component={Dashboard} />
					<Route path="/signup" component={SignUp} />
				</Switch>
			</main>
		</div>
	);
}

export default Main;