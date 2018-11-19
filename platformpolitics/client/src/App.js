import React, { Component } from 'react';
import './App.css';
import Headbar from './components/Headbar';
import Home from './components/Home';
import Customers from './components/Customers';

class App extends Component {
  render() {
    return (
      <div>
        <Headbar/>
        <Home />
        <Customers/>
      </div>
    );
  }
}

export default App;
