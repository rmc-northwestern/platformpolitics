import React, { Component } from 'react';
import Headbar from '../components/Headbar';
import { Link } from 'react-router-dom';

class Elections extends Component {

  render() {
    const tempList = ['Illinois District 1', 'Illinois District 2', 'Illinois District 3', 'Illinois District 4', 'Illinois District 5', 'Illinois District 6']
    const electionsList = tempList.map((election)=>{
      return(<div className='electionsListElement'>{election}</div>)
    })

    return (
      <div>
        <Headbar backTo='/'/>
        <div className='electionsContainer'>
          <div className='electionsTitle'>current elections:</div>
          <div className='electionsListContainer'>{electionsList}</div>
          <Link to='newelection'><button className='button1'>build new model</button></Link>
        </div>
      </div>
    );
  }
}

export default Elections;
