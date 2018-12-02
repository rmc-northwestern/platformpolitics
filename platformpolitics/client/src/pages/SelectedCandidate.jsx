import React, { Component } from 'react';
import Headbar from '../components/Headbar';
import { Link } from 'react-router-dom';
import Candidate from '../components/Candidate';

class SelectedCandidate extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectedCandidate:'',
      apiSuccess:false
    }
  }

  componentDidMount() {
    var apiPath = '/api/candidate/' + this.props.match.params.handle
    fetch(apiPath)
      .then(res => res.text())
      .then(candidate => this.setState({selectedCandidate:candidate, apiSuccess:true}, () => console.log('Candidate selections fetched...', candidate)));
  }

  render() {
    console.log(this.state.selectedCandidate)
    var selectedCandidateTrimmed = this.state.selectedCandidate
    selectedCandidateTrimmed = selectedCandidateTrimmed.substring(0, selectedCandidateTrimmed.length - 1);

    if(this.state.apiSuccess){
      return (
        <div>
          <Headbar backTo='/elections'/>
          <div className='electionsContainer'>
            <div className='electionsTitle'><b>Texas</b><br/>Senate:</div>
            <div className='candidateOuterContainer'>
              <Candidate
                img='/img/ted.jpg'
                name='Ted Cruz'
                party='Republican'
                handle='@tedcruz'
                selected={selectedCandidateTrimmed}
                />
              <Candidate
                img='/img/beto.jpg'
                name='Beto ORourke'
                party='Democrat'
                handle='@BetoORourke'
                selected={selectedCandidateTrimmed}
                />
              <div className='selectedCandidateContainer'>
                <div className='selectedCandidateText'>your candidate:</div>
                <div className='selectedCandidateName'>{this.state.selectedCandidate}</div>
              </div>
              <Link to='/elections'><button className='button1'>more elections...</button></Link>
            </div>
          </div>
        </div>
      );
    }
    else{
      return(<div>loading...</div>)
    }

  }
}

export default SelectedCandidate;
