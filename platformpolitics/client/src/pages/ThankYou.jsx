import React, { Component } from 'react';
import Headbar from '../components/Headbar';
import { Link } from 'react-router-dom';

class ThankYou extends Component {

  render() {

    return (
      <div>
        <Headbar backTo='/elections'/>
        <div className='electionsContainer'>
          <div className='electionsTitle'><b>Thank you!</b></div>
          <img className='thankYouImg' src='/img/bird.png' alt='home-content' />
          <div className='thankYouSubtitle'>Your model is being built now.</div>
          <br/><br/><br/>
          <div className='electionsDescription'>enter your email to receive updates:</div>
          <input className='electionsInput' type='text' placeholder='email...' />
          <Link to='/'><button className='button1'>submit</button></Link>
        </div>
      </div>
    );
  }
}

export default ThankYou;
