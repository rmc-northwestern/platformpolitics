import React, { Component } from 'react';
import Headbar from '../components/Headbar';
import { Link } from 'react-router-dom';
import Candidate from '../components/Candidate';
import Loading from '../components/Loading';

class SelectedCandidate extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectedCandidate:'',
      apiSuccess:false
    }
  }

  componentDidMount() {
    var apiPath = '/api/predict/' + this.props.match.params.race + '/' + this.props.match.params.handle
    console.log("API PATH CALL: ",apiPath)
    fetch(apiPath)
      .then(res => res.text())
      .then(candidate => this.setState({selectedCandidate:candidate, apiSuccess:true}));
  }

  receiveSelected(name){
    this.setState({
      selectedCandidate: name
    })
  }

  render() {
    console.log(this.state.selectedCandidate)
    var selectedCandidateTrimmed = this.state.selectedCandidate
    var twitterurl = 'https://twitter.com/' + this.state.selectedCandidate

    if(this.state.apiSuccess){
      return (
        <div>
          <Headbar backTo='/elections'/>
          <div className='electionsContainer'>
            <div className='electionsTitle'><b>{this.props.match.params.race}:</b></div>
            <div className='candidateOuterContainer'>
              <Candidate
                handle={this.props.match.params.c1}
                selected={selectedCandidateTrimmed}
                receiveSelected = {this.receiveSelected.bind(this)}
                />
              <Candidate
                handle={this.props.match.params.c2}
                selected={selectedCandidateTrimmed}
                receiveSelected = {this.receiveSelected.bind(this)}
                />
              <div className='selectedCandidateContainer'>
                <div className='selectedCandidateText'>your candidate:</div>
                <a href={twitterurl} target='_blank'><div className='selectedCandidateName'>@{this.state.selectedCandidate}</div></a>
              </div>
              <Link to='/elections'><button className='button1'>more elections...</button></Link>
            </div>
          </div>
        </div>
      );
    }
    else{
      return(<Loading/>)
    }

  }
}

export default SelectedCandidate;
