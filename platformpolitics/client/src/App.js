import React, { Component } from 'react';
import './App.css';
import Headbar from './components/Headbar';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div>
        <Headbar/>
        <Home />
      </div>
    );
  }
}

export default App;
