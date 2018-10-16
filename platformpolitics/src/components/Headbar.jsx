import React, { Component } from 'react';
import Back from './Back';
import Sidebar from './Sidebar'

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
          <img className='headbarLogo' src='/img/logo.png' alt='logo'/>
          <img className='headbarMenu' src='/img/menu.png' alt='menu' onClick={()=>this.toggleSidebar()}/>
        </div>
      </div>
    );
  }
}

export default Headbar;
