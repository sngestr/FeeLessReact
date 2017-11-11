import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Container/Home';
import Login from './Container/Login';
import Dashboard from './Container/Dashboard';


const Main = () => {
	return (
		<div>
			<main>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path="/login" component={Login} />
					<Route path="/dashboard" component={Dashboard} />
				</Switch>
			</main>
		</div>
	);
}

export default Main;