import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {



  render() {
    return (
      <div>
        <div style={{height:'100vh',width:'100vw',position:'fixed',top:'0',left:'0',backgroundColor:'black',opacity:'0.5', zIndex:'989'}}></div>
        <div style={{height:'100vh',width:'60vw',position:'fixed',top:'0',right:'0',backgroundColor:'white', textAlign: 'right',zIndex:'999'}}>
          <div style={{height:'60px'}}></div>
          <Link className='sidebarLink' to='/' onClick={this.props.toggle}>home</Link>
          <Link className='sidebarLink' to='/elections' onClick={this.props.toggle}>elections</Link>
          <Link className='sidebarLink' to='/newelection' onClick={this.props.toggle}>new election</Link>
        </div>
      </div>
    );
  }
}

export default Sidebar;
