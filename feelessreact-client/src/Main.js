import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Container/Home';
import Login from './Container/Login';


const Main = () => {
	return (
		<div>
			<main>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path="/login" component={Login} />
				</Switch>
			</main>
		</div>
	);
}

export default Main;