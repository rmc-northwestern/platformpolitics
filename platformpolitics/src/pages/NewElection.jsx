import React, { Component } from 'react';
import Headbar from '../components/Headbar';

class NewElection extends Component {
  render() {
    return (
      <div>
        <Headbar backTo='/'/>
        <div className='electionsContainer'>
          <div className='electionsTitle'>build a new model:</div>

          <div className='electionsDescription'>Name your election model:</div>
          <input className='electionsInput' type='text' placeholder='name...' />

          <div className='electionsDescription'>candidate 1 twitter handle:</div>
          <input className='electionsInput' type='text' placeholder='@i-am-a-handle...' />

          <div className='electionsDescription'>candidate 2 twitter handle:</div>
          <input className='electionsInput' type='text' placeholder='@i-too-am-a-handle...' />

          <button className='button1'>build model</button>
        </div>
      </div>
    );
  }
}

export default NewElection;
