import React, { Component } from 'react';

class Candidate extends Component {

  constructor(props){
    super(props);
    this.state={
      candidate:'',
      race:'',
      elections:'',
      api: false
    }
  }

  componentDidMount(){
    fetch('/api/get_races')
      .then(res => res.json())
      .then(elections => this.setState({elections: elections, api: true}))
      .then(() => this.populateRace());
  }

  populateRace(){
    var i;
    for (i=0; i < this.state.elections.length; i++){
      if (this.state.elections[i][0] === this.props.handle){
        this.setState({
          race: this.state.elections[i]
        })
      }

    var apiURL = '/api/get_pic_name/' + this.props.handle
    fetch(apiURL)
      .then(res => res.json())
      .then(candidate => this.setState({candidate}))
    }
  }

  selectClass(){
    if (this.props.handle === this.props.selected){
      return 'candidateInnerContainer candidateInnerContainerSelected'
    }
    return 'candidateInnerContainer'
  }

  render() {
    var twitterurl = 'https://twitter.com/' + this.props.handle
    var imgURL = '/img/fallback.png'
    const words = this.props.words.map((word, i) => {
      return(
        <div key={i}>{word}</div>
      )
    })
    if (this.state.candidate[1]){imgURL = this.state.candidate[1]}
    return (
      <div className={this.selectClass()}>
        <img className='candidateImg' src={imgURL} alt='candidate-img'/>
        <div className='candidateName'>{this.state.candidate[0]}</div>
        <a href={twitterurl} target='_blank'><div className='candidateHandle'>@{this.props.handle}</div></a>
        <div className='candidateInfo'>
          <b>Most Predictive Words:</b>
          <br/>
          {words}
        </div>
      </div>
    );
  }
}

export default Candidate;
