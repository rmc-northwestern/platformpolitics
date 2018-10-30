import React, { Component } from 'react';
import Headbar from '../components/Headbar';
import { Link } from 'react-router-dom';
import Candidate from '../components/Candidate';

class SelectedCandidate extends Component {

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
              selected={false}
              />
            <Candidate
              img='/img/gritty.jpg'
              name='Gritty'
              party='Democrat'
              selected={true}
              />
            <div className='selectedCandidateContainer'>
              <div className='selectedCandidateText'>your candidate:</div>
              <div className='selectedCandidateName'>Gritty</div>
              <div className='selectedCandidateText'>top keywords:</div>
              <div className='selectedCandidateKeywords'>philadelphia, civil rights, googly eyes</div>
            </div>
            <Link to='/elections'><button className='button1'>see another election</button></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SelectedCandidate;
