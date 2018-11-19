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
    var twitterurl = 'https://twitter.com/' + this.props.handle
    return (
      <div className={this.selectClass()}>
        <img className='candidateImg' src={this.props.img} />
        <div className='candidateName'>{this.props.name}</div>
        <div className='candidateParty'>{this.props.party}</div>
        <a href={twitterurl} target='_blank'><div className='candidateHandle'>{this.props.handle}</div></a>
      </div>
    );
  }
}

export default Candidate;
