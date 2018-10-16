import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {



  render() {
    return (
      <div>
        <div style={{height:'100vh',width:'100vw',position:'fixed',top:'0',left:'0',backgroundColor:'black',opacity:'0.5', zIndex:'900'}}></div>
        <div style={{height:'100vh',width:'60vw',position:'fixed',top:'0',right:'0',backgroundColor:'white', zIndex:'901'}}>
        </div>
      </div>
    );
  }
}

export default Sidebar;
