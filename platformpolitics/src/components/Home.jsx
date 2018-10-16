import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {



  render() {
    return (
      <div>
        <div className='homeContainer'>
          <div className='homeTitle'>platform politics.</div>
          <div className='homeSubtitle'>where what you say <br/>says you how you'll vote</div>

          <img className='homeImg' src='/img/bird.png' alt='home-content' />

          <Link to='/elections'><div className='button1'>see current elections</div></Link>
          <Link to='/newelection'><div className='button1'>build new model</div></Link>
        </div>
      </div>
    );
  }
}

export default Home;
