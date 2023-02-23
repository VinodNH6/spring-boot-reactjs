import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import ClientList from './components/ClientList';
import Test from './components/Test';

function App() {
  return (
    <div className="App">

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}


      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/clients' exact={true} component={ClientList}/>
          <Route path='/test' exact={true} component={Test}/>
          {/* <Route path='/clients/:id' component={ClientEdit}/> */}
        </Switch>
      </Router>


    </div>
  );
}

export default App;
