import React, { Component } from 'react';
import Back from './Back';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';

class Headbar extends Component {

  constructor(props){
    super(props);
    this.state = {
      sidebar:false
    }
  }

  toggleSidebar(){
    this.setState({sidebar:!this.state.sidebar})
  }

  renderBack(){
    if (this.props.backTo){
      return(<Back backTo={this.props.backTo}/>)
    }
    return
  }

  renderSidebar(){
    if (this.state.sidebar){
      return(
        <Sidebar/>
      )
    }
  }

  render() {
    return (
      <div>
        <div className='headbarContainer'>
          {this.renderBack()}
          {this.renderSidebar()}
          <Link to='/'><img className='headbarLogo' src='/img/logo.png' alt='logo'/></Link>
          <img className='headbarMenu' src='/img/menu.png' alt='menu' onClick={()=>this.toggleSidebar()}/>
        </div>
      </div>
    );
  }
}

export default Headbar;
