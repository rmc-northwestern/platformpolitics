import React, { Component } from 'react';
import Headbar from '../components/Headbar';
import { Link } from 'react-router-dom';
import Candidate from '../components/Candidate';

class Election extends Component {

  constructor(props){
    super(props);
    this.state = {
      handle:''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({handle: event.target.value});
  }

  render() {
    console.log('current handle: ',this.state.handle)
    var handleURL = '/selectedCandidate/' + this.state.handle

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
              />
            <Candidate
              img='/img/beto.jpg'
              name='Beto ORourke'
              party='Democrat'
              handle='@BetoORourke'
              />
            <div className='electionsDescription'>enter a twitter handle:</div>
              <input className='electionsInput' type='text' placeholder='@i-am-a-handle...'  onChange={this.handleChange} />
            <Link to={handleURL}><button className='button1'>test your tweets</button></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Election;
