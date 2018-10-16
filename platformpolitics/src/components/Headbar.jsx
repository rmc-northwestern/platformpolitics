import React, { Component } from 'react';
import Back from './Back';

class Headbar extends Component {

  renderBack(){
    if (this.props.backTo){
      return(<Back backTo={this.props.backTo}/>)
    }
    return
  }
  render() {
    return (
      <div>
        <div className='headbarContainer'>
          {this.renderBack()}
          <img className='headbarLogo' src='/img/logo.png' alt='logo'/>
          <img className='headbarMenu' src='/img/menu.png' alt='menu'/>
        </div>
      </div>
    );
  }
}

export default Headbar;
