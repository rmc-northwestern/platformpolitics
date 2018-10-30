import React, { Component } from 'react';
import Headbar from '../components/Headbar';
import { Link } from 'react-router-dom';
import Candidate from '../components/Candidate';

class Election extends Component {

  render() {
    const tempList = ['Illinois District 1', 'Illinois District 2', 'Illinois District 3', 'Illinois District 4', 'Illinois District 5', 'Illinois District 6']
    const electionsList = tempList.map((election)=>{
      return(<div className='electionsListElement'>{election}</div>)
    })

    return (
      <div>
        <Headbar backTo='/elections'/>
        <div className='electionsContainer'>
          <div className='electionsTitle'><b>Illinois</b><br/>District 1:</div>
          <div className='candidateOuterContainer'>
            <Candidate
              img='/img/phanatic.jpg'
              name='Phanatic'
              party='Republican'
              />
            <Candidate
              img='/img/gritty.jpg'
              name='Gritty'
              party='Democrat'
              />
            <div className='electionsDescription'>enter a twitter handle:</div>
              <input className='electionsInput' type='text' placeholder='@i-am-a-handle...' />
            <Link to='/selectedCandidate'><button className='button1'>test your tweets</button></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Election;
