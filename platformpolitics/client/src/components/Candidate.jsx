import React, { Component } from 'react';

class Candidate extends Component {

  selectClass(){
    if (this.props.handle === this.props.selected){
      return 'candidateInnerContainer candidateInnerContainerSelected'
    }
    return 'candidateInnerContainer'
  }

  render() {
    var twitterurl = 'https://twitter.com/' + this.props.handle
    var imgURL = '/img/fallback.png'
    if (this.props.img){imgURL = this.props.img}
    return (
      <div className={this.selectClass()}>
        <img className='candidateImg' src={imgURL} alt='candidate-img'/>
        <div className='candidateName'>{this.props.name}</div>
        <a href={twitterurl} target='_blank'><div className='candidateHandle'>{this.props.handle}</div></a>
      </div>
    );
  }
}

export default Candidate;
