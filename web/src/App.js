import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Weather from './templates/Weather'
import NotFound from './templates/NotFound'
import About from './templates/About'


export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={ Weather }/>
          <Route path="/about" component={ About } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </Router>
    </div>
  );
}
