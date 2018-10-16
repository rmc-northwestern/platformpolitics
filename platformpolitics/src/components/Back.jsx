import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Back extends Component {
  render() {
    return (
        <Link to={this.props.backTo}>
          <img className='backButton' src='/img/back.png' alt='back'/>
        </Link>
    );
  }
}

export default Back;
