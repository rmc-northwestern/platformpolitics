import React, { Component } from 'react';
import Headbar from '../components/Headbar';
import { Link } from 'react-router-dom';
import Candidate from '../components/Candidate';

class Election extends Component {

  constructor(props){
    super(props);
    this.state = {
      handle:'',
      race:'init',
      elections:''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('/api/get_races')
      .then(res => res.json())
      .then(elections => this.setState({elections},
        () => console.log('Elections fetched...', elections)))
      .then(() => this.populateRace());
  }

  populateRace(){
    var i;
    for (i=0; i < this.state.elections.length; i++){
      if (this.state.elections[i][0] === this.props.match.params.race){
        this.setState({
          race: this.state.elections[i]
        })
      }
    }
    console.log("RACE:",this.state.race)
  }

  handleChange(event) {
    this.setState({handle: event.target.value});
  }

  render() {
    console.log('STATE', this.state)
    var handleURL = '/selectedCandidate/' + this.props.match.params.race + '/' + this.state.handle

    return (
      <div>
        <Headbar backTo='/elections'/>
        <div className='electionsContainer'>
          <div className='electionsTitle'><b>Texas</b><br/>Senate:</div>
          <div className='candidateOuterContainer'>
            <Candidate
              img='/img/ted.jpg'
              name= {this.state.race[1]}
              party='Republican'
              handle='@tedcruz'
              />
            <Candidate
              img='/img/beto.jpg'
              name= {this.state.race[2]}
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
