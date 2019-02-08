import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {



  render() {
    return (
      <div>
        <div className='homeContainer'>
          <div className='homeTitle'>predictive politics.</div>
          <div className='homeSubtitle'>where what you say, <br/>says you how you'll vote.</div>

          <img className='homeImg' src='/img/bird.png' alt='home-content' />

          <Link to='/elections'><div className='button1'>predict a vote</div></Link>
          <Link to='/newelection'><div className='button1'>build new election model</div></Link>
          <div className='homeDescriptionHeading'>How it Works</div>
          <div className='homeDescriptionSubHeading'>Predicting a vote</div>
          <div className='homeDescription'>Predictive Politics allows you to predict how a given Twitter user would vote in an election.  You first choose an election, then give a Twitter handle. Predictive Politics downloads their latest tweets and uses natural language processing machine learning techniques to predict their vote in the chosen election.</div>
          <div className='homeDescriptionSubHeading'>Building a new model</div>
          <div className='homeDescriptionLast'>If you don't see the election you want, you can create a new one by giving the Twitter handles of two candidates. Prediction Politics will then automatically collect data from Twitter and use it to build a model of that election.</div>
        </div>
      </div>
    );
  }
}

          // <div className='homeDescriptionLast'>Due to rate limiting on the free tier of Twitter API, models are currently set to an extremely small sample size (only 50 training examples per candidate) to ensure a building time of less than 2 minutes.  This means they may not be fully accurate all the time.</div>

export default Home;
