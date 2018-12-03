import React, { Component } from 'react';
import Headbar from '../components/Headbar';
import { Link } from 'react-router-dom';

class ThankYou extends Component {

  componentDidMount(){
    var api = '/api/create/' + this.props.match.params.name + '/' + this.props.match.params.h1 + '/' + this.props.match.params.h2
    fetch(api)
      .then(res => res.json())
      .then(elections => this.setState({elections:elections,apiSuccess:true},
        () => console.log('Elections fetched...', elections)))
      .then(() => this.populateRace());
  }

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
          <Link to='/'><button className='button1'>home</button></Link>
        </div>
      </div>
    );
  }
}

export default ThankYou;
