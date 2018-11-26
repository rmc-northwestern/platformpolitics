import React, { Component } from 'react';
import Headbar from '../components/Headbar';
import { Link } from 'react-router-dom';
import Candidate from '../components/Candidate';

class SelectedCandidate extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectedCandidate:''
    }
  }

  componentDidMount() {
    var apiPath = '/api/candidate/' + this.props.match.params.handle
    fetch(apiPath)
      .then(res => res.json())
      .then(candidate => this.setState({candidate}, () => console.log('Candidate selections fetched...', candidate)));
  }

  render() {
    console.log(this.state.selectedCandidate)

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
              handle='@True_Phanatic'
              selected={false}
              />
            <Candidate
              img='/img/gritty.jpg'
              name='Gritty'
              party='Democrat'
              handle='@GrittyNHL'
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
