import React, { Component } from 'react';

class Candidate extends Component {

  selectClass(){
    console.log([this.props.handle, this.props.selected]);
    if (this.props.handle === this.props.selected){
      return 'candidateInnerContainer candidateInnerContainerSelected'
    }
    return 'candidateInnerContainer'
  }

  render() {
    var twitterurl = 'https://twitter.com/' + this.props.handle
    return (
      <div className={this.selectClass()}>
        <img className='candidateImg' src={this.props.img} alt={this.props.handle}/>
        <div className='candidateName'>{this.props.name}</div>
        <div className='candidateParty'>{this.props.party}</div>
        <a href={twitterurl} target='_blank'><div className='candidateHandle'>{this.props.handle}</div></a>
      </div>
    );
  }
}

export default Candidate;
