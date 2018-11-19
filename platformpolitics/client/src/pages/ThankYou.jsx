import React, { Component } from 'react';
import Headbar from '../components/Headbar';
import { Link } from 'react-router-dom';
import Candidate from '../components/Candidate';

class ThankYou extends Component {

  render() {
    const tempList = ['Illinois District 1', 'Illinois District 2', 'Illinois District 3', 'Illinois District 4', 'Illinois District 5', 'Illinois District 6']
    const electionsList = tempList.map((election)=>{
      return(<div className='electionsListElement'>{election}</div>)
    })

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
