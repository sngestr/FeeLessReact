import React, { Component } from 'react';
import logo 				from './logo.svg';
import { Route, Switch } 	from 'react-router-dom';
import Navigation 			from './Navigation';
import Main 				from './Main';
import './App.css';

const App = () => (
  <div>
    <Main />
  </div>
)

export default App;