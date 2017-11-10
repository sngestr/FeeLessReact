import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './container/Home';
import Dashboard from './container/Dashboard';
import Login from './container/Login';

const App =() => (
      <div>


        <main>
        <Navigation />
          <Switch>
            <Route path="/" exact Component={Home} />
            <Route path="/login" Component={Login} />
          </Switch>
        </main>
      </div>
)

export default App;
