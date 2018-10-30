import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Candidate extends Component {

  selectClass(){
    if (this.props.selected){
      return 'candidateInnerContainer candidateInnerContainerSelected'
    }
    return 'candidateInnerContainer'
  }

  render() {
    return (
      <div className={this.selectClass()}>
        <img className='candidateImg' src={this.props.img} />
        <div className='candidateName'>{this.props.name}</div>
        <div className='candidateParty'>{this.props.party}</div>
      </div>
    );
  }
}

export default Candidate;
